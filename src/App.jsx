import {useState} from "react";

const App = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email is empty')
    const [passwError, setPasswordErr] = useState('pass is empty')
    const blueHandler = e => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    const emailHandler = e => {
        setEmail(e.target.value)
    }
    const passwordHandler = e => {
        setPassword(e.target.value)
    }

  return (
      <div>
        <form>
            {(emailDirty && emailError) && <div>{emailError}</div>}
          <input onBlur={e => blueHandler(e)}
                 onChange={e =>emailHandler(e)}
                 name='email' type="text"
                 value={email}
                 required/>
            {(passwordDirty && passwError) && <div>{passwError}</div>}
          <input
              onChange={e =>passwordHandler(e)}
              onBlur={e => blueHandler(e)} name='password' type="text" required/>
          <button type='submit'>sub</button>
        </form>
      </div>
  );
}

export default App;
