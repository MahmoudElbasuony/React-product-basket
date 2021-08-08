import { BillingFrequency } from '../models/enums';
export function getBillingFrequencyText(billingFrequency: BillingFrequency) {
    switch (billingFrequency) {
        case BillingFrequency.MONTHLY:
            return '/ month';
        case BillingFrequency.ONCE:
            return 'one time'
        default:
            return '';
    }
}