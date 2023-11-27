import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  function handelSubmit(e){
    e.preventDefailt();
    
    if(validateForm()){
      alert('Form Submitted')
    }
    else
     alert('please enter a valid informaion make sure the email contain @ sign and the password is 8 or more characters long')
  }
  function validateForm(){
    if(email.includes('@') && password.length >= 8 && password === passwordConfirm)
      return true
    else
      return false
  }
  function showSubmit1(){
    console.log(
      'email: ', email,
      'password: ', password   

    )
  }


  return (
    <form onSubmit={handelSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      <input type='submit' value='Submit' onClick={showSubmit1}/>

    </form>
  )
}
