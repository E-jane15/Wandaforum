import React, { useState } from "react";

const BillingPlan = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    { id: 1, name: "Monthly",heading: "Frequently Subscribed", price: "19.99",period:"/m" },
    { id: 2, name: "Quarterly", heading: "Most Popular", price: "74.99", period:"/4m"  },
    { id: 3, name: "Yearly", heading: "Best Deal", price: "149.99", period:"/12m" },
  ];

  return (
    <div className="bg-purple px-6 pr-20 pb-10 ">
        <p className="text-orange text-sm py-8 pb-14 my-6">Billing Plan</p>
      {packages.map((pkg) => (
        <div
          key={pkg.id}
          className={`relative border p-4 rounded-lg w-52 mb-6 bg-darkpurple ${
            selectedPackage === pkg.id ? "border-blue-500 shadow-lg" : "border-gray-300"
          }`}
        >
          {/* Checkbox */}
          <input
            type="checkbox"
            id={`package-${pkg.id}`}
            checked={selectedPackage === pkg.id}
            onChange={() => setSelectedPackage(pkg.id)}
            className="absolute top-2 left-2 h-5 w-5  accent-blue-500 cursor-pointer"
          />
          {/* Package Details */}
          <label
            htmlFor={`package-${pkg.id}`}
            className="cursor-pointer"
          >
            <h3 className="text-lg mt-6 text-center mb-2 font-medium">{pkg.name}</h3>
            <p className="text-sm text-orange text-center font-bold">{pkg.heading}</p>
            <p className="text-white text-center m-3 ">$<span className="text-2xl font-bold ">{pkg.price}</span>{pkg.period} </p>
          </label>
        </div>
      ))}
    </div>
  );
};

export default BillingPlan;
