import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"

import logo from '../logo.svg'
import { routes } from "./routes"
import { Suspense } from "react"

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>

      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />

            {/* Routes */}
            <ul>
              {/* <li>
              <NavLink to='/lazy1' className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 1</NavLink>
              </li>
              <li>
              <NavLink to='/lazy2' className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 2</NavLink>
              </li>
              <li>
              <NavLink to='/lazy3' className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 3</NavLink>
            </li> */}
              {
                routes.map(route => (
                  <li key={route.to}>
                    <NavLink to={route.to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{route.name}</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <Routes>
            {
              routes.map(route => (<Route path={route.path} element={<route.Component />}></Route>))
            }

            {/* todo: 404 page */}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
