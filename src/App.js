import './App.css';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import PostContainer from './components/PostContainer';
function App() {
  return (
    <div >
      <Provider store={store}>
        <PostContainer />
      </Provider>
    </div>
  );
}

export default App;
