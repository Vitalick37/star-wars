// import cn from 'classnames';
// import './App.css';
// import { getApiResource } from './../../utils/network';
import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage';
import Layout from '@components/Layout';

import { Route, Routes } from 'react-router-dom';

import styles from './App.module.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/people"  element={<PeoplePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
