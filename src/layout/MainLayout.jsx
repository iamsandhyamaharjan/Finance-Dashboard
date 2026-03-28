import Navbar from "../components/navigation/Navbar";
import Sidebar from "../components/navigation/Sidebar";

export default function MainLayout({children}){
    return(
        <div className="flex h-screen bg-gray-100">
        <Sidebar/>
        <div className="flex-1 flex flex-col">

        <Navbar/>
        <div className="flex-1 p-6 overflow-auto">
            {children}
        </div>
        </div>
        </div>
    )
}