import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/home";
import EstudiantesView from "./views/estudiantes";
import ContactView from "./views/contact";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonajesView from "./views/personajes";
import PersonajesForm from "./views/personajesForm";
import EstudiantesDetails from "./views/estudianteDetail";
import PostsView from "./views/postsView";
import NotFoundSection from "./views/404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route component={ContactView} path={"/contact"} />
        <Route component={EstudiantesDetails} path="/estudiantesDetail/:id" />
        <Route component={EstudiantesView} path={"/estudiantes"} />
        <Route component={PersonajesView} path={"/personajes"} />
        <Route component={PostsView} path={"/posts"} />
        <Route component={PersonajesForm} path={"/personajesForm"} />
        <Route component={NotFoundSection} path="*" />
      </Switch>
    </Router>
  );
}

export default App;
