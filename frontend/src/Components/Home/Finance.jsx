import React from 'react';
import { Link } from 'react-router-dom';

const Finance = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Finance</h1>
      <p className="text-gray-700 text-lg mb-4">
        Welcome to our Finance section! Here, we provide valuable resources and information to help you manage your finances effectively. 
        Whether you're looking for budgeting tips, investment advice, or information on loans, we have you covered.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Personal Finance Management</li>
        <li>Investment Planning</li>
        <li>Loan Consultation</li>
        <li>Retirement Planning</li>
      </ul>
      <p className="text-gray-700 mb-4">
        Our team of experts is here to guide you through every step of your financial journey. We believe that informed decisions lead to better financial health.
      </p>
      <div className="flex justify-center">
        <Link to="/stock" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          View Stock 
        </Link>
      </div>
    </div>
  );
}

export default Finance;
