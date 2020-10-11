import * as React from 'react'

const MainPage = () => (
  <div style={{paddingTop: '70px'}}>
    <div className="container d-flex h-100 align-items-center view card wow">
      <div className="mx-auto text-center text-white" style={{padding: 50}}>
        <h1 className="text-uppercase">
          <strong>About "Vehicle GPS registration system"</strong>
        </h1>
        <h5>
          System to register vehicle GPS coordinates. To push location data to specific vehicle you must have valid API key. Admin or standart user can create API keys in "API Keys" section. Admin users can add/active/diactive users at users section. Vehicles can be created, edited, updated or deleted at "Vehicles" section.
        </h5>
      </div>
    </div>
  </div>
);

export default MainPage