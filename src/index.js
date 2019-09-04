import React from 'react'
import App from './components/App';
import ReactDOM from 'react-dom';
import registerServiceWorker from './createServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();