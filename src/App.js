

import React, { Suspense } from 'react'
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom'

import './App.scss';
import NotFound from './components/NotFound'
import AddEditPage from './features/Photo/pages/AddEdit';
import MainPage from './features/Photo/pages/Main';
import Header from './components/Header'
import Banner from './components/Banner';

const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div> Loading ... </div>}>
        <BrowserRouter>
          <ul>
            <Link to="/photos"> Go to photo page</Link>
            <Link to="/photos/add"> Go to photo add page</Link>
            <Link to="/photos/1"> Go to photo edit page</Link>
          </ul>

          <Header />

          <Routes>

            <Route path="/photos"     element={ <MainPage/>} />
            <Route path="/photos/add" element={ <AddEditPage/>} />
            <Route path="/photos/:photoId"   element={ <AddEditPage/>} />
            <Route path="*" element={<NotFound/>} />

          </Routes>
          
        </BrowserRouter>
      </Suspense>
      
    </div>
  );
}

export default App;
