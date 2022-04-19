import React, {Component} from 'react';

import ProductService from '../Services/ProductService';

class ProductComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loaded: 0
        }
    }

    componentDidMount(){
        ProductService.getLoadedAfter(213).then((response)=>{
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

export default ProductComponent;