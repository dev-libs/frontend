import {axiosWithAuth} from '../utils/axiosWithAuth';

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
export const ADD_ITEM_TO_STATE = "ADD_ITEM_TO_STATE";


export const getData = (id)=> {
    return dispatch => {
        dispatch({ type : GET_MADLIB_DATA_START})
        axiosWithAuth().get(`https://bw-dev-libs.herokuapp.com/libs/play/${id}`)
        .then(res => {
            console.log("response in get", res)
            dispatch({type: GET_MADLIB_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log("error in get", err)
            dispatch({type: GET_MADLIB_DATA_FAILURE, payload: err.response})
        });
    }
}
export const postData = (value) => {
    return dispatch => {
        dispatch({ type: POST_MADLIB_DATA_START})
        axiosWithAuth().post("https://bw-dev-libs.herokuapp.com/libs/play", {answers: value})
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
export const handleTask = (item) => { 
    return dispatch => {dispatch({type: ADD_ITEM_TO_STATE, payload: item})}}
