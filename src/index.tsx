import { StrictMode } from 'react';
import App from './components/app/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <StrictMode>
    <ToastContainer/>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
