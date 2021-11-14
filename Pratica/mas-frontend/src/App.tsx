import { BrowserRouter as Router } from 'react-router-dom';
import {AppProvider} from './hooks';
import Routes from './routes';

import GlobalStyle from './Styles/global';

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
