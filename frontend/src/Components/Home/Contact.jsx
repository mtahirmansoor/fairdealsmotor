import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Showroom Information</h2>
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <div>
          <h3 className="text-xl font-medium">Contact Information</h3>
          <p className="text-gray-700">
            Email:{" "}
            <a
              href="mailto:Fairdealsmotor@gmail.com"
              className="text-blue-500 hover:underline"
            >
              Fairdealsmotor@gmail.com
            </a>
          </p>
          <p className="text-gray-700">
            Phone:{" "}
            <a
              href="tel:+44 7398 524761"
              className="text-blue-500 hover:underline"
            >
              +44 7398 524761
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium">Showroom Timings</h3>
          <ul className="py-2 text-xs sm:text-sm md:text-sm space-y-1 sm:space-y-2">
            <li className="flex justify-between items-center text-center">
              <span className="w-1/2">Monday</span>
              <span className="w-1/2">9am - 5pm</span>
            </li>
            <li className="flex justify-between items-center text-center">
              <span className="w-1/2">Tuesday</span>
              <span className="w-1/2">9am - 5pm</span>
            </li>
            <li className="flex justify-between items-center text-center">
              <span className="w-1/2">Wednesday</span>
              <span className="w-1/2">9am - 5pm</span>
            </li>
            <li className="flex justify-between items-center text-center">
              <span className="w-1/2">Thursday</span>
              <span className="w-1/2">9am - 5pm</span>
            </li>
            <li className="flex justify-between items-center text-center">
              <span className="w-1/2">Friday</span>
              <span className="w-1/2">9am - 5pm</span>
            </li>
            <li className="flex justify-between items-center text-center">
              <span className="w-1/2">Saturday</span>
              <span className="w-1/2">10am - 4pm</span>
            </li>
            <li className="flex justify-between items-center text-center">
              <span className="w-1/2">Sunday</span>
              <span className="w-1/2">Closed</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium">Location</h3>
          <h2>20 Harding Road Woodley, Reading Berkshire
          RG5 3ER</h2>
          <div className="w-full h-64">
            <iframe
              title="Showroom Location"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9944.331536819276!2d-0.9263063432452752!3d51.456634648150406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487685c61be70155%3A0xfb78fff40d91499b!2sFair%20Deals%20Motor%20LTD!5e0!3m2!1sen!2sau!4v1729422321621!5m2!1sen!2sau"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
