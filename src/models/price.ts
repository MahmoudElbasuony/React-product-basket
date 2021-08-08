import { BillingFrequency } from "./enums";

export class Price {
    amount!: string;
    periodStart!: number;
    billingFrequency: BillingFrequency;
    constructor() {
        this.billingFrequency = BillingFrequency.Other;
    }
}