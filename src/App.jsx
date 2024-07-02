import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import {Toaster} from "react-hot-toast"


import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import { Header, Footer } from "./components";
import Error from './pages/Error';


export default function app() {

  

function PageOutlet() {


  return (
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <PageOutlet />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
    ],
   
    errorElement: (
      <>
        <Header />
        <Error />
        <Footer />
      </>
    ),
  },
]);

return (
  <div>
    <Toaster />
    <RouterProvider router={Routes}></RouterProvider>
  </div>
);
}
