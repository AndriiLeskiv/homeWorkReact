import {FC} from "react";
import {ICars} from "../../models/cars/ICars.ts";

type Props = {
    car:ICars;
}

export const CarComponent:FC<Props> = ({car}) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 my-4 bg-gray-50 shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Car ID: {car.id}</h3>
            <p className="text-sm text-gray-600">Brand: {car.brand}</p>
            <p className="text-sm text-gray-600">Price: ${car.price}</p>
            <p className="text-sm text-gray-600">Year: {car.year}</p>
        </div>
    );
};