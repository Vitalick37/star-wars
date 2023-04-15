// import cn from 'classnames';
// import './App.css';
// import { getApiResource } from './../../utils/network';
import styles from './App.module.css';
import { Routes, Route, } from "react-router-dom";

import Header from '@components/Header';
import routesConfig from '@routes/routesConfig';



const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.wrapper}>

      <Routes>
          {routesConfig.map((r, index) => (
            <Route key={index} path={r.path} element={r.element} />)
          )}
      </Routes>

      </div>
    </div>
  )
}

export default App;
