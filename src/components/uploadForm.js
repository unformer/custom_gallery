import React from 'react'
import { Field, reduxForm } from 'redux-form'

let valid_extensions = /(\.png|\.jpg|\.jpeg|\.gif)$/i;  

const isImage = value => value == null || valid_extensions.test(value) ? undefined : 'Sorry, its not a link to image...'

const renderField = ({ input, label, type, meta: { error } }) => (
    <div>
        <input {...input} placeholder={label} type={type} className="form-control" />
        {error && <span className="uploadLinkForm__error">{error}</span>}
    </div>
)

const UploadForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="uploadLinkForm">
            <div className="uploadLinkForm__url">
                <Field name="url" type="text" component={renderField} label="http://example.com/images/logo.png" validate={isImage} />
            </div>
            <div>
                <button className="btn btn-danger">Add from link</button>
            </div>
        </form>
    )
}



export default reduxForm({ form: 'upload-form' })(UploadForm)