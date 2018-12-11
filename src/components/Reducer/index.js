const initialState = {
    links: []
};

const rootReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_LINKS":
            return {
                ...state,
                links: action.payload
            };
        default:
            return state;
    }
};

export default rootReducer;