import { useState } from 'react';
import SignUpForm from './SignUpForm';
import Authenticate from './Authenticate';
import './App.css';

function App() {
  const [token, setToken] = useState("");

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
      <p className="read-the-docs">
        Project Collaboration: Kalvin Zheng & Glen Factor
      </p>
    </>
  );
}

export default App;
