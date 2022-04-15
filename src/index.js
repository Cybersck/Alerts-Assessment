import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from '@root/store';
import { BrowserRouter as Router } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(<React.StrictMode><Provider store={store}><Router><App /></Router></Provider></React.StrictMode>);
