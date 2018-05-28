import { SET_ERRORS } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case SET_ERRORS:
			return action.payload;
		default:
			return state;
	}
}