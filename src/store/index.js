import {createStore, combineReducers} from 'redux'



const initialState = {
    inputValue: '7882896e3ffc4fe3b2f4c055f0914d67'
}

// const initialStateRegion = {
//     inputValue: 'northcentralus'
// }

const azureKeyReducer = (state = initialState, action) =>{
    console.log('reducer', action);

    switch(action.type) {
        case 'INPUT_KEY':
            return Object.assign({}, state, {inputValue: action.text });
            
        default:
            return state;
    }
}



// const azureRegionOptionsReducer = (state = initialStateRegion, action) => {
//     console.log('optionsreducer', action);
//     switch(action.type) {
//         case 'INPUT_REGION':
//             return Object.assign({}, state, {inputValue: action.text});

//         default:
//             return state;
//     }
// }


// const allReducers = combineReducers({
//     azureOptions: azureRegionOptionsReducer,
//     azureKey: azureKeyReducer,
// });


const store = createStore(azureKeyReducer);

export default store;