# 🔌 Commercial Client Intake Contract Specification
## Project: RAPIDO INFRATEL LLP Web Platform (`RILLP` · `PRJ-11`)
**Document ID:** `API-RILLP-CONTACT-V1`  
**Classification:** Starfleet Level 1 API Interface Contract  
**Author:** Dr. Richard Daystrom (`»Daystrom` · Agent 04 | Solutions Architect)  
**Target Component:** `website/src/components/ContactForm.jsx`

---

## 1. Commercial Intake Request Schema

### 1.1 Endpoint Overview
* **Method:** `POST`
* **Transport:** Client-side form handling with asynchronous webhook / serverless dispatch
* **Content-Type:** `application/json; charset=utf-8`

### 1.2 Request Payload Specification
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "CommercialIntakeRequest",
  "type": "object",
  "properties": {
    "fullName": {
      "type": "string",
      "minLength": 2,
      "maxLength": 100,
      "description": "Full legal or professional name of the inquiring party."
    },
    "corporateEmail": {
      "type": "string",
      "format": "email",
      "description": "Corporate or official organizational email address."
    },
    "phone": {
      "type": "string",
      "pattern": "^[+]?[0-9\\s-]{10,15}$",
      "description": "Direct telephone number with country code."
    },
    "practiceFocus": {
      "type": "string",
      "enum": [
        "proprietary-mobile-products",
        "sovereign-cloud-hosting",
        "enterprise-governance-platforms",
        "applied-ai-bhashini",
        "civic-public-infrastructure",
        "general-architecture-inquiry"
      ],
      "description": "Target engineering practice area."
    },
    "projectScope": {
      "type": "string",
      "minLength": 10,
      "maxLength": 2000,
      "description": "Executive summary of project requirements, timeline, or architecture objectives."
    },
    "_honeypot": {
      "type": "string",
      "maxLength": 0,
      "description": "Hidden anti-bot spam field. Must be empty."
    }
  },
  "required": [
    "fullName",
    "corporateEmail",
    "practiceFocus",
    "projectScope"
  ],
  "additionalProperties": false
}
```

---

## 2. Response Status Codes & State Matrix

| HTTP Status | State Condition | Client Response Behavior |
| :---: | :--- | :--- |
| **`200 OK`** | Submission accepted & sanitized | Displays green confirmation banner: *"Thank you. Our solutions architecture team has received your inquiry."* |
| **`400 Bad Request`** | Validation failure (malformed email, missing fields) | Form remains populated; invalid inputs highlighted with red error styling. |
| **`422 Unprocessable`** | Spam honeypot tripped (`_honeypot` populated) | Silent rejection; synthetic success returned to neutralize automated bot scrapers. |
| **`500 Internal Error`**| Network/gateway timeout | Non-blocking retry alert displayed with direct email fallback link (`contact@rapidoinfratel.com`). |
