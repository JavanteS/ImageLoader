const reducer = (state ={ 
    images: [], loading: false
}, action) => {

    switch(action.type){
        case "LOADING_IMAGES":
           
        return {
                ...state, loading: true
            }


        case "IMAGES_LOADED":
        
        return {
            ...state,images: action.payload, loading: false
        }

        default:
            return state
    }
}

export default reducer