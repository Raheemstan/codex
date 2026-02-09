# Payment Flow (Paystack)

## One-time payment
1. Client requests `/api/payments/initialize` with appointment + amount.
2. Server creates Paystack transaction and stores `Payment` with status `initiated`.
3. Client redirects to Paystack checkout.
4. Paystack webhook hits `/api/payments/webhook`.
5. Server verifies signature + reference.
6. Payment updated to `paid` and appointment status → `confirmed`.
7. Commission + consultant payout recorded.

## Subscription
1. Client selects plan; `Subscriptions` collection created.
2. Paystack returns subscription code.
3. Webhook updates subscription status + next billing date.

## Refund
1. Admin triggers refund with reason.
2. Paystack refund endpoint called.
3. Payment status updated to `refunded`.

## Split payments
- Store platform commission (percentage + flat fee).
- Payout to consultant via Paystack subaccount.
