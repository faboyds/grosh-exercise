import {userActionTypes} from './constants';
import {userService} from "../../services/userService";

export const getLists = () => {
    return function (dispatch) {
        dispatch({
            type: userActionTypes.FETCH_LISTS_REQUEST
        });

        return userService.getLists().then(
            res => {
                dispatch({
                    type: userActionTypes.FETCH_LISTS_SUCCESS,
                    payload: {
                        lists: res
                    }
                });
                return res;
            },
            error => {
                dispatch({
                    type: userActionTypes.FETCH_LISTS_FAILURE,
                    payload: {
                        lists: []
                    }
                });
                return error;
            }
        );
    }
};

export const getListContent = (id) => {
    return function (dispatch) {
        dispatch({
            type: userActionTypes.FETCH_LIST_CONTENT_REQUEST
        });

        return userService.getListContent(id).then(
            res => {
                dispatch({
                    type: userActionTypes.FETCH_LIST_CONTENT_SUCCESS,
                    payload: {
                        currentList: res
                    }
                });
                return res;
            },
            error => {
                dispatch({
                    type: userActionTypes.FETCH_LIST_CONTENT_FAILURE,
                    payload: {
                        currentList: null
                    }
                });
                return error;
            }
        );
    }
};

