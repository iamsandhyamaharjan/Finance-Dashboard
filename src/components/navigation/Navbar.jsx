export default function Navbar(){
    return(
        <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md ">
            <div className="text-xl font-semibold text-gray-800">Dashboard</div>
            <div className="flex items-center gap-4">
                <input type="text" placeholder="Search......" className=" px-3  py-2 border rounded-lg focus:outline focus:ring-2 focus:ring-indigo-500"/>
                <i className="fa fa-user text-gray-700 text-xl cursor-pointer"/>
            </div>
        </div>
    )
}