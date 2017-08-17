export const books  = ()=> {
  return [
    { title: "Javascript: The Good Parts", pages: 101 },
    { title: "Harry Potter", pages: 39 },
    { title: "The Dark Tower", pages: 85 },
    { title: "Eloquent Ruby", pages: 1 }
  ];
}

export const get_books = ()=>({type:'GET_BOOKS'});

export const editBook = (data) =>({type:'EDIT_BOOK',data});

export const add_book = (data) =>({type:'ADD_BOOK',data});

export const delBook = (data) =>({type:'DELETE_BOOK',data});


export default function reducer(state = [],action){
	switch(action.type){
		case 'GET_BOOKS':{
			let state = books();
			return state;
		}
		case 'ADD_BOOK':{
			const {title,pages} = action.data;
			let newBook = {title,pages}
			return [...state,...[newBook]]
		}
		case 'DELETE_BOOK':{
			let newState = [...state];
			newState.splice(action.index,1)
			return newState
		}
		case 'EDIT_BOOK':{
			 let newState = [...state];
			 console.log('EDIT_BOOK',action)
			 newState[action.data.index]  = action.data;
			 console.log('EDIT_BOOK',newState)
			return newState
		}

		default:{
			return state
		}


	}
}