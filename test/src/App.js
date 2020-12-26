import PostMessage from './components/postM';
import  { Provider } from "react-redux"

import {store } from "./actions/store"
export default function App() {
  return (
    <Provider store={store}>

      <PostMessage />    
    
    </Provider>
  );
}
