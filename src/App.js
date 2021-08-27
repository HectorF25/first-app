import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Home from './views/home';
import Info from './views/info';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Route component={Home} path={'/home'} />
      <Route component={Info} path={'/info'} />
    </Router>
  );
}

export default App;
