import React from 'react';
import './about.scss';

class AboutPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {

        };
    }

    render(){

        return(
            <div className="container-fluid mb-4 aboutpage">
                <div className="row">

                    <div className="col-md-12 col-lg-12 col-sm-12">
                        <h4>About Us</h4>
                    </div>

                </div>
            </div>
        );
    }
}

export default AboutPage;