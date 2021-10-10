import React from 'react';
import ReactDOM from 'react-dom';
import withReduxFeatures from './withReduxFeatures';
import App from './components/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const WrappedApp = withReduxFeatures(App);

ReactDOM.render(<WrappedApp />, document.getElementById('root'));

serviceWorker.unregister();
