import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
 
export function MenuDefault() {
  return (
    <Menu>
      <MenuHandler>
        <Button>Menu</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
 }
const Item= () => {
    const NotificationItem = [
        {
          id: 1,
          message: "We're pleased to inform you that a new customer has registered! Please follow up promptly by contacting.",
          time: "0 mins ago",
        },
        {
          id: 2,
          message: "You have been invited to interview for the position of Frontend developer at  Wandaprep",
          time: " 54 mins ago",
        },
        {
          id: 3,
          message: "Your account has being desactivated",
          time: "1 hour ago",
        },
        {
          id: 4,
          message: "You have a new interview request from Fruh Nji.",
          time: "5 days ago",
        }, 
         {
           id: 5,
          message: "You've recieved a message from Dr. Nguti.",
          time: "01 Feb, 2024",
         },
        {
          id: 6,
          message: "Hello Sales Marketing Team, It's time for a follow-up with a customer after their recent purchase/meeting.",
          time: "27 Jan, 2024",
        },
        {
          id: 7,
          message: "Hello Sales Marketing Team, It's time for a follow-up with a customer after their recent purchase/meeting.",
          time: "27 Jan, 2024",
        },
        {
          id: 8,
          message: "Ayamba commented on your post",
          time: "27 Jan, 2024",
        },
      ]
    
        
  return(
    <div className="bg-darkpurple min-h-screen flex flex-col text-white ">
    {/* Navbar */}
    <nav className="bg-darkpurple shadow-md px-4 py-2 flex items-center text-white justify-between">
      <div className="flex items-center">
        <i className="fas fa-chart-line text-blue-500 text-2xl mr-2"></i>
        <span className="text-xxl font-semibold text-gray-700">Wandaprep</span>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
        />
        <i className="fas fa-user-circle text-gray-500 text-2xl"></i>
      </div>
    </nav>

    {/* Sidebar and Main Content */}
    <div className="flex flex-1">
      {/* Sidebar */}
      <aside className="w-64 bg-darkpurple p-4 text-white shadow-md">
        <nav className="flex flex-col text-white space-y-8">
       <a href="#" className="flex items-center text-gray-700 font-medium hover:text-blue-500 text-sm">
  main menu
</a>

        <a href="#" className="flex items-center  font-medium hover:text-blue-500 ml-4">
  <i className="fas fa-home mr-2"></i> Overview
</a>
<a href="#" className="flex items-center  font-medium hover:text-blue-500 ml-4">
  <i className="fas fa-chart-bar mr-2"></i> Analytics
</a>
<a href="#" className="flex items-center  font-medium hover:text-blue-500 ml-4">
  <i className="fas fa-box mr-2"></i> Product
</a>
<a href="#" className="flex items-center  font-medium hover:text-blue-500 ml-4">
  <i className="fas fa-shopping-cart mr-2"></i> Sales
</a>
  
<a href="#" className="flex items-center  font-medium hover:text-blue-500 text-sm">
 transactions
</a>  


          <a href="#" className="flex items-center  font-medium hover:text-blue-500 ml-4">
            <i className="fas fa-credit-card mr-2"></i> Payment
          </a>
          <a href="#" className="flex items-center  font-medium hover:text-blue-500 ml-4">
            <i className="fa-sharp fa-solid fa-file-import mr-2"></i> Refunds
          </a>
          <a href="#" className="flex items-center  font-medium hover:text-blue-500 ml-4">
            <i className="fa-sharp fa-solid fa-file-invoice mr-2 "></i> invoice
          </a>
          <a href="#" className="flex items-center  font-medium hover:text-blue-500 ml-4">
            <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i> returns
          </a>

          <a href="#" className="flex items-center  font-medium hover:text-blue-500  text-sm">
             general
          </a>



          <a href="#" className="flex items-center font-medium hover:text-blue-500 ml-4">
            <i className="fas fa-bell mr-2"></i> Notifications
          </a>
          <a href="#" className="flex items-center  font-medium hover:text-blue-500 ml-4">
            <i className="fas fa-comment-alt mr-2"></i> Feedback
          </a>
          <a href="#" className="flex items-center  font-medium hover:text-blue-500 ml-4">
            <i className="fas fa-cog mr-2"></i> Settings
          </a>
          <a href="#" className="flex items-center font-medium hover:text-blue-500 ml-4">
            <i className="fas fa-moon mr-2"></i> Dark Mode
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">List Notifications</h1>
          <div className="flex items-center space-x-4">
            
            <div className="flex items-center rounded-md p-2 text-sm">
          <input
          type="text"
          placeholder="Search"
          className="border  rounded-md p-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
        />
             </div>
            <div className="flex items-center space-x-1 border border-gray-300 rounded-md p-2 text-sm">
              <i className="fas fa-filter"></i> <span>All</span>
             </div>
             <div className="flex items-center space-x-1 border border-gray-300 rounded-md p-2 text-sm">
              <i className="fas fa-archive"></i> <span>Archive</span>
            </div>
            <div className="flex items-center space-x-1 border border-gray-300 rounded-md p-2 text-sm">
              <i className="fas fa-star"></i> <span>Favorite</span>
            </div>
            <div className="flex items-center space-x-1 border border-gray-300 rounded-md p-2 text-sm">
            <i className="fas fa-user-circle text-gray-500 text-2xl"></i>
            </div>
          </div>
        </header>
        <div className="bg-darkpurple rounded-lg shadow p-4">
      <div className="flex items-center space-x-4 justify justify-between">
        <span className="font-bold">190 notifications</span>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div className='flex justify-between mt-8'>
        <div className=' border-b-purple border-b-2 w-80'>
          <span>
            <span className='bg-purple-500 rounded-xl pl-2 pr-2'>20</span>All</span>
        </div>
        <div className='border-b-2 w-80 text-white'>
          <span>
            <span className='bg-purple-500 rounded-xl pl-2 pr-2'>20</span>Archive</span>
        </div>
        <div className='border-b-2 w-80'>
          <span>
            <span className='bg-purple-500 rounded-xl pl-2 pr-2'>20</span>Favourite</span>
        </div>
      </div>
          <ul className="divide-y divide-gray-200">
            {NotificationItem.map((notification) => (
              <li key={notification.id} className="py-4 flex justify-between">
                <div className="flex items-start space-x-2">
                  <span className="h-2 w-2 bg-green-500 rounded-full mt-1"></span>
                  <div>
                    <p className="text-gray-700">{notification.message}</p>
                    <p className="text-gray-500 text-sm">{notification.time}</p>
                  </div>
                </div>
                <button className="text-red-500 hover:text-purple-700">
                <i className="fas fa-trash text-purple"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  </div>
  );
  }

export default Item;