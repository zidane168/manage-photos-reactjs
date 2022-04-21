

import React, { useEffect, Suspense, useState } from 'react'
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom'

import './App.scss';
import NotFound from './components/NotFound'
// import AddPage from './features/Photo/pages/AddEdit';
// import MainPage from './features/Photo/pages/Main';
import Header from './components/Header'
import productApi from 'api/productApi'


const MainPage    = React.lazy(() => import('./features/Photo/pages/Main'))
const AddPage     = React.lazy(() => import('./features/Photo/pages/Add'))
const EditPage    = React.lazy(() => import('./features/Photo/pages/Edit'))
const SignInPage  = React.lazy(() => import('./features/Auth/pages/SignIn'))

// https://console.firebase.google.com/project/chatdemo-c3281/settings/general/web:OGVmYzBiZmUtMGZiOC00M2NkLWI4NGItMjljMmUzMWNiNmEx


function App() {

  // test api

  useEffect(() => {
    const fetchProductList = async () => { 
      try {
        const params = {
          _page: 1,
          _limit: 10
        }

        const response = await productApi.getAll(params);
        console.log(response);
  
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    }

    fetchProductList();
  }, []);


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
            <Route path="/signIn"     element={ <SignInPage/>} />
            <Route path="/photos"     element={ <MainPage/>} />
            <Route path="/photos/add" element={ <AddPage/>} />
            <Route path="/photos/:photoId"   element={ <EditPage/>} />
            <Route path="*" element={<NotFound/>} />

          </Routes>
          
        </BrowserRouter>
      </Suspense>
      
    </div>
  );
}

export default App;
