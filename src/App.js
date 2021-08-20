import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Home from './views/home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Route component={Home} path={'/home'} />
    </Router>
  );
}

export default App;
