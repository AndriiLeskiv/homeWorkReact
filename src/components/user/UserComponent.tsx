import {FC} from "react";
import {IUser} from "../../model/user/IUser.ts";
import "./UserComponent.css";

type UserTypeProps ={
    item:IUser
}

export const UserComponent:FC<UserTypeProps> = ({item}) => {
    return (
        <div className="card">
            <img src={item.image} alt={item.username}/>
            <h3>{item.firstName} {item.lastName} ({item.maidenName})</h3>
            <p><strong>ID:</strong> {item.id}</p>
            <p><strong>Username:</strong> {item.username}</p>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Phone:</strong> {item.phone}</p>
            <p><strong>Age:</strong> {item.age}</p>
            <p><strong>Gender:</strong> {item.gender}</p>
            <p><strong>Birth Date:</strong> {item.birthDate}</p>
            <p><strong>Blood Group:</strong> {item.bloodGroup}</p>
            <p><strong>Height:</strong> {item.height} cm</p>
            <p><strong>Weight:</strong> {item.weight} kg</p>
            <p><strong>Eye Color:</strong> {item.eyeColor}</p>
            <p><strong>Hair:</strong> {item.hair.color} ({item.hair.type})</p>
            <p><strong>Address:</strong> {item.address.address}, {item.address.city}, {item.address.state} ({item.address.stateCode}), {item.address.postalCode}, {item.address.country}</p>
            <p><strong>Coordinates:</strong> Lat {item.address.coordinates.lat}, Lng {item.address.coordinates.lng}</p>
            <p><strong>IP Address:</strong> {item.ip}</p>
            <p><strong>MAC Address:</strong> {item.macAddress}</p>
            <p><strong>University:</strong> {item.university}</p>
            <p>
                <strong>Bank:</strong> {item.bank.cardType} Card ({item.bank.cardNumber}),
                Expires: {item.bank.cardExpire}, Currency: {item.bank.currency}, IBAN: {item.bank.iban}
            </p>
            <p>
                <strong>Company:</strong> {item.company.name}, {item.company.department} - {item.company.title}
            </p>
            <p>
                <strong>Company
                    Address:</strong> {item.company.address.address}, {item.company.address.city}, {item.company.address.state} ({item.company.address.stateCode}), {item.company.address.postalCode}, {item.company.address.country}
            </p>
            <p>
                <strong>EIN:</strong> {item.ein}
            </p>
            <p>
                <strong>SSN:</strong> {item.ssn}
            </p>
            <p>
                <strong>User Agent:</strong> {item.userAgent}
            </p>
            <p>
                <strong>Crypto:</strong> {item.crypto.coin}, Wallet: {item.crypto.wallet},
                Network: {item.crypto.network}
            </p>
            <p>
                <strong>Role:</strong> {item.role}
            </p>
        </div>
    );
};