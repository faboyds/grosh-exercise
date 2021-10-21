import {handleActions} from 'redux-actions';
import {userActionTypes} from "./constants";

const initialState = {
    lists: [],
    fetchingLists: false,

    currentList: null,
    fetchingCurrentList: false
};

/**
 * Action handler
 */
export default handleActions(
    {
        [userActionTypes.FETCH_LISTS_REQUEST]: (state = initialState, action) => {
            return {
                ...state,
                fetchingLists: true
            }
        },
        [userActionTypes.FETCH_LISTS_SUCCESS]: (state = initialState, action) => {
            const payload = action.payload;

            return {
                ...state,
                fetchingLists: false,
                lists: payload.lists,
            }
        },
        [userActionTypes.FETCH_LISTS_FAILURE]: (state = initialState, action) => {
            return {
                ...state,
                fetchingLists: [],
                fetchLists: false
            }
        },
        [userActionTypes.FETCH_LIST_CONTENT_REQUEST]: (state = initialState, action) => {
            return {
                ...state,
                fetchingCurrentList: true
            }
        },

        [userActionTypes.FETCH_LIST_CONTENT_SUCCESS]: (state = initialState, action) => {
            const payload = action.payload;

            return {
                ...state,
                fetchingCurrentList: false,
                currentList: payload.currentList,
            }
        },
        [userActionTypes.FETCH_LIST_CONTENT_FAILURE]: (state = initialState, action) => {
            return {
                ...state,
                currentList: null,
                fetchingCurrentList: false
            }
        },
    },
    initialState
)
