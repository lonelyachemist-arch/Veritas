# Veritas
**Veritas** ("Truth") is a proof-of-concept (POC) that redefines the fusion of linguistic steganography and Post-Quantum Cryptography (PQC). By **inverting the flawed architecture of Abhedyam**, Veritas applies steganography to the *plaintext* before cryptographic operations, creating an actual defense layer, rather than a merely visual or aesthetic one. 

> "Steganography first, Encryption later."

## Architecture
Veritas is built on two core layers that work in sequence to protect the original message: 

## 1. Linguistic Steganography — GLOSSOPETRAE · Aeluris

- **The first layer transforms the plaintext into an innocent-looking message using GLOSSOPETRAE as a replacement for Abhedyam's abhedya-chhandas engine**

 - **GLOSSOPETRAE generates the Aeluris language from a deterministic seed (aeluris-stealth-2026)**.

- **The language derives from Latin and operates in covert mode, which means**:

- **The output text reads like an seemingly everyday dialogue (about cats, bread, flowers, etc.)**

- **The actual data is hidden in the third level of meaning: a vowel shift pattern applied to every third word**.

**Example (POC)**:

Original Message:	                       

"RENDEZVOUS at sector 7 at 2200 hours"	

Steganographic (Aeluris) Output:

"Ta gatis venore a domis perna prime note sekune kande ta sol klare obskuri e tene porta kapte ta flori per pane."

> "English translation: "The cat will come home on the first secondary night when the clear sun darkens and they take the door of the flowers through the bread."

- **Only agents who share the same seed (aeluris-stealth-2026) and protocol can decode the hidden message**

  - **This layer ensures that even if an observer intercepts the text, they see only a mundane and seemingly common dialogue — not the original message**


 ## 2. Post-Quantum Cryptography — Kyber-768 (ML-KEM)

- **The second layer protects the derived key using Kyber-768, NIST-standardized post-quantum key encapsulation mechanism (KEM)**

- **This key is encapsulated with Kyber using the recipient's public key**

 - **The resulting ciphertext is what gets transmitted**

## Installation

### 1. Prerequisites
Make sure you have installed:

- Node.js 20+ (LTS version recommended) 

- npm (comes with Node.js)

- Git (Git Bash)

### 2. Clone the Repository
```bash
git clone https://github.com/lonelyachemist-arch/Veritas.git
cd VERITAS
```

### 3. Install Dependencies

```bash
npm install
```


 ### 4. Run the POC

```bash
## Run the encryption flow
node veritas-encrypt

## Run the decryption flow
node veritas-decrypt
```


