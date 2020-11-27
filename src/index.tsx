import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const uri = process.env.REACT_APP_MAINFRAME_URL;

ReactDOM.render(<App uri={uri} />, document.getElementById('root'));
