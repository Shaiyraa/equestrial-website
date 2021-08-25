
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import About from './pages/about/about.component';
import Development from './pages/development/development.component';
import Jobs from './pages/jobs/jobs.component';
import Contact from './pages/contact/contact.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/development" component={Development} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/contact" component={Contact} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
