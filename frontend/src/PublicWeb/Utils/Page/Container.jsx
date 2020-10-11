import * as React from 'react'

export const Container = ({ children, title = "" }) => (
  <div className="container d-flex h-100 align-items-center">
    <div className="mx-auto text-center">
      <h1 className="mx-auto my-3 text-uppercase">{title}</h1>

      {children}
    </div>
  </div>
)
