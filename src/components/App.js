import React, { Component } from 'react';
import Navigation from "./nav/Navigation";
import {BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navigation> </Navigation>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
