import _ from 'lodash';
import './style.css';
import App from './components/App';

const manager = new App();
manager.addBtn();
manager.remBtn();
manager.UIQueue.queueRender();
manager.logger();
manager.begin();
manager.changeTurn(1000, 2000);