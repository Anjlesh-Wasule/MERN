import React from 'react'

const ControlledForm = () => {
  return (
     <form>
      <section>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" /> {/* uncontrolled input */}
      </section>

      <section>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" /> {/* uncontrolled input */}
      </section>
      
    </form>
  )
}

export default ControlledForm