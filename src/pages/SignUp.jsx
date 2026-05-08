import { useEffect, useState } from "react";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState({});
  console.log("singlePost", singlePost)

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


  const id = 2

  

  // 3 Types of dependency array
  // 1. Empty array means useEffect would run only once when the page mount/render/show
  useEffect(() => {
    // setInterval(() => {
    //   console.log("setInterval formData", formData)
    //   setLoading(false);
    // }, 2000);

    // Synchronous === line by line execution 
    // Asynchronous === async actions are pushed to queue in order to allow execution of subsequent lines of code. A way to handle async actions is by using PROMISE(is an object that encapsulate/houses the result of an async operation)

    fetch('https://jsonplaceholder.typicode.com/posts/10')
      .then(response => response.json())
      .then(json => setSinglePost(json))

      
  }, [])
  // 2. Dependency array with values means useEffect would run only once, and then anytime the values in the array changes
  // useEffect(() => {
  //   setInterval(() => {
  //     console.log("setInterval formData", formData)
  //     setLoading(false);
  //   }, 2000);
  // }, [id])
  // 3. No dependency array means useEffect is going to run once and anytime a value change in your page
  // useEffect(() => {
  //   setInterval(() => {
  //     console.log("setInterval formData", formData)
  //     setLoading(false);
  //   }, 2000);
  // })


  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    // Timer events are generally side effects cos they are owned by browser
    setTimeout(() => {
      console.log("formData", formData)
      setLoading(false);
    }, 2000);

    // setInterval(() => {
    //   console.log("setInterval formData", formData)
    //   setLoading(false);
    // }, 2000);
  }

  const age = 20

  // strictly equals compare both type and value ===
  // loosely equals compare only value ==
  0 === false //Wrong
  0 == false //Correct
  !0 === true

  return (
    <div className="p-20">
      {/* {0 && <p>Hello</p>} */}
      {0 ? <p>Hello</p> : null}
      {/* {age === 20 ? <p>The user is older</p> : <p>The user is younger</p>} */}

      {
        posts?.slice(0, 5)?.map((post) => (
          <p>{post.title}</p>
        ))
      }

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
