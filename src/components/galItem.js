import React from 'react';
import Preloader from './preloader';
import Delete from "../images/delete_ico.png";

class GalItem extends React.Component {

  state = {
    isLoading: false,
    opacity: 0
  }

  deletePhoto = (e) => {
    this.props.getDeletePhotoId(e.target.id);
  }

  preloader = () => {
    this.setState({
      isLoading: true,
      opacity: 1
    });
  }  

  render() {

    return (
      <div className="gallery__item">
        
        {this.state.isLoading != false && <img src={Delete} id={this.props.id} className="deletePhoto" onClick={this.deletePhoto} />}     
        {this.state.isLoading != true && <Preloader />}
        <img src={this.props.url} alt="" id={this.props.id} className={"galPhoto"} onLoad={this.preloader} style={{opacity: this.state.opacity}}/>
        
      </div>
    )
  }
}

export default GalItem;