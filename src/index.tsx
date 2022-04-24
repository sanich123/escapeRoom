import { StrictMode } from 'react';
import App from './components/app/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom';
import {YMaps} from 'react-yandex-maps';

ReactDOM.render(
  <StrictMode>
    <ToastContainer />
    <YMaps>
      <App />
    </YMaps>
  </StrictMode>,
  document.getElementById('root'),
);
