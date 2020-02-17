import React from 'react';
import { Route,Switch } from 'react-router-dom';
import UpperStyle from './component/divStyles/upperstyles';
import TopNavBar from './component/topnavBar/topnavbar';
import HomePage from './component/homePage/homepage';
import Footer from './component/footer/footer';
import AboutPage from './pages/about';
import RealTimeCamera from './component/realTimecam/realTimeCam';
import DetectFaceInImage from './component/faceimage/faceImage';
import DetectFaceInVideo from './component/facevideo/facevideo';


class FaceDetection extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      imageNames: [],
      videoNames: []
    };
  }

  updateFileImageName = (name) => {
    this.state.imageNames.push(name);
  }

  updateFileVideoName = (name) => {
    this.state.videoNames.push(name);
  }

  render(){

    const styles = {
      backgroundColor: 'whitesmoke'
    }

    return (
      <div>
        <div className="App" style={styles}>
          <UpperStyle />
        
          <TopNavBar />
          
            <Switch>
              <Route exact path="/" render={ () => <HomePage imgName={this.state.imageNames} videoName={this.state.videoNames} /> } />
              <Route exact path="/face/camera" render={ () => <RealTimeCamera /> } />
              <Route exact path="/face/image" render={ () => <DetectFaceInImage callMe={this.updateFileImageName} /> } />
              <Route exact path="/face/video" render={ () => <DetectFaceInVideo callMe={this.updateFileVideoName} /> } />
              <Route exact path="/page/about" component={AboutPage} />
            </Switch>
        
          <Footer />
          <UpperStyle />
        </div>
      </div>
    );

  }
}

export default FaceDetection;
