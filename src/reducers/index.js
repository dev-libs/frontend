import {
    GET_MADLIB_DATA_START, GET_MADLIB_DATA_SUCCESS, GET_MADLIB_DATA_FAILURE,
    POST_MADLIB_DATA_START, POST_MADLIB_DATA_SUCCESS, POST_MADLIB_DATA_FAILURE,
    PUT_MADLIB_DATA_START, PUT_MADLIB_DATA_SUCCESS, PUT_MADLIB_DATA_FAILURE,
    DELETE_MADLIB_DATA_START, DELETE_MADLIB_DATA_SUCCESS, DELETE_MADLIB_DATA_FAILURE,
    ADD_ITEM_TO_STATE,
} from "../actions";

const initialState = {
    test: "testing my redux store",
    userAnswers: [],
    story: [],
    isLoading: false,
    error: '',
    
}  


export const reducer = (state = initialState, action)=> {
    switch(action.type){
        case GET_MADLIB_DATA_START:
            return{
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_MADLIB_DATA_SUCCESS:
            return{
                ...state,
                isLoading: false,
                error: '',
                story: action.payload

            }
        case GET_MADLIB_DATA_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_ITEM_TO_STATE: 
            return{
                ...state,
                isLoading: false,
                userAnswers: action.payload
            }
        default:
            return state;

    }
}