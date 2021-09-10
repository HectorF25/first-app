import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Home from './views/home';
import EstudiantesView from './views/estudiantes';
import ContactView from './views/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonajesView from './views/personajes';
import PersonajesForm from './views/personajesForm';

function App() {
  return (
    <Router>
      <Route exact path={'/'} component={Home} />
      <Route component={ContactView} path={'/contact'} />
      <Route component={EstudiantesView} path={'/estudiantes'} />
      <Route component={PersonajesView} path={'/personajes'} />
      <Route component={PersonajesForm} path={'/personajesForm'} />
    </Router>
  );
}

export default App;
