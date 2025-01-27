import React from 'react';
import {ThemeProvider} from "./component/ThemeContext.tsx";
import {MainContainer} from "./component/MainContainer.tsx";

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <div className="app">
                <h1>Theme Switcher with Deep Tree</h1>
                <MainContainer />
            </div>
        </ThemeProvider>
    );
};

export default App;