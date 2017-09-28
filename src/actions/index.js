import { SIGNED_IN, SIGNED_OUT } from "../constants";

export function logUser (email) {
    const action = {
        type: SIGNED_IN,
        email,
    };

    return action;

};

export function unlogUser (email) {
    const action = {
        type: SIGNED_OUT,
    };

    return action;

}