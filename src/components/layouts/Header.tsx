/* eslint-disable @typescript-eslint/no-unused-vars */
import { Moon, ShoppingCart, Sun } from "lucide-react";
import EmaJohn from "../../assets/ema-jogn-logo.png";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { toggleTheme } from "../../redux/features/themeSlice";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Header = () => {
  const dispatch = useAppDispatch()
  const {darkMode} = useAppSelector((store)=>store.theme)
 const products = useAppSelector((store)=> store.cart.products)
  const handleToggleTheme = ()=>{
    dispatch(toggleTheme())
  }
  return (
    <header className="bg-[#1c2b35] text-white">
      <nav className="container flex items-center justify-between space-x-10 py-4 ">
        <Link to={"/"}>
          <img src={EmaJohn} alt="" />
        </Link>

        <ul className="flex items-center space-x-5">
          <li>
            <Link
              className=" rounded-lg backdrop-blur-[2px] p-1 inline-block"
              to={"/products"}
            >
              Products
            </Link>
          </li>
          <li>
            <a
              className=" rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              About
            </a>
          </li>
          <li                     
         className="relative">
            <Link
              className=" rounded-lg backdrop-blur-[2px] p-1 inline-block"
              to={"/cart"}
            >
       
              <ShoppingCart size={24} />
            </Link>
            <span className="rounded-full absolute top-[-15px] left-[20px] bg-primary text-white text-center size-[25px]"> {products.length}</span>
          </li>

          <li>
            <button 
            onClick={handleToggleTheme}
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block"
      
            >
              
             {darkMode ?  <Sun/> :  <Moon size={24} /> }
              
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
