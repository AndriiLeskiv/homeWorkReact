import {IProducts} from "./IProducts.ts";

export interface ICart {
	id: number;
	products: IProducts[];
	total: number;
	discountedTotal: number;
	userId: number;
	totalProducts: number;
	totalQuantity: number;
}
