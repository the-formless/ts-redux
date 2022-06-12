
import './App.css';
import Posts from './Components/post';
import PostForm from './Components/postForm';
import { Provider } from 'react-redux';
import { store } from './store';
function App() {
  
  
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr/>
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
