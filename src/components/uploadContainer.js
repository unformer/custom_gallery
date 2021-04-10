import React from 'react';
import {connect} from "react-redux";
import {getPhotoFromLink, getPhotoFromFile, getPhotoFromUpload, getDeletePhotoId} from "../redux/upload-reducer";
import Upload from "./upload";

class UploadContainer extends React.Component {     

    render() {
         return (
            <Upload
            getPhotoFromLink={this.props.getPhotoFromLink}
            getPhotoFromFile={this.props.getPhotoFromFile}
            getPhotoFromUpload={this.props.getPhotoFromUpload}
            getDeletePhotoId={this.props.getDeletePhotoId}
            photos={this.props.photos}
            />
         )
    }
}

let mapStateToProps = (state) => {
    return ({
        photos: state.uploadPage.photos
    })
}

export default connect(mapStateToProps, {getPhotoFromLink, getPhotoFromFile, getPhotoFromUpload, getDeletePhotoId})(UploadContainer);




