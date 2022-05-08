import App from './components/App/App';
import './style.scss';

const root = document.querySelector('#root');
const app = new App({ innerText: 'Hello World!' });

root.append(app.render());
