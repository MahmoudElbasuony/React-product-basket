import { Price } from './price';

export class Product {
    name!: string;
    description!: string;
    price: Price[];
    selected: boolean;
    constructor() {
        this.selected = false;
        this.price = [];
    }
}