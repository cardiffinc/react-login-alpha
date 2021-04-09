import './App.css';
import { Switch, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" render={() => (
            <HomePage/>
          )} />
      <Route exact path="/login" render={() => (
            <LoginPage />
          )} />
      <Route exact path="/signup" render={() => (
            <SignupPage />
          )} />
      </Switch>
    </div>
  );
}

export default App;
