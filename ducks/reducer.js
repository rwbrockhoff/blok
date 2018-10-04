const initialState = {
    duration: 1800
}

const STORE_DURATION = 'STORE_DURATION'

export const storeDuration = (value) => ({
    type: STORE_DURATION,
    payload: value
})

export default (state=initialState, action) => {
    switch(action.type){
        
        case STORE_DURATION: 
        return Object.assign({}, state, {duration: action.payload})

        default: 
          return state
    }
}