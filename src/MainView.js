import * as React from "react";
import { Header } from "./header/Header";

export class MainView extends React.Component {
    render(){
        return (
            <div>
                <h1>Request</h1>
                <Header />
            </div>
        )
    }
}