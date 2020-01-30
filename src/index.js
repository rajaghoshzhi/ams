import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/* ---- Start  important if using cssModule & reactstrap-----*/
import { Util } from 'reactstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
Util.setGlobalCssModule(bootstrap);
/*------ Ends -----*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
