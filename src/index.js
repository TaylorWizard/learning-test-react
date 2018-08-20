import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.scss';
import ReduxApp from './todo/components/App';
import rootReducer from './todo/reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <ReduxApp />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
