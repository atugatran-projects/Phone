import React from 'react';
import './App.css';
import '../App-icon.css';

const App = (props) => {
    return (
        <div className="app">
            {/* <to draggable="false" href="#" target="_blank" className="app-icon"> */}
            <section className="app-icon">
                <div className="app-img-container">
                    <div className="app-img-content" style={{ backgroundPosition: "0px -96px" }}>
                        <div className={props.img + " app-img"}></div>
                    </div>
                </div>
            </section>
            <div className="app-name">{props.text}</div>
        </div>
    )
}

export default App
