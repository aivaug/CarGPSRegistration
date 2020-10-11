import * as React from 'react'

export const Section = ({ children, title, sectionSize }) => (
  <div className={`col-sm-${sectionSize}`}>
    <h3>{title}</h3>
    {children}
  </div>
)
