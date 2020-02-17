import React from 'react';
import './realTimeCam.scss';

class RealTimeCamera extends React.Component{

    constructor(props){
        super(props);

        this.state = {

        };
    }

    render(){

        return(
            <div className="container-fluid mb-4 realCam">
                <div className="row">

                    <div className="col-md-12 col-lg-12 col-sm-12">
                        <h4>Real Time Camera Detection: </h4>
                        <div className="button text-center">
                            <button className="btn btn-outline-primary">Click To Open</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default RealTimeCamera;