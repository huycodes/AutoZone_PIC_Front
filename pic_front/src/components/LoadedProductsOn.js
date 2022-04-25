import React, {Component} from 'react';

import ProductService from '../Services/ProductService';

class LoadedProductsOn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loaded: 0
        }
    }

    componentDidMount(){
        ProductService.getLoadedOn(80).then((response)=>{
            this.setState({loaded: response.data})
        })

    }
    
    render(){
            return (
                <div>
                    {this.state.loaded}
                </div>
            )
    }
    

 

}

export default LoadedProductsOn;