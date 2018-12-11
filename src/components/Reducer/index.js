const initialState = {
    links: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LINKS":
            return {
                ...state,
                links: [
                    action.links
                ]
            };
        default:
            return state;
    }
};

export default rootReducer;