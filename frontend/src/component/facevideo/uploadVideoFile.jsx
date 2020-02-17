import React from 'react';

class UploadVideo extends React.Component{

    constructor(props){
    
        super(props);
        this.state = {
            file: null,
            videoPreviewUrl: null,
            ftype: null,
            fileuploadDate: null,
            fileSize: null
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
            
        // server request

        console.log('handle Uploading', this.state.file);
    }

    handlevideochange = (event) => {
        this.setState({
            videoPreviewUrl: event.target.files[0],
            file : event.target.files[0],
            ftype: event.target.files[0].type,
            fileuploadDate: new Date().toString(),
            fileSize:  Math.floor(event.target.files[0].size / (1024 * 1024)) + 'MB'
        });

        this.props.callMe(event.target.files[0].name);

        let reader = new FileReader();
        
        reader.onloadend = () => {
            this.setState({
                videoPreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(event.target.files[0]);
    }


    render(){

        let $videoPreview = (<div>Please select an Video for Preview</div>);
        let $smallvideo = (<div>File small Preview</div>)

                if (this.state.videoPreviewUrl) {
                    
                    $videoPreview = (<div className="video-container" >
                        <video 
                        src={this.state.videoPreviewUrl} 
                        width="100%" 
                        type={this.state.type} 
                        style={{ overflowY: 'hidden', height: 'auto' }}
                        controls 
                        autoPlay
                        />
                    </div>);

                    $smallvideo = (<div className="video-container mt-3" >
                        <video 
                        src={this.state.videoPreviewUrl} 
                        width="100%" 
                        type={this.state.type} 
                        style={{ overflowY: 'hidden', height: 'auto' }}
                        autoPlay
                        controls />
                    </div>);

                } 
 
        return(
            <div className="row">
                <div className="col-md-3 col-lg-3 col-sm-12">
                                
                    <form className="form" encType="multipart/form-data" onSubmit={(e) => this.handleSubmit(e) }>
                        <div className="form-group">
                            <label htmlFor=""><b>Choose Your File</b></label>
                            <input type="file" onChange={(e) => this.handlevideochange(e)} />
                        </div>
                    </form>
                    <br/><br/>
                    <div className="col-md-12 col-lg-12 col-sm-12 w-100 p-0">
                        <b>Entered Video File</b>: {$smallvideo} 
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
                    {$videoPreview}                               
                </div>

                <div className="w-100 mt-2 mb-2 text-right col-md-12 col-lg-12 col-sm-12">
                    <button className="btn btn-outline-primary btn-sm" onClick={this.handleSubmit}>click submit</button>
                </div>

            </div>
        );
    }

}

export default UploadVideo;