import React, { Component } from 'react'
import {Route,Switch} from "react-router-dom"
import Home from "../paginas/Home"
import AgregarAlumno from "../paginas/AgregarAlumno"


export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" children={(props)=><Home {...props} />} exact/>
                    <Route path="/AgregarAlumno" component={AgregarAlumno}/>
                </Switch>
            </main>
        )
    }
}
