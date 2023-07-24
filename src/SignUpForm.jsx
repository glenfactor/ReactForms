import { useState } from 'react'
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState(null);


export default function SignUpForm() {
    return (
        <div>
            <h2>Sign Up</h2>
           <form>
            <label>Username:</label></>
               <input value={username} onChange={e => setUsername(e.target.value)}/>
               <label>Password:</label></>
               <input value={password} onChange={e => setPassword(e.target.value)} />
               <button>Submit</button>
           </form>

        </div>
    )

}