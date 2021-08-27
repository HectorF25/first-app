import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Home from './views/home';
import EstudiantesView from './views/estudiantes';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonajesView from './views/personajes';


function App() {
  return (
    <Router>
      <Route exact path={'/'} component={Home} />
      <Route component={EstudiantesView} path={'/estudiantes'} />
      <Route component={PersonajesView} path={'/personajes'} />
    </Router>
  );
}

export default App;
