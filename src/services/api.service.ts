import {urls} from "../constants/url.ts";

export const carsService = {
    getAllCars: async () => {
        return await fetch(urls.cars.getCars)
            .then((res) => res.json())
            .catch((error) => {
                console.error("Error fetching cars:", error);
                return [];
            });
    }
}