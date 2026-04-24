import { useState } from "react"
import Button from "../components/Button";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState(" "); 

    const isAdmin = false

    const handleSubmit = () => {
        console.log("email", email);
        console.log("password", password); 
    }

    const user = {
        name: "Ridwan",
        email: "ridwan@gmail.com"
    }
    const userEmail = user?.email ?? "User email is not present"

    // Ternary ==> ?

    // Early return pattern
    const isLoading = true
    const error = true


    // var 
    // const
    // let

    if (isLoading === true) {
        // const isUser = true
        // var isUser = true

        return (
            <div className="">
                Loading...
            </div>
        )
    }

    if (error === true) {
        // const isUser = true
        // var isUser = true

        return (
            <div className="">
                Something went wrong, please try again later
            </div>
        )
    }

    const userStatus = isUser ? "User" : "Guest"

    // Scoping
    // Block scope: variables declared inside a block {} are not accessible outside of it
    // Function scope: variables declared inside a function are not accessible outside of it
    // Global scope: variables declared outside of any function or block are accessible from anywhere in the code

    // camel case
    const isLoggedIn = true

    // snake case
    const is_logged_in = false

    // pascal case
    const IsLoggedIn = true

    return(
        <div className="text-black p-10">
            <p className="mb-6"> This is a login page {userEmail}</p>
            {
                isAdmin ? <p>Welcome Admin</p> : <p>Welcome User</p>
            }
            {
                isAdmin && <p>Welcome Admin</p> 
            }

            {error ? <p>{error}</p> : null}


            <form onSubmit={handleSubmit} className="mt-20">
                <div className="">
                    <label className="block">First name</label>
                    <input 
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="type you first name"
                        className="border p-3"
                    />
                </div>
                <div className="">
                    <label className="block">Email</label>
                    <input 
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="border p-3"
                    />
                </div>
                <div className="">
                    <label className="block">Password</label>
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="....."
                        className="border p-3"
                    />
                </div>
                

                <Button label="Login" />
            </form> 
        </div>
    )
}

export default Login