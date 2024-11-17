import React from 'react';
import Logo from '../../assets/Logo/Logow.jpg'; // Adjust the path as needed

const Warranty = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Logo at the Top */}
      <div className="flex justify-center mb-6">
        <img src={Logo} alt="Company Logo" className="h-25" />
      </div>

      {/* Warranty Details */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Warranty Details</h2>
        <p>
          We offer a comprehensive warranty on all our products. This warranty covers any defects in material or workmanship under normal use for a period of [Warranty Period]. If you experience any issues, please contact us for support.
        </p>
      </section>

      {/* Image Section */}
     

      {/* More Details */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">More Details</h2>
        <p>
          For detailed information on our warranty policies, please refer to our official warranty guide. Coverage includes parts and labor for defects under normal usage. Exclusions apply for damages caused by misuse, accident, or unauthorized repairs.
        </p>
      </section>

      {/* Contact Information */}
      
    </div>
  );
};

export default Warranty;
