import {urls} from "../constants/url.ts";
import {ICars} from "../models/cars/ICars.ts";

export const carsService = {
    getAllCars: async () => {
        try {
            const response = await fetch(urls.cars.getCars);
            if (!response.ok) {
                throw new Error("Failed to fetch cars");
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching cars:", error);
            return [];
        }
    },

    createCar: async (car:ICars) => {
        try {
            const response = await fetch(urls.cars.getCars, {
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(car),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to create car");
            }
            return await response.json();
        } catch (error) {
            console.error("Error creating car:", error);
            throw error;
        }
    },

    updateCar: async (id:number, car:ICars) => {
        try {
            const response = await fetch(urls.cars.updateCar(id), {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(car),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to update car");
            }

            return await response.json();
        } catch (error) {
            console.error("Error updating car:", error);
            throw error;
        }
    },

    deleteCar: async (id:number) => {
        try {
            const response = await fetch(urls.cars.deleteCar(id), {
                method: "DELETE",
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to delete car");
            }
            return true;
        } catch (error) {
            console.error("Error deleting car:", error);
            throw error;
        }
    },

    getCarById: async (id:number) => {
        try {
            const response = await fetch(urls.cars.getCarById(id));
            if (!response.ok) {
                throw new Error("Failed to fetch car by ID");
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching car by ID:", error);
            return null;
        }
    },
}