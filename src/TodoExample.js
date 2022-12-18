import * as React from "react";

export class TodoExample extends React.Component{
    PRODUCTS_URL = 'https://dummyjson.com/products'
    constructor(props){
        super(props)
        this.state = {
            PRODUCTS_DATA : []
        } 
    }
    fetchDataApi(){
        fetch(this.PRODUCTS_URL)
        .then((value)=>{
            value.json().then(
                (value2)=>{
                    console.log(value2)
                    this.setState({PRODUCTS_DATA:value2})
                }
            )
        },
        (err)=>{
            console.log('data Not Fetched @@');
        }
        )
    }

    componentDidMount(){
        this.fetchDataApi()
    }

    render(){
        return (
            <div style={{textAlign:"center"}}>
                <h1>Products</h1>
                {this.state.PRODUCTS_DATA.length !==0 ? this.state.PRODUCTS_DATA['products'].map(
                        (val,myindex)=> (<PorductItem key={myindex} data={val} />)
                    ):[]}
                <br />
                <br />
                <br />
            </div>
        )
    }
}


const PorductItem = ({data}) =>{
    return (
        <>
            <img src={data.thumbnail} alt={data.title+"image"} width="400" />
            <h4>{data.title}</h4>
            <strong>${data.price}</strong>
            <p>{data.description}</p>
        </>
    )
}

