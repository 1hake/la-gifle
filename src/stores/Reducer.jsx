export const initialStateValues = {

}

export const reducer = (state, action) => {
    console.log('action', action)
    switch (action.type) {
        case "MY_ACTION":
            return {
                ...state,

            };
        default:
            throw new Error("action is not defined");
    }
};