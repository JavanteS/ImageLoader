
export const fetchImages = () => {
    return (dispatch) => {
      dispatch({ type: "LOADING_IMAGES"})
      fetch('http://localhost:8080/api/images')
      .then(response => response.json())
      .then(images=> {
        dispatch({ type: 'IMAGES_LOADED', payload: images })
      })
    }
  }