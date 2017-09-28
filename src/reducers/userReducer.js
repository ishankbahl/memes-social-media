import { SIGNED_IN, SIGNED_OUT } from "../constants";

user = {
    email: null,
};

export default function userReducer ( state = user, action ) {
    switch (action.type) {
        case SIGNED_IN: 
            const { email } = action;
            return {
                email,
            };
        case SIGNED_OUT:
            return {
                email: null,
            };
        default:
            return state;
    }
}