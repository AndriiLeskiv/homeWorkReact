import { useForm } from "react-hook-form";
import {ICars} from "../models/cars/ICars.ts";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {carsService} from "../services/api.service.ts";

export const CarDetailPage = () => {
    const navigate = useNavigate();
    const [carData, setCarData] = useState<ICars | null>(null);
    const [carId, setCarId] = useState<number | null>(null);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ICars>();

    // Функція для пошуку автомобіля за ID
    const handleSearch = async (id: number) => {
        try {
            const car = await carsService.getCarById(id);
            if (car) {
                setCarData(car);
                setCarId(id);
                reset(car);
            } else {
                alert("Car not found!");
                setCarData(null);
            }
        } catch (error) {
            console.error("Error fetching car:", error);
            alert("Error fetching car by ID!");
        }
    };

    // Обробка відправки форми для оновлення автомобіля
    const onSubmit = async (data: ICars) => {
        try {
            await carsService.updateCar(Number(carId), data);
            alert("Car updated successfully!");
            navigate("/cars");
        } catch (error) {
            console.error("Error updating car:", error);
            alert("Error updating car!");
        }
    };

    // Функція для видалення автомобіля
    const handleDelete = async () => {
        if (carId) {
            try {
                await carsService.deleteCar(Number(carId));
                alert("Car deleted successfully!");
                navigate("/cars");
            } catch (error) {
                console.error("Error deleting car:", error);
                alert("Error deleting car!");
            }
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow mt-5">
            <h2 className="text-2xl font-bold mb-4">Search, Update or Delete Car</h2>

            <div className="mb-4">
                <input type="number" placeholder="Enter Car ID" className="w-full p-2 border border-gray-300 rounded"
                    onChange={(e) => setCarId(Number(e.target.value))}/>
                <button
                    onClick={() => handleSearch(Number(carId))}
                    className="w-full bg-blue-500 text-white py-2 rounded mt-2 hover:bg-blue-600">
                    Search
                </button>
            </div>

            {carData ? (
                <>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Brand</label>
                            <input type="text" {...register("brand")} defaultValue={carData.brand}
                                className="w-full p-2 border border-gray-300 rounded"/>
                            {errors.brand && <p className="text-red-500 text-xs">{errors.brand.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Price</label>
                            <input type="number" {...register("price")} defaultValue={carData.price}
                                className="w-full p-2 border border-gray-300 rounded"/>
                            {errors.price && <p className="text-red-500 text-xs">{errors.price.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Year</label>
                            <input
                                type="number" {...register("year")} defaultValue={carData.year}
                                className="w-full p-2 border border-gray-300 rounded"/>
                            {errors.year && <p className="text-red-500 text-xs">{errors.year.message}</p>}
                        </div>

                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                            Update Car
                        </button>
                    </form>

                    <button
                        onClick={handleDelete}
                        className="w-full bg-red-500 text-white py-2 rounded mt-4 hover:bg-red-600">
                        Delete Car
                    </button>
                </>
            ) : (
                <div>No car found. Please search by ID.</div>
            )}
        </div>
    );
};