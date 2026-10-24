#!/usr/bin/env bash
# Self-Hydrating Project Restore Script
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEMP_DIR="$(mktemp -d)"

echo "Cloning https://github.com/PragnaKiran/RapidoInfrTel.git (branch: main)..."
git clone -b "main" "https://github.com/PragnaKiran/RapidoInfrTel.git" "$TEMP_DIR"

# Move git repo files into current dir (preserving local secret folder)
shopt -s dotglob
for item in "$TEMP_DIR"/*; do
  base="$(basename "$item")"
  if [ "$base" != "." ] && [ "$base" != ".." ]; then
    rm -rf "$DIR/$base"
    mv "$item" "$DIR/"
  fi
done
rm -rf "$TEMP_DIR"

# Restore local untracked secrets if backup exists
if [ -d "$DIR/.local_secrets_backup" ]; then
  echo "Restoring local untracked secret files to exact paths..."
  cp -R "$DIR/.local_secrets_backup/"* "$DIR/" 2>/dev/null || true
  rm -rf "$DIR/.local_secrets_backup"
  echo "Secrets restored successfully."
fi

# Cleanup stub notice
rm -f "$DIR/ARCHIVE_NOTICE.md" "$DIR/restore.sh"

echo "Workspace successfully restored!"
