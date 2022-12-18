import * as React from "react";
import { Header } from "../header/Header";
import './Sidebar.css'


export class Sidebar extends React.Component{
    render(){
        return (
            <>
                <Header />
                <div className="flex h-screen">
                    <div className="w-0 md:w-1/4 dark:bg-slate-800">
                        <button className="name1">Topic1</button>
                    </div>
                    <div className="w-full dark:bg-slate-800">
                        asd
                    </div>
                </div>
            </>
        )
    }
}