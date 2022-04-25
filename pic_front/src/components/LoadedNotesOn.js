import React, {Component} from 'react';
import CatalogService from '../Services/CatalogService';


class LoadedNotesOn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loaded: 0
        }
    }

    componentDidMount(){
        CatalogService.getLoadedNotesOn(154).then((response)=>{
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

export default LoadedNotesOn;