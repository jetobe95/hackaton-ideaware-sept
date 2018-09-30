import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store/index';
import { PersistGate } from 'redux-persist/integration/react';
import Apploadingafterlogin from './sections/start/containers/App-loading-after-login';
import Entry from './Entry';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Apploadingafterlogin/>}>
      <App />
    </PersistGate>
  </Provider>,

  document.getElementById('root')
);
registerServiceWorker();
