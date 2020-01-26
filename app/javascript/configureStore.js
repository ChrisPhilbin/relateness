import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'


const initialState = {

}

function rootReducer(state, action) {

}

export default function configureStore() {
	const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
	return store
}