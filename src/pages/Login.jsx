import { useState } from "react"
import Button from "../components/Button";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log("email", email);
    console.log("password", password);

    const user = {
        name: "Ridwan",
        email: "ridwan@gmail.com"
    }
    const userEmail = user?.email ?? "User email is not present"

    return(
        <div className="text-black p-10">
            This is a login page {userEmail}


            <form>
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