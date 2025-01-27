import React from 'react';
import {NestedGroup} from "./NestedGroup.tsx";
import {useTheme} from "./ThemeContext.tsx";

export const MainContainer: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="main-container">
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} theme
            </button>
            <div className="left-section">
                <NestedGroup groupName="Left Group" />
            </div>
            <div className="right-section">
                <NestedGroup groupName="Right Group" />
            </div>
        </div>
    );
};