import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './styles/global';
import Routes from './routes';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes /> 
    </Router>
  );
}

export default App;
