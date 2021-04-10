import React from 'react'
import { Field, reduxForm } from 'redux-form'

const UploadForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit} className="uploadLinkForm">
                <div className="uploadLinkForm__url">
                    <Field component={"input"} name="url" className="form-control" placeholder="http://example.com/images/logo.png"/>
                </div>
                <div>
                    <button className="btn btn-danger">Add from link</button>
                </div>
            </form>
    )
}



export default reduxForm({form: 'upload-form'})(UploadForm)