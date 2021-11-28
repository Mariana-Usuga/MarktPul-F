import { render } from "@testing-library/react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";

function PublicRoutes () {
return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )

}
export default PublicRoutes
