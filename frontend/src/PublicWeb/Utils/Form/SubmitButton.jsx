import * as React from 'react'

export const SubmitButton = ({ children, submitForm }) => (
  <button type="button" className="btn btn-info my-2" onClick={submitForm}>
    {children}
  </button>
)
