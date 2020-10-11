import * as React from 'react'
import { Link } from "react-router-dom"

export const LinkButton = ({ children, to, linkProps }) => (
    <Link className="btn btn-link" to={to} {...linkProps}>
        {children}
    </Link>
)
