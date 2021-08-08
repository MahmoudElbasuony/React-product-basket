import { Product } from './product';
export class Category {
    name!: string;
    products: Product[];
    constructor() {
        this.products = [];
    }
}