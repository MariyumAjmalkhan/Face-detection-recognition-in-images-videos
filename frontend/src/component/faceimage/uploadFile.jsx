/* eslint-disable eqeqeq */
import React from 'react';

class UploadImage extends React.Component{

    enteredFile;
    arrayLocalStorage = [];

    constructor(props){
    
        super(props);
        this.state = {
            file: null,
            imagePreviewUrl: null,
            ftype: null,
            fileSize: null,
            fileuploadDate: null,
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
            
        // server request
        
        console.log('handle Uploading', this.state.file);
    }

    handleimagechange = (event) => {
        
        this.setState({
            imagePreviewUrl : event.target.files[0],
            file: event.target.files[0],
            ftype: event.target.files[0].type,
            fileuploadDate: new Date().toString(),
            fileSize: (event.target.files[0].size / (1024 * 1024)).toFixed(2) + 'MB'
        });

        this.props.callMe(event.target.files[0].name);

        let reader = new FileReader();
        
        reader.onloadend = () => {
            this.setState({
                imagePreviewUrl: reader.result
            });
        }
        
        reader.readAsDataURL( event.target.files[0]);
    
    }

    componentDidMount(){
        this.enteredFile = JSON.parse(localStorage.getItem('enterImage'));
        
        if(localStorage.getItem('enterImage')){
            this.setState({
                imagePreviewUrl: this.state.imagePreviewUrl
            });
            
        }
    }

    componentWillUpdate( nextProps,nextState ){
        localStorage.setItem('enterImage', JSON.stringify(nextState));
    }

    render(){

        let $imagePreview = (<div>Please select an Image for Preview</div>);
        let $smallImage = (<div>File small Preview</div>)

            if (this.state.imagePreviewUrl) {
                
                $imagePreview = (<div className="image-container" ><img src={this.state.imagePreviewUrl} 
                alt={this.state.imagePreviewUrl} 
                width="100%"
                style={{ overflowY: 'hidden', height: 'auto' }} 
                /> 
                </div>);

                $smallImage = (<div className="image-container mt-3" ><img src={this.state.imagePreviewUrl} 
                alt={this.state.imagePreviewUrl}
                width="100%"
                style={{ overflowY: 'hidden', height: 'auto' }} 
                /> 
                </div>);

            } 
        
        return(
            <div className="row">
                <div className="col-md-3 col-lg-3 col-sm-12">
                                
                    <form className="form" encType="multipart/form-data" onSubmit={(e) => this.handleSubmit(e) }>
                        <div className="form-group">
                            <label htmlFor=""><b>Choose Your File</b></label>
                            <input type="file" onChange={(e) => this.handleimagechange(e)} />
                        </div>
                    </form>
                    <br/><br/>
                    <div className="col-md-12 col-lg-12 col-sm-12 w-100 p-0">
                        <b>Entered Image File</b>: {$smallImage} 
                        <br/>
                        <b>File Type</b>: {this.state.ftype}
                        <br />
                        <b>File Size</b>: {this.state.fileSize}
                        <br />
                        <b>File Uploaded Time</b>: {this.state.fileuploadDate}
                        <br /><br />
                        <b>Detected Face</b>:
                    </div>

                </div>
                <div className="col-md-9 col-lg-9 col-sm-12 pl-5 pr-5 pb-4">
                    {$imagePreview}                               
                </div>

                <div className="w-100 mt-2 mb-2 text-right col-md-12 col-lg-12 col-sm-12">
                    <button className="btn btn-outline-primary btn-sm" onClick={this.handleSubmit}>click submit</button>
                </div>

            </div>
        );
    }

}

export default UploadImage;