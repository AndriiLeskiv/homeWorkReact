import React from 'react';
import {DeepComponent} from "./DeepComponent.tsx";
interface NestedGroupProps {
    groupName: string;
}

export const NestedGroup: React.FC<NestedGroupProps> = ({ groupName }) => {
    return (
        <div className="nested-group">
            <h4>{groupName}</h4>
            <DeepComponent />
        </div>
    );
};