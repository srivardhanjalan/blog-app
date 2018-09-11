import React, {Component} from 'react'
import {withRouter} from 'react-router';

class AccessRoute extends Component{
    constructor(props){
        super(props);
    }
    //If you want to find the location on mount use this
    componentDidMount(){
        console.log("the path name is ",this.props.location.pathname);
    }
    //If you want to find the location on change use this
    componentDidUpdate(prevprops){
        if(this.props.location.pathname!=prevprops.location.pathname){
            console.log("the new path name is ",this.props.location.pathname);
            if(this.props.location.pathname==='/contact') {
              window.location.reload();
            }
        }
    }
    render(){
        return(
            this.props.children
            );
    }
}
export default withRouter(AccessRoute)
