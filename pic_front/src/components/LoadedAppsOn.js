import { Today } from '@material-ui/icons';
import React, {Component} from 'react';
import CatalogService from '../Services/CatalogService';


class LoadedAppsOn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loaded: 0
        }
    }

    componentDidMount(){
        CatalogService.getLoadedAppsOn(153).then((response)=>{
            this.setState({loaded: response.data})
        })

    }
    
    render(){
            return (
                <div>
                    {/* {Date().substring(0,16)} */}
                    {this.state.loaded}
                </div>
            )
    }
    

 

}

export default LoadedAppsOn;