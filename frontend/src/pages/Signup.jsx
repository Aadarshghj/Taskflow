import React, { useState } from "react";
import { useUserStore } from "../stores/useUserStore";

const Signup = () => {
  const { loading, signup } = useUserStore();

  // Local state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const signupHandler = async () => {
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      alert("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    await signup({ name, email, password, confirmPassword });
  };

  return (
    <div
      className="flex items-center justify-center w-screen h-[100vh] bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/assets/Gemini_Generated_Image_sciobasciobascio.png')",
      }}
    >
      <div className="w-[600px] flex flex-col min-h-[400px] bg-white bg-opacity-70 shadow-full rounded-lg p-6">
        <h1 className="text-[45px] text-center font-semibold">𝖢𝗋𝖾𝖺𝗍𝖾 𝖠𝖼𝖼𝗈𝗎𝗇𝗍</h1>
        <h6 className="w-full text-[19px] text-gray-500 text-center">
          𝖲𝗂𝗀𝗇 𝗎𝗉 𝖿𝗈𝗋 𝗒𝗈𝗎𝗋 𝖳𝖺𝗌𝗄𝖥𝗅𝗈𝗐 𝗉𝗋𝗈 𝖺𝖼𝖼𝗈𝗎𝗇𝗍
        </h6>

        <div className="flex flex-col items-center justify-center gap-5 w-full pt-6">
          {["name", "email", "password", "confirmPassword"].map((field) => (
            <div className="w-[70%] relative" key={field}>
              <input
                className="w-full shadow-md rounded-sm h-8 px-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type={field.includes("password") ? "password" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
              />
              <span className="absolute left-1 top-1 text-[13px] text-gray-400">
                {field === "confirmPassword"
                  ? "Confirm Password"
                  : field.charAt(0).toUpperCase() + field.slice(1)}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center w-full mt-6">
          <button
            disabled={loading}
            onClick={signupHandler}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-10 py-1 rounded-md 
                       transition-all duration-200 shadow-md disabled:opacity-60"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </div>

        <h5 className="text-sm mt-3 text-gray-500 text-center">
          Already have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Login
          </span>
        </h5>
      </div>
    </div>
  );
};

export default Signup;
