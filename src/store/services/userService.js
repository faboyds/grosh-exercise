import {http} from "../../utils/http";

export const userService = {
    getLists,
    getListContent
};

function getLists() {
    return http.get('users/me/households')
        .then(async function (response) {
            console.log(response.data);
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
            throw error;
        });
}

function getListContent(id) {
    return http.get('households/' + id + '/current')
        .then(async function (response) {
            console.log(response.data);
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
            throw error;
        });
}
