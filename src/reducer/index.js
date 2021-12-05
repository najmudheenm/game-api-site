import {combineReducers} from 'redux'

import gameReducer from './gameReducere'


const rootReducer=combineReducers(
    {
        game:gameReducer
    }
)
export default rootReducer