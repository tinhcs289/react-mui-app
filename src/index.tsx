import getEnviromentName from '@/environments/getEnvironmentName';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
console.log(`---- environment: ${getEnviromentName()} ----`);
root.render(<App />);
reportWebVitals();
//@ts-ignore
window.breakHoverUI = function (ms?: number) {
  setTimeout(() => {
    debugger;
  }, ms || 2000);
};
