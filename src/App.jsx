import React from 'react'
import Form from './Components/Form'
import "./App.scss"
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Success from './Components/success';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App