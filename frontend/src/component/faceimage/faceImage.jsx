import React from 'react';   // useState is hooks concept
import './faceimage.scss';
import './uploadFile';
import UploadImage from './uploadFile';


class DetectFaceInImage extends React.Component{

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
            <div className="container-fluid mb-4 FaceImage">
                <div className="row">

                    <div className="col-md-12 col-lg-12 col-sm-12">
                        <h4>Face Detection In Image: </h4>
                        
                        <UploadImage callMe={ e => this.updateName(e) } />
                        
                    </div>

                </div>
            </div>
        );
    }
}

export default DetectFaceInImage;