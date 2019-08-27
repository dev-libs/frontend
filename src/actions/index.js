import axios from 'axios';

export const GET_MADLIB_DATA_START = "GET_MADLIB_DATA_START";
export const GET_MADLIB_DATA_SUCCESS = "GET_MADLIB_DATA_SUCCESS";
export const GET_MADLIB_DATA_FAILURE = "GET_MADLIB_DATA_FAILURE";
export const POST_MADLIB_DATA_START = "POST_MADLIB_DATA_START";
export const POST_MADLIB_DATA_SUCCESS = "POST_MADLIB_DATA_SUCCESS";
export const POST_MADLIB_DATA_FAILURE = "POST_MADLIB_DATA_FAILURE";
export const PUT_MADLIB_DATA_START = "PUT_MADLIB_DATA_START";
export const PUT_MADLIB_DATA_SUCCESS = "PUT_MADLIB_DATA_SUCCESS";
export const PUT_MADLIB_DATA_FAILURE = "PUT_MADLIB_DATA_FAILURE";
export const DELETE_MADLIB_DATA_START = "DELETE_MADLIB_DATA_START";
export const DELETE_MADLIB_DATA_SUCCESS = "DELETE_MADLIB_DATA_SUCCESS";
export const DELETE_MADLIB_DATA_FAILURE = "DELETE_MADLIB_DATA_FAILURE";



export const getData = ()=> {
    return dispatch => {
        dispatch({ type : GET_MADLIB_DATA_START})
        .get()
        .then(res => {
            console.log("response in get", res)
            dispatch({type: GET_MADLIB_DATA_SUCCESS})
        })
        .catch(err => {
            console.log("error in get", err)
            dispatch({type: GET_MADLIB_DATA_FAILURE})
        });
    }
}
export const postData = () => {
    return dispatch => {
        dispatch({ type: POST_MADLIB_DATA_START})
        .post()
        .then(res => {
            console.log("response in post", res)
            dispatch({type: POST_MADLIB_DATA_SUCCESS})
        })
        .catch(err => {
            console.log("error in post", err)
        })

    }
}

export const deleteData = () => {
    return dispatch => {
        dispatch({type: DELETE_MADLIB_DATA_START})
        .delete()
        .then(res => {
            console.log("response in delete", res)
            dispatch({type: DELETE_MADLIB_DATA_SUCCESS})
        })
        .catch(err => {
            console.log("error in delte", err)
            dispatch({type: DELETE_MADLIB_DATA_FAILURE})
        })
    }
}