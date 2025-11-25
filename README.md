# Encryption API Service

NestJS-based encryption/decryption service using RSA and AES encryption.

## Features

- RSA encryption/decryption
- AES-256-CBC encryption/decryption
- Swagger API documentation at `/api-docs`
- Input validation
- Unit tests

## Installation

```bash
npm install
```

## Configuration

1. Copy `.env.example` to `.env`
2. Generate RSA keys from https://cryptotools.net/rsagen
3. Add your PUBLIC_KEY and PRIVATE_KEY to `.env`

## Running the Service

```bash
# Development
npm run start:dev

# Production
npm run build
npm run start:prod
```

Access Swagger docs at: http://localhost:3000/api-docs

## API Endpoints

### POST /get-encrypt-data
Encrypts payload with AES and RSA.

**Request:**
```json
{
  "payload": "string (0-2000 chars)"
}
```

**Response:**
```json
{
  "successful": true,
  "error_code": null,
  "data": {
    "data1": "encrypted_aes_key",
    "data2": "encrypted_payload"
  }
}
```

### POST /get-decrypt-data
Decrypts data with RSA and AES.

**Request:**
```json
{
  "data1": "encrypted_aes_key",
  "data2": "encrypted_payload"
}
```

**Response:**
```json
{
  "successful": true,
  "error_code": null,
  "data": {
    "payload": "decrypted_string"
  }
}
```

## Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## How It Works

### Encryption Flow (/get-encrypt-data)
1. Validate payload (0-2000 characters)
2. Generate random AES-256 key
3. Encrypt payload with AES key → data2
4. Encrypt AES key with RSA private key → data1
5. Return data1 and data2

### Decryption Flow (/get-decrypt-data)
1. Validate request
2. Decrypt data1 with RSA public key → AES key
3. Decrypt data2 with AES key → payload
4. Return payload
