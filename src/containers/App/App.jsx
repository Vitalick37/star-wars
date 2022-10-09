// import cn from 'classnames';
// import './App.css';
// import { getApiResource } from './../../utils/network';
import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage';

import Header from '@components/Header';

import { Route, Routes } from 'react-router-dom';

import styles from './App.module.css';

const App = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="/people"  element={<PeoplePage />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App;
