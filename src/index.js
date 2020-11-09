import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
// Providerを使うことで、作成したstoreを全コンポーネントにわたすことができる
import {Provider} from 'react-redux';
import './index.css';
import reducer from './reducers'
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// このstoreはこのプロジェクトで唯一のもの
// プロジェクト内のすべてのstateは、このstoreに集約されている
const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
      {/*すべてのコンポーネントでstoreを使うことができる*/}
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
