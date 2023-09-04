import { RouterProvider } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import { FormProvider } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import router from "./router"
import "./App.css"

export default function App() {
  return (
    <>
      <FormProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </FormProvider>
    </>
  )
}


