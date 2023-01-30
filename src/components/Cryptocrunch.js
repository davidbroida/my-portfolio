import React from 'react';

function Cryptocrunch() {
  return (
    <div>
      <section className="section active">
        <div className="project-container ">
          <h1>CryptoCrunch App</h1>
          <div className="logos">
            <img id="logo" src="/javascript_logo.png"></img>
            <img id="logo" src="/python_logo.png"></img>
          </div>
          <p>Python, Cryptocompare API</p>
          <img id="desktop" src="/cryptocrunch_mock_devices.png"></img>
        </div>
      </section>
    </div>
  );
}

export default Cryptocrunch;
