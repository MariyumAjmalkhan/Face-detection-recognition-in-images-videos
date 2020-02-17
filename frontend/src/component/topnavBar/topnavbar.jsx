import React from 'react';
import TopNavBarItem from '../../appData/topnavBar';
import {Link} from 'react-router-dom';
import NavItem from './navItems'; 

class TopNavBar extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            navbarItem: TopNavBarItem
        };
    }

    render(){
       
        const {navbarItem} = this.state;
        
        const styles = {
            fontFamily: 'serif',
            fontSize: '22px',
            margin: '45px 0px 20px 0px',
        };

        const styles1 = {
            borderRadius: '10px',
        };
       
        return(

        <div className="container-fluid mb-4">
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 text-center" style={styles}>
                        <h3>Face Detection & Recognition in Images & Videos</h3>
                    </div>
                    <div className="col-md-12 col-lg-12 col-sm-12 bg-light">
                        
                        <nav className="navbar navbar-expand-md navbar-expand-lg navbar-light pl-0 pr-0" style={styles1}>

                            <div className="navbar-nav">
                            <div className="nav-item nav-link">
                                <b>DETECTION</b>
                            </div>
                            <Link className="nav-item nav-link" to="/" title="Home">
                                <b>Home</b>
                            </Link>

                                {
                                    navbarItem.map( ({ id, ...allOtherProps }) => (
                                        <NavItem key={id} {...allOtherProps} />
                                    ))
                                }   

                            </div>
                            <div className="navbar-nav ml-auto">
                                <Link className="nav-item nav-link active" to="/page/about">
                                    About
                                </Link>
                            </div>

                        </nav>

                    </div>
                </div>
            </div>
        );
    }
}

export default TopNavBar;