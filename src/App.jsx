import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-primary">Bootstrap Tutorial</h1>
      <p className="lead">Welcome to the tutorial site built with Bootstrap and Vite React.</p>
      <div className="row">
        <div className="col-md-6">
          <h2>Getting Started</h2>
          <p>Install Bootstrap via npm or include the CDN link. This example uses the CDN.</p>
        </div>
        <div className="col-md-6">
          <h2>Components</h2>
          <button className="btn btn-success">A Bootstrap Button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
