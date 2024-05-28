import { useState } from "react";
import InputField from "../InputField";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const {setIsAuthenticated} = useAuthContext();
    const navigate = useNavigate();
    const handleForm = () => {
        if (formData.username === "username" && formData.password === "password")
        {
            setIsAuthenticated(true);
            localStorage.setItem('token', 'abc');
            navigate("/books");
        }
    }
    const handleValueOnChange = (event) => {
        const {name, value} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
            })
        )
    }
    return (
        <form action="" onSubmit={handleForm} className="bg-white h-[400px] w-[600px] flex flex-col items-center justify-between rounded-md p-8">
            <div className="text-3xl font-semibold">LOG IN</div>
            <div className="flex flex-col gap-2">
                <InputField 
                    value={formData.username}
                    name="username"
                    id="username"
                    type="text"
                    label="Username"
                    onChange={handleValueOnChange}
                />
                <InputField 
                    value={formData.password}
                    name="password"
                    id="password"
                    type="password"
                    label="Password"
                    onChange={handleValueOnChange}
                />
                
            </div>
            <button
                type="submit"
                className="rounded-md px-6 py-3 bg-[#d6001c] text-white font-medium"
            >
                Log in
            </button>
        </form>
    );
};

export default LoginForm;