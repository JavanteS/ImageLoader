import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {bindActionCreators} from 'redux'
import { actionCreators } from './actionMakers';
import ImageContainer from './containers/imageContainers';
function App() {
  const state = useSelector(state => state.image)

  const dispatch = useDispatch()

  const { fetchImages } = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
     
    <ImageContainer/>
     
     
    </div>
  );
}

export default App;
