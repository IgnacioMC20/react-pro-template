import { NavLink, Navigate, Route, Routes } from "react-router-dom"
import { routes } from "../../routes/lazy-layout-routes"

export const LazyLayout = () => {
    return (
        <div>
            <h1>LazyLayout Page</h1>

            <ul style={{ listStyleType: 'none' }}>
                {
                    routes.map(route => (
                        <li key={route.to}>
                            <NavLink className="li-links" to={route.to}>{route.name}</NavLink>
                        </li>
                    ))
                }
            </ul>

            <Routes>
                {
                    routes.map(route => (<Route key={route.path} path={route.path} element={<route.Component />} />))
                }
                <Route path="*" element={<Navigate to={routes[0].to} replace />} />
            </Routes>
        </div>
    )
}

export default LazyLayout