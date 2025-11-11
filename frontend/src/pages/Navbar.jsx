import { HomeIcon, Search } from "lucide-react"
import { useUserStore } from "../stores/useUserStore"
import { Link } from "react-router-dom"


const Navbar = () => {
  const{user , logout} = useUserStore()
const logoutHandler = () =>{
  logout()
}

  return (
    <div className="flex max-w-full h-16 items-center p-4  justify-between bg-white">
      {/* Logo */}
      <div>
        <h4 className="font-bold shadow-md">tครкŦl๏ฬ</h4>
      </div>
     
      <div className="flex items-center justify-center space-x-5">

      <Link to="/task">
      <button ><HomeIcon /></button>

      </Link>
        
        <Link to="/addTask">
         <button className="text-[13px] p-2 text-white bg-orange-400 shadow-md "  >Add Task</button>
        </Link>
      

               {!user && (
        <button className="text-[13px] p-2 shadow-md text-white bg-blue-500 rounded-full">
          Signup
        </button>
      )}
      
           {!user && (
        <button className="text-[13px] p-2 shadow-md text-white bg-blue-500 rounded-full">
          Login
        </button>
      )}
{user && (       <button className="text-[13px] p-2 shadow-md text-white bg-red-700 rounded-full" onClick={logoutHandler} >Logout</button>)}

      </div>
    </div>
  )
}

export default Navbar