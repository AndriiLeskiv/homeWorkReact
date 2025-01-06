import {CharacterComponent} from "../character-component/CharacterComponent.tsx";
import {simpsons} from "../../data/data.ts";

export const FamilyComponent = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Family Members
            </h1>
            {simpsons.map((value, index) => (
                <CharacterComponent item={value} key={index}>
                    {value.info}
                </CharacterComponent>
            ))}
        </div>
    )
}