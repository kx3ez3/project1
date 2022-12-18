import * as React from "react";
import { Header } from "../header/Header";

export class MovieView extends React.Component{

    constructor(){
        super()
    }
    componentDidMount(){
        this.getData()
    }

    getData(){
        let aa = 'https://ww10.moviesrulz.live/';
        fetch(aa).then(
            (res)=>{
                console.log(res.body)
            }
        )
        return ''
    }


    render(){
        return (
            <>
                <Header />
                <div className="h-screen bg-slate-800">
                    <div className="flex flex-row flex-wrap justify-center">
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                    </div>
                </div>
            </>
        )
    }
}

let MovieCard = (imgSrc) => {
    return (
    <div className="m-4">
        <div className="rounded border border-sky-200 h-60 w-32 lg:h-64 lg:w-40">
            <div className="">
                <img className="rounded shadow-lg h-40 w-32 lg:h-48 lg:w-40" src="https://jiorockers.cool/details/Preview/96050.jpg" alt="" />
            </div>
            <div className="">
                <div className="text-xs p-2 text-gray-400 text-justify">Jagamemaya - Instant Karma (2022) Telugu Original HDRip</div>
            </div>
        </div>
    </div>
    )
}