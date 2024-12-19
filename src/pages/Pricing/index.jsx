import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import PricingCard from '../../Components/PricingCard'
import BillingPlan from '../../Components/BillingPlan';
import PaymentMethod from '../../Components/PaymentMethod';
import bottom_icon from '../../assets/bottom_icon.png'
import bottom_vector from '../../assets/bottom_vector.png'
import FAQSection from '../../Components/FAQs/FAQs';
import { AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

const Pricing = () => {

    const priceCards = [
        {
            title: "New Users",
            heading: "Free Trial",
            billing: "no billing ($0)",
            amount: "0",
            time: "1d",
            benefit1: "Access to 100 AI Prompts",
            benefit2:"Access to Premium features for 1 day"
        },
        {
            title: "Frequently Subscribed",
            heading: "Monthly",
            billing: "billed monthly ($19.99)",
            amount: "19.99",
            time: "m",
            benefit1:"Access premium features for one month",
            benefit2:"Unlimited AI prompts for one month"
        },
        {
            title: "Most Popular",
            heading: "Quarterly",
            billing: "billed quarterly ($74$)",
            amount: "74.99",
            time: "4m",
            benefit1: "Access premium features for 4 months",
            benefit2:"Unlimited AI prompts for 4 months"
        },
        {
            title: "Best Deal",
            heading: "Yearly",
            billing: "billed yearly ($149.99)",
            amount: "149.99",
            time: "yr",
            benefit1:"Access premium features for 12 months",
            benefit2:"Unlimited AI prompts for 12 months"
        },
        
      ];
    

  return (
    <div className='text-white bg-[#592a9c]/40' >
        <Navbar/>
        <div className=''>
        <div className='text-center my-32'>
            <p className='text-6xl bg-gradient-to-r from-purple2 to-orange bg-clip-text text-transparent font-bold'>Find the Right Plan</p>
            <p className='text-lg mt-7'>Get started with a wandaforum subscription that works for you.</p>
        </div>
        <div className="grid grid-cols-3 gap-20 px-32">
          {priceCards.map((price_cards, index) => (
            <PricingCard
              key={index}
              title={price_cards.title}
              heading={price_cards.heading}
              billing={price_cards.billing}
              amount={price_cards.amount}
              time={price_cards.time}
              benefit1={price_cards.benefit1}
              benefit2={price_cards.benefit2}
            />
          ))}
        </div>
         <div className='px-20 flex items-stretch gap-10'>
          <BillingPlan className="basis-2/5"/>
          <PaymentMethod className="basis-3/5" />
         </div >
         <FAQSection/>
          {/* Footer */}
                <footer
                  className=" py-8 mt-24 bg-[right_100%]  bg-cover bg-no-repeat h-screen w-full"
                  style={{ backgroundImage: `url(${bottom_vector})` }}
                >
                  <div className="max-w-6xl mx-auto px-6 text-center  ">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      {/* Icon */}
                      <div className="bg-orange w-16 h-16 flex items-center justify-center rounded-full">
                        <img
                          src={bottom_icon} // Replace with the path to your purple icon
                          alt="Logo Icon"
                          className="w-6 h-8"
                        />
                      </div>
                    </div>
                    <h2 className="text-orange text-xl font-bold mt-8">
                      Wanda<span className="font-light ">Forum</span>
                    </h2>
                    <div className="mt-4 flex justify-center space-x-6 text-white">
                      <a href="#" className="hover:text-orange">
                        Community
                      </a>
                      <a href="#" className="hover:text-orange">
                        Questions
                      </a>
                      <a href="#" className="hover:text-orange">
                        Peermocks
                      </a>
                      <a href="#" className="hover:text-orange">
                        Pricing
                      </a>
                    </div>
                    <div className="mt-8 flex justify-center space-x-4 text-orange">
                      <a href="#" className="hover:text-white">
                        <AiOutlineFacebook />
                      </a>
                      <a href="#" className="hover:text-white">
                        <AiOutlineLinkedin />
                      </a>
                      <a href="#" className="hover:text-orange-400">
                        <FiTwitter />
                      </a>
                      <a href="#" className="hover:text-orange-400">
                        <FaInstagram />
                      </a>
                    </div>
                    <p className="text-gray-500 mt-8 text-light">
                      © 2024 Wandaprep<br></br> All Rights Reserved
                    </p>
                    <p className="text-orange mt-2 text-sm">
                      <a href="#">Privacy Policy</a> |{" "}
                      <a href="#">Terms and Conditions</a>
                    </p>
                  </div>
                </footer>

         </div>
    </div>
  )
}

export default Pricing