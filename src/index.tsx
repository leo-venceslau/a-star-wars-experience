import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Films from './components/Films';
import Film from './components/Films/Film/';


ReactDOM.render(
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path={'/'}>
      <Route index={true} element={<Films characters={[]} created={''} director={''} edited={''} episode_id={''} opening_crawl={''} producer={''} release_date={''} title={''} url={''} planets={[]} species={[]} starships={[]} vehicles={[]} />} />
      <Route path={'films'}>
        <Route index={true} element={<Films characters={[]} created={''} director={''} edited={''} episode_id={''} opening_crawl={''} producer={''} release_date={''} title={''} url={''} planets={[]} species={[]} starships={[]} vehicles={[]} />}></Route>
        <Route path={':filmId'} element={<Film characters={[]} created={''} director={''} edited={''} episode_id={''} opening_crawl={''} producer={''} release_date={''} title={''} url={''} planets={[]} species={[]} starships={[]} vehicles={[]} />}></Route>
      </Route>
    </Route>
  </Routes>
</BrowserRouter>,
  document.getElementById('root')
);
