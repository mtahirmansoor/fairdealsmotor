import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/Logow.jpg"; // Update with your actual logo path
import Image from "../../assets/Header/image2.jpg"; // Path to your image

const Finance = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Logo Section */}
      <div className="flex justify-center mb-6">
        <img src={Logo} alt="Company Logo" className="h-25" />
        {/* Adjust height as needed */}
      </div>

      {/* Heading Section */}
      <h1 className="text-3xl font-bold text-center mb-4">Finance</h1>
      <p className="text-gray-700 text-lg mb-6">
        Welcome to our Finance section! Here, we provide valuable resources and
        information to help you manage your finances effectively. Whether you're
        looking for budgeting tips, investment advice, or information on loans,
        we have you covered.
      </p>

      {/* Location Section */}
      <div className="text-center mb-4">
        {/* Location Image */}
        <div className="mb-4">
          <img
            src={Image} // Your image path
            alt="Image"
            className="mx-auto w-full max-w-md rounded-md" // Adjust styling as needed
          />
        </div>

        {/* Location Information */}
        <h3 className="text-xl font-medium">Location</h3>
        <h2>20 Harding Road Woodley, Reading Berkshire RG5 3ER</h2>
        <div className="w-full h-64">
          <iframe
            title="Showroom Location"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9944.331536819276!2d-0.9263063432452752!3d51.456634648150406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487685c61be70155%3A0xfb78fff40d91499b!2sFair%20Deals%20Motor%20LTD!5e0!3m2!1sen!2sau!4v1729422321621!5m2!1sen!2sau"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Link to Stock Page */}
      <div className="flex justify-center">
        <Link
          to="/stock"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          View Stock
        </Link>
      </div>
    </div>
  );
};

export default Finance;
