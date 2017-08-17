
// action creater
export const selectBook = (data)=>({type:'BOOK_SELECTED',data})

let initialState = {};

export default function reducer(state = initialState, action){
	switch(action.type){
		case "BOOK_SELECTED":{
			const {title,pages} = action.data
			return action.data
		}
		case "DELETE_BOOK":{
			return initialState
		}
		case "EDIT_BOOK":{
			return action.data
		}
		default:
			return state;
	}
}