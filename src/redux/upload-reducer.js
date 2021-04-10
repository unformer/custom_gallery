import { reset } from "redux-form";

const CREATE_GALLERY = 'upload-reducer/CREATE-GALLERY';
const ADD_PHOTO = 'upload-reducer/ADD-PHOTO';
const UPLOAD_PHOTO = 'upload-reducer/UPLOAD-PHOTO';
const DELETE_PHOTO = 'upload-reducer/DELETE-PHOTO';
const RESET_GALLERY = 'upload-reducer/RESET-GALLERY';

let initialState = {
    photos: []
}

const uploadReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PHOTO: {
            return {
                ...state,
                photos: [...state.photos, { id: state.photos.length == 0 ? 1 : state.photos[state.photos.length - 1].id + 1, url: action.link }]
            };
        }
        case CREATE_GALLERY: {
            let fromFileGallery = (JSON.parse(action.file)).galleryImages;
            for (let i = 0; i < fromFileGallery.length; i++) {
                fromFileGallery[i] = { id: state.photos.length == 0 ? i + 1 : state.photos[state.photos.length - 1].id + i + 1, url: `${fromFileGallery[i].url}` };
            }
            state.photos = state.photos.concat(fromFileGallery);
            return {
                ...state,
                photos: [...state.photos]
            };
        }
        case UPLOAD_PHOTO: {
            let UploadPhoto = [];
            for (let i = 0; i < action.files.length; i++) {
                UploadPhoto[i] = { id: state.photos.length == 0 ? i + 1 : state.photos[state.photos.length - 1].id + i + 1, url: `${URL.createObjectURL(action.files[i])}` };
            }
            state.photos = state.photos.concat(UploadPhoto);
            return {
                ...state,
                photos: [...state.photos]
            };
        }
        case DELETE_PHOTO: {
            return { ...state, photos: state.photos.filter(p => p.id != action.photoId) }
        }
        case RESET_GALLERY: {
            return { ...state, photos: [] }
        }
        default:
            return state;
    }
}



export const setPhotoFromLink = (link) => ({ type: ADD_PHOTO, link })
export const getPhotoFromLink = (link) => async (dispatch) => {
    dispatch(setPhotoFromLink(link));
    dispatch(reset('upload-form'));
}

export const setPhotoFromFile = (file) => ({ type: CREATE_GALLERY, file })
export const getPhotoFromFile = (file) => async (dispatch) => {
    dispatch(setPhotoFromFile(file));
}

export const setPhotoFromUpload = (files) => ({ type: UPLOAD_PHOTO, files })
export const getPhotoFromUpload = (files) => async (dispatch) => {
    dispatch(setPhotoFromUpload(files));
}

export const DeletePhotoFromGallery = (photoId) => ({ type: DELETE_PHOTO, photoId })
export const getDeletePhotoId = (photoId) => async (dispatch) => {
    dispatch(DeletePhotoFromGallery(photoId));
}

export const resetGallery = () => ({ type: RESET_GALLERY })

export default uploadReducer;