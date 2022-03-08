export const ADD_USER = "add_user";
export const UPDATE_USER = "update_user";
export const DELETE_USER = "delete_user";
export const LIST_USER = "list_user";

/**
 * @desc add USER
 */
export const addUSER = (user: any) => {
    return { user, type: ADD_USER };
};
/**
 * @desc update USER
 */
export const updateUSER = (id: any) => {
    return { id, type: UPDATE_USER };
};
/**
 * @desc delete USER
 */
export const deleteUSER = (id: any) => {
    return { id, type: DELETE_USER };
};
/**
 * @desc update note
 */
export const ListNote = () => {
    return { type: LIST_USER };
};
