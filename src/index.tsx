import { StrictMode } from 'react';
import App from './components/app/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';

ReactDOM.render(
  <Provider store={setupStore()}>
    <StrictMode>
      <ToastContainer />
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root'),
);
