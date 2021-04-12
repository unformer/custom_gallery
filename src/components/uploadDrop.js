import React from 'react';
import Dropzone from 'react-dropzone';

function UploadDrop(props) { 

return (
  <Dropzone accept='image/*' onDrop={acceptedFiles => props.getPhotoFromUpload(acceptedFiles)}>
  {({getRootProps, getInputProps}) => (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="dropUpload">Drag 'n' drop some image files here, or click to select</div>
      </div>
    </div>
  )}
</Dropzone>
);
}

export default UploadDrop