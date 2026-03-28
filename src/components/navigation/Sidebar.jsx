function MenuItem({ label, icon }) {
    return (
        <div className="flex items-center gap-2 p-3 hover:bg-indigo-800 rounded-md cursor-pointer text-white">
            <span>{label}</span>
            <i className={icon}></i>
        </div>
    )
}
export default function Sidebar() {
    return (
        <div className="flex w-64 flex-col h-screen bg-indigo-900 shadow-md p-4">
            <div className="text-xl font-bold mb-6 text-white">Logo</div>
             <MenuItem label="Dashboard" icon="fa-solid fa-chart-bar" />
               <MenuItem icon="fa-solid fa-cash-register" label="Transactions" />
      <MenuItem icon="fa-solid fa-piggy-bank" label="Budgets" />
      <MenuItem icon="fa-solid fa-ellipsis" label="Settings" />
            
        </div>
    )
}