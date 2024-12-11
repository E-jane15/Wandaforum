import React from 'react'

const PaymentMethod = () => {
  return (
    <div className="bg-purple px-10 py-20 pb-20">
      <div>
        <p className="text-3xl mb-2">
          <span className="text-orange">Payment</span> Method
        </p>
        <p className="text-sm mb-1">
          Get started with a WandaForum Subscription. We accept the following
          subscription <br />
          methods
        </p>
        <p>
          ------------------------------------------------------------------------------------------------------------------------
        </p>
      </div>

      <div className="bg-darkpurple p-4 mt-3">
        <div className="mb-3 px-3">
          <input type="checkbox" />
          <label htmlFor=""> Credit Card</label>
        </div>

        <p className="text-xs mb-4 px-4 ">
          Safe money transfer using your bank account, Visa, Maestro, Discover,
          <br /> American Express, etc.
        </p>
        <p>
          -------------------------------------------------------------------------------------------------------------------
        </p>

        <form action="" className="mt-5 grid grid-cols-2 px-3">
          <div>
            <label htmlFor="" className='text-orange text-xs'>First Name</label>
            <input
              type="text"
              id=""
              placeholder="Enter your first name"
              className="block bg-transparent border border-gray-600 px-7 py-3 rounded-full text-sm w-80 mt-2 mb-5 "
            />
          </div>
          <div>
            <label htmlFor="" className='text-orange text-xs'>Last Name</label>
            <input type="text" id="" placeholder="Enter your last name "
            className="block bg-transparent border border-gray-600 px-7 py-3 rounded-full text-sm w-80 mt-2 mb-5 "
             />
          </div>
          <div>
            <label htmlFor="" className='text-orange text-xs' >Email</label>
            <input type="text" id="" placeholder="Enter your email"
            className="block bg-transparent border border-gray-600 px-7 py-3 rounded-full text-sm w-80 mt-2 mb-5 "
            />
          </div>
          <div>
            <label htmlFor="" className='text-orange text-xs'>Country</label>
            <input type="text" id="" placeholder="Enter your country" 
            className="block bg-transparent border border-gray-600 px-7 py-3 rounded-full text-sm w-80 mt-2 mb-5 "
            />
          </div>
        </form>

        <label htmlFor="" className='block text-sm font-medium px-3 py-3'>
          <input type="checkbox" name="" id="" />
          Use a different payment card to process the payment
        </label>
        <button className='bg-purple px-7 py-3 rounded-full text-lg my-5 mx-auto block'>Proceed to checkout</button>
      </div>
    </div>
  );
}

export default PaymentMethod