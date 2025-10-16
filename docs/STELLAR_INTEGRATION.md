# Stellar Integration Guide

## Overview

The African Currency Platform integrates with the Stellar blockchain for managing digital wallets and transactions.

## Setup

### 1. Create Stellar Account

Visit [Stellar Lab](https://lab.stellar.org/) to create a test account on Testnet.

### 2. Environment Variables

Add the following to your `.env` file:

```env
STELLAR_NETWORK=testnet
STELLAR_HORIZON_URL=https://horizon-testnet.stellar.org
STELLAR_SIGNING_KEY=your_secret_key_here
STELLAR_PUBLIC_KEY=your_public_key_here
```

### 3. Funding the Account

For testnet, use the [Stellar Testnet Friendbot](https://developers.stellar.org/docs/fundamentals-and-concepts/testnet-public) to fund your account.

## Features

### Wallet Creation

Create a Stellar wallet for users:

```
POST /wallets
{
  "currencyCode": "USD",
  "address": "GBRPYHIL2CI3...",
  "walletType": "stellar"
}
```

### Transaction Submission

Submit transactions to Stellar:

```
POST /transactions
{
  "type": "transfer",
  "fromCurrency": "USD",
  "toCurrency": "EUR",
  "fromAmount": 100,
  "toAmount": 92
}
```

### Account Verification

Verify Stellar account ownership by signing a challenge.

## Testing

Use the Stellar Testnet to test transactions without real money.

```bash
curl https://horizon-testnet.stellar.org/accounts/YOUR_PUBLIC_KEY
```

## Production Considerations

- Switch `STELLAR_NETWORK` to `public` for production
- Use `https://horizon.stellar.org` for production horizon URL
- Implement proper key management and security
- Enable multisig for high-value transactions
- Set up monitoring and alerts

## Documentation

- [Stellar Documentation](https://developers.stellar.org/)
- [Stellar SDK JS](https://github.com/StellarCN/js-stellar-sdk)
- [Horizon API Reference](https://developers.stellar.org/api/introduction/)

## Troubleshooting

### "Not Found" Error

Account doesn't exist or has no XLM balance. Fund with Friendbot.

### Transaction Submission Failed

Check account sequence number and available balance.

### Timeout Errors

Horizon service may be unavailable. Try another endpoint or wait.
