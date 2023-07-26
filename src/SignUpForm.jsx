import React, { useState } from 'react';

export default function SignUpForm() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);


    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        console.log(data);

        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json' // Set the Content-Type header to JSON
              },
              body: JSON.stringify({ username: username, password: password }),
            });
            const result = await response.json();
            console.log(result);
          } catch (error) {
            console.log(error);
          }
          setUsername("");
          setPassword("");
        }
        console.log(username, password);
    return (
        <div>
            <h2>Sign Up</h2> 
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Username: {" "}
                    <input 
                    type="text"
                    value={username} 
                    onChange={e => setUsername(e.target.value)}/>
                </label>
                <label>Password:{""}
                    <input 
                    type="password"
                    value={password} 
                    onChange={e => setPassword(e.target.value)} />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>

    )

}