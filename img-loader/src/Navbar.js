import React,{Component} from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends Component{

    render(){
        return(
            <div>
                <NavLink
                to="/"
                exact
                >
                    Form
                </NavLink>
                <NavLink
                to="/images"
                exact
                >
                    Folder
                </NavLink>

               

             </div>
        )
    }

    
}

export default NavBar;