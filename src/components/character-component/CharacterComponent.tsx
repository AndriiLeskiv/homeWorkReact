import {ICharacter} from "../../models/ICharacter.ts";
import {ReactNode} from "react";

interface CharacterComponentProps {
    item: ICharacter,
    children: ReactNode,
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className="flex items-center p-4 mb-4 border border-gray-300 rounded-lg shadow-md bg-gray-50">
            <img src={item.photo} alt={item.name} className="w-24 h-24 rounded-lg mr-4"/>
            <div>
                <h2 className="text-lg font-bold text-gray-800">
                    {item.name} {item.surname}
                </h2>
                <p className="text-sm text-gray-600">
                    Age: {item.age}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                    {children}
                </p>
            </div>
        </div>
    )
}