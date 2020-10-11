import * as React from 'react'
import { Link } from "react-router-dom"

export const NavLink = ({ children, to, navProps }) => (
    <Link className="nav-link js-scroll-trigger" to={to} {...navProps}>
        {children}
    </Link>
)
