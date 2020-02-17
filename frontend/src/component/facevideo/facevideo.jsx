import React from 'react';
import './facevideo.scss';
import UploadVideo from './uploadVideoFile';


class DetectFaceInVideo extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            names: []
        };
    }

    updateName = (name) => {
        this.state.names.push(name);
        this.props.callMe(this.state.names);
    }

    render(){

        return(
            <div className="container-fluid mb-4 FaceVideo">
                <div className="row">

                    <div className="col-md-12 col-lg-12 col-sm-12">
                        <h4>Face Detection In Video: </h4>
                        
                        <UploadVideo callMe={ (e) => this.updateName(e) } />
                        
                    </div>

                </div>
            </div>
        );
    }
}

export default DetectFaceInVideo;