
import Navbar_main from "../components/Navbar"

// import Table_main from "../components/Table"
import AddTodo from "../components/AddTodo"

export default function Studentsview(){
    return(
        <div className="bg-white">
   <Navbar_main/>
   <div className="flex grid-cols-2 h-screen">
    {/* <Table_main /> */}
    <AddTodo/>
   </div>
    </div>

    )
}