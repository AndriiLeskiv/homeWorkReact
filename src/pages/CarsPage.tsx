import {useEffect, useState} from "react";
import {ICars} from "../models/cars/ICars.ts";
import {carsService} from "../services/api.service.ts";
import {CarComponent} from "../components/car/CarComponent.tsx";


export const CarsPage = () => {
    const [cars, setCars] = useState<ICars[]>([]);

    useEffect(() => {
        carsService.getAllCars()
            .then((carsData : ICars[]) => setCars(carsData))
            .catch(error => console.error("Error setting cars:", error));
    }, []);
    return (
        <div>
            {
                cars.map((car: ICars) =>(
                    <CarComponent key={car.id} car={car}/>
                ))
            }
        </div>
    );
};