import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import { HashRouter } from 'react-router-dom'
import AccessRoute from './Components/Layout/AccessRoute'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
  },
  status: {
    danger: 'orange',
  },
});

function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <HashRouter>
        <AccessRoute>
          <App />
        </AccessRoute>
      </HashRouter>
    </MuiThemeProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
