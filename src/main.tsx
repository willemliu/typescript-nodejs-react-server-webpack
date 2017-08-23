import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Title from "./components/title/Title";
import Clock from "./components/clock/Clock";

ReactDOM.render(
    <div>
        <Title name="Willem Liu"/>
        <Clock/>
    </div>,
    document.getElementById('root')
);
