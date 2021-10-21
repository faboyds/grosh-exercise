import {user} from './user'

/**
 * Root reducers.
 */
export const reducers = {
    user: user.reducer
}

/**
 * Root actions.
 */
export const actions = {
    user: user.actions
};

export { user }
