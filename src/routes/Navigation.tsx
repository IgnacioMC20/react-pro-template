import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"

import logo from '../logo.svg'
import '../03-forms/styles/styles.css'

import {
  RegistrerPage,
  FormikBasicPage,
  FormikYupPage,
  FormikComponents,
  FormikAbstract,
  RegistrerFormikPage
} from "../03-forms/pages"

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />

          {/* Routes */}
          <ul>
            <li>
              <NavLink to='/Register' className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Page</NavLink>
            </li>
            <li>
              <NavLink to='/formik-basic-page' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Basic Page</NavLink>
            </li>
            <li>
              <NavLink to='/formik-yup-page' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup Page</NavLink>
            </li>
            <li>
              <NavLink to='/formik-components' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to='/formik-abstract' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Abstract</NavLink>
            </li>
            <li>
              <NavLink to='/register-formik-page' className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Formik Page</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="register" element={<RegistrerPage />}></Route>
          <Route path="formik-basic-page" element={<FormikBasicPage />}></Route>
          <Route path="formik-yup-page" element={<FormikYupPage />}></Route>
          <Route path="formik-components" element={<FormikComponents />}></Route>
          <Route path="formik-abstract" element={<FormikAbstract />}></Route>
          <Route path="register-formik-page" element={<RegistrerFormikPage />}></Route>
          <Route path="/" element={<h1>Home Page</h1>}></Route>

          {/* todo: 404 page */}
          <Route path="/*" element={<Navigate to={'/'} replace />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
