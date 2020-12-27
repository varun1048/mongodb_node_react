import {BrowserRouter as Router , Route} from 'react-router-dom'

import PostMessage from './components/postM';
import PostMessageForm from './components/postMF';
// import PostM from './components/postMF';

export default function App() {
  return (
    <Router>

      <Route path="/" exact>
        <PostMessage />    
      </Route>

      <Route path="/datas" >
        <PostMessageForm />
      </Route>    

    </Router>
    
  );
}
