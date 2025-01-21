import {IDimensions} from "./IDimensions.ts";
import {IMeta} from "./IMeta.ts";
import {IReviews} from "./IReviews.ts";

export interface IProduct{
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: IDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: IReviews[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: IMeta;
  thumbnail: string;
  images: string[];
}