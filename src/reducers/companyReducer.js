// src/reducers/companyReducer.js
const initialState = {
    companies: []
};

function companyReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_COMPANY':
            return {...state, companies: [...state.companies, action.payload]};
        default:
            return state;
    }
}

export default companyReducer;
