import {axiosInstance} from "../constants/url.ts";
import { ICars } from "../models/cars/ICars.ts";

interface CarService {
    getAllCars: () => Promise<ICars[]>;
    createCar: (car: ICars) => Promise<ICars>;
    updateCar: (id: number, car: ICars) => Promise<ICars>;
    deleteCar: (id: number) => Promise<boolean>;
    getCarById: (id: number) => Promise<ICars | null>;
}

export const carsService: CarService = {
    getAllCars: async ():Promise<ICars[]> => {
        try {
            const response = await axiosInstance.get('/cars');
            return response.data;
        } catch (error) {
            console.error("Error fetching cars:", error);
            return [];
        }
    },

    createCar: async (car: ICars):Promise<ICars> => {
        try {
            const response = await axiosInstance.post('/cars', car);
            return response.data;
        } catch (error) {
            console.error("Error creating car:", error);
            throw error;
        }
    },

    updateCar: async (id: number, car: ICars): Promise<ICars>  => {
        try {
            const response = await axiosInstance.put('/cars/' + id, car);
            return response.data;
        } catch (error) {
            console.error("Error updating car:", error);
            throw error;
        }
    },

    deleteCar: async (id: number): Promise<boolean>  => {
        try {
            const response = await axiosInstance.delete('/cars/' + id);
            return response.status === 200;
        } catch (error) {
            console.error("Error deleting car:", error);
            throw error;
        }
    },

    getCarById: async (id: number): Promise<ICars | null> => {
        try {
            const response = await axiosInstance.get('/cars/' + id);
            return response.data;
        } catch (error) {
            console.error("Error fetching car by ID:", error);
            return null;
        }
    },
};
