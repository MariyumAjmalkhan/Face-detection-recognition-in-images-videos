import React from 'react';
import './homepage.scss';

class HomePage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            img: 'homepagepic.png',
        };
    }

    render(){

        const { img } = this.state;
        const { imgName , videoName } = this.props;
        

        return(
            <div className="container-fluid mb-4 homepage">
                <div className="row">

                    <div className="col-md-12 col-lg-12 col-sm-12">
                        <div className="row">

                            <div className="col-md-6 col-lg-6 col-sm-12">
                                <img src={img} alt="FD" width="100%" title="detected face" />
                            </div>
                            
                            <div className="col-md-6 col-lg-6 col-sm-12 pt-3">
                                <h4>Detection Details: </h4>
                                <div className="input">
                                    <h5>User Input Images</h5>
                                        <div className="names">
                                            <h6>Names: </h6>
                                            {
                                                imgName.map( n => (
                                                    <li>{n}</li>
                                                ))
                                            }
                                        </div>
                                    <h6>Counter: {imgName.length}</h6>
                                </div>

                                <div className="input">
                                    <h5>User Input Videos</h5>
                                        <div className="names">
                                            <h6>Names: </h6>
                                            {
                                                videoName.map( n => (
                                                    <li>{n}</li>
                                                ))
                                            }
                                        </div>
                                    <h6>Counter: {videoName.length}</h6>
                                </div>

                            </div>

                        </div>    
                    </div>

                </div>
            </div>
        );
    }
}

export default HomePage;