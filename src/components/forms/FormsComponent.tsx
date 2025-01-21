import {ICars} from "../../models/cars/ICars.ts";
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validator/cars.validator.ts";
import {carsService} from "../../services/api.service.ts";
import {useNavigate} from "react-router-dom";

export const FormsComponent = () => {

    const navigate = useNavigate();

    const { handleSubmit, register, formState: { errors, isValid }, reset} = useForm<ICars>({
        mode: "all",
        resolver: joiResolver(carValidator)
    });

    const onSubmit: SubmitHandler<ICars> = async (data) => {
        try {
            await carsService.createCar(data);
            reset();
            alert("Car created successfully!");
            navigate("/cars");
        } catch (err) {
            console.error("Error creating car:", err);
            alert("Error creating car!");
        }
    };
    return (
        <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow mt-5">
            <h2 className="text-2xl font-bold mb-4">Create a New Car</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Brand</label>
                    <input type="text" {...register("brand")} className="w-full p-2 border border-gray-300 rounded"/>
                    {errors.brand && <p className="text-red-500 text-xs">{errors.brand.message}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium">Price</label>
                    <input type="number" {...register("price")} className="w-full p-2 border border-gray-300 rounded"/>
                    {errors.price && <p className="text-red-500 text-xs">{errors.price.message}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium">Year</label>
                    <input type="number" {...register("year")} className="w-full p-2 border border-gray-300 rounded"/>
                    {errors.year && <p className="text-red-500 text-xs">{errors.year.message}</p>}
                </div>
                <button type="submit"
                        disabled={!isValid}
                        className={`w-full ${isValid ? 'bg-blue-500' : 'bg-gray-500'} py-2 rounded text-white hover:bg-blue-600`}>
                    Create Car
                </button>
            </form>
        </div>
    );
};