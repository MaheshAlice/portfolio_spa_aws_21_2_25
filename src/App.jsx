import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GoogleLogin } from '@react-oauth/google';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import About from './components/preferences/About';
import Articles from './components/articles/ArticlesList';
import Article from './components/articles/Article';
import Layout from './utils/Layout';
import GoogleAuth from './auth/GoogleSignin';

function App() {

 const routes = [{
     path : "/",
     element : <Layout />,
     children : [{
                        path : "/dashboard",
                        name : "Dashboard",
                        element : <Dashboard />
                     }, {
                         path : "/about",
                        name : "About",
                        element : <About />
                     }, {
                         path : "/articles",
                        name : "Articles",
                        element : <Articles />
                     }, {
                         path : "/articles/individuals",
                        name : "Article",
                        element : <Article />
                     }]
     }];

 const router = createBrowserRouter(routes);

  return (
      <>
      <GoogleAuth/>
       <RouterProvider router={router} />
      </>
    )
}

export default App
