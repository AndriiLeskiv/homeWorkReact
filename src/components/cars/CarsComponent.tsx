import {useEffect, useState} from "react";
import {carsService} from "../../services/api.service.ts";
import {ICars} from "../../models/cars/ICars.ts";
import {CarComponent} from "../car/CarComponent.tsx";

export const CarsComponent = () => {
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