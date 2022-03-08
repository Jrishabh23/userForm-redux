import { ADD_USER, DELETE_USER } from "./action";

export const initialState = {
    list: [],
};
const listUserReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ADD_USER: {
            const userList = [...state.list];
            const index = userList.findIndex(
                (item) => item.id == action.user.id
            );
            if (index >= 0) {
                userList.splice(index, 1, action.user);
            } else {
                userList.push(action.user);
            }
            state.list = userList;
            return state;
        }
        case DELETE_USER: {
            const userList = [...state.list];

            const user = userList.filter((item: any) => {
                if (action.id != item.id) {
                    console.log(item);
                    return item;
                }
            });
            state.list = user;
            return state;
        }
        default:
            return state;
    }
};
export default listUserReducer;
