// const baseUrl = "http://owu.linkpc.net/carsAPI/v1";
//
// export const urls = {
//     cars: {
//         getCars: baseUrl + '/cars',
//         createCar: baseUrl + '/cars',
//         updateCar: (id: number) => baseUrl +   '/cars/' + id,
//         deleteCar: (id: number) => baseUrl +   '/cars/' + id,
//         getCarById: (id: number) => baseUrl +   '/cars/' + id,
//     }
// }

import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v1",
    headers: { "Content-Type": "application/json" }
});