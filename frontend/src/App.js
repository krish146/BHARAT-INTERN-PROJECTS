import React from 'react';
import { BrowserRouter as Router, Route,Routes,Navigate } from 'react-router-dom';
import Register from './Register';
import Success from './Success';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Use 'path' instead of 'to' for defining route path */}
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/SuccessfulRegistration" element={<Success/>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
