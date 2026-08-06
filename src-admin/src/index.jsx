/* eslint-disable */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';
import pack from '../package.json';
import './index.css';

window.adapterName = 'scheduler';

console.log(`iobroker.${window.adapterName}@${pack.version}`);
window.sentryDSN = 'https://6ccbeba86d86457b82ded80109fa7aba@sentry.iobroker.net/144';

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
