import { Navbar } from "flowbite-react"
import { Avatar } from "flowbite-react"
import { Dropdown} from "flowbite-react"
// import { NavbarLink } from "flowbite-react/lib/esm/components/Navbar/NavbarLink"
import { Link } from "react-router-dom"

import Xeno_logo from "./Images/icons8-crane-bird-100.png"

export default function Navbar_main(){
    return(
        <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand >
    <img
      src={Xeno_logo}
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
      
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Nimo
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2 ">
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="https://cdn-icons-png.flaticon.com/512/1999/1999625.png" rounded={true}/>}
    >
     
      <Dropdown.Item >
        <Link to ="/">Sign Out</Link>
      
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/studentsview"
      active={true}
    >
      To do App
    </Navbar.Link> 
  </Navbar.Collapse>
</Navbar>
    )
}