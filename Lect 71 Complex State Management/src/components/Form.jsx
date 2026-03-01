import React from 'react'

const Form = () => {
  return (
    <form>
      <section>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" /> 
      </section>

      <section>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" /> {/* uncontrolled input */}
      </section>
      
    </form>
  )
}

export default Form