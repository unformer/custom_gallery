import React from 'react';
import GalItem from './galItem';
import UploadDrop from './uploadDrop';
import UploadForm from './uploadForm';
import demoFile from '../assets/demo-images.json'

const Upload = React.memo(props => {

    console.log(props.photos);

    let galItems =
        [...props.photos]
            .reverse()
            .map(p => <GalItem url={p.url} id={p.id} key={p.id} getDeletePhotoId={props.getDeletePhotoId} />);

    const fromLinkUpload = (values) => {

        values.url && props.getPhotoFromLink(values.url)
    }

    const fromFileUpload = (e) => {

        var file = e.target.files[0];

        var reader = new FileReader();
        reader.onload = function (e) {
            props.getPhotoFromFile(e.target.result);
        };
        reader.readAsText(file);
    }

    const demo = () => {
        props.getPhotoFromFile(JSON.stringify(demoFile));
    }

    const reset = () => {
        props.resetGallery();
    }

    return (
        <div className="uploadWrapper">
            <div className="uploadWrapper__title"><h1>Create gallery</h1></div>
            <div>
                <UploadForm onSubmit={fromLinkUpload} />
            </div>
            <div className="uploadWrapper__or">or</div>
            <div className="fromFileListWrap">
                <label className="fromFile">Upload JSON
                    <input type={"file"} onChange={fromFileUpload} />
                </label>
                <div className="demo" onClick={demo}>Demo gallery</div>
                <div className="reset" onClick={reset}>Reset</div>
            </div>
            <div className="uploadWrapper__or">or</div>
            <div>
                <UploadDrop photos={props.photos} getPhotoFromUpload={props.getPhotoFromUpload} />
            </div>
            {props.photos.length > 0 &&
            <div className="gallery">
                {galItems}
            </div>
            }
        </div>
    )
})

export default Upload