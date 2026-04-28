import { useState } from "react";

const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const formInputsData = {
    username: "",
    email: "",
    password: ""
  }

  const [formData, setFormData] = useState(formInputsData);

  const handleChange = (e) => {
    // console.log("e", e.target.name, e.target.value)
    // const name = e.target.name
    // const value = e.target.value
    const { name, value } = e.target;
    setFormData((prev) => (
      {
        ...prev,
        [name]: value
      }
    ))

  }

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();


    setTimeout(() => {
      console.log("formData", formData)
      setLoading(false);
    }, 2000);


  }


  return (
    <div className="p-20">
      <h2 className="mb-6 text-2xl text-blue-700 leading-tight tracking-wide">Register</h2>
      <form onSubmit={handleSubmit} className="">

        {/* email */} 
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="nameOfUser">Username:</label>
          <input 
            className="border p-2 w-60"
            type="text" 
            id="nameOfUser" 
            name="username" 
            required 
            onChange={handleChange}
          />
        </div>


        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="border p-2 w-60"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            required 
            className="border p-2 w-60"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>


      </form>
    </div>
  )
}

export default SignUp
