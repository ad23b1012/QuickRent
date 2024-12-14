import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-20 space-y-8 md:space-y-0">
        {/* Left: Office Details */}
        <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Office Location</h3>
          
          {/* Office contact details */}
          <div className="text-gray-400">
            <p className="mb-2"><strong>Email:</strong> buddigaabhishek@gmail.com</p>
            <p className="mb-2"><strong>Phone:</strong> +91 9032097396</p>
            <p className="mb-2"><strong>Address:</strong> Indian Institute of Information Technology, Raichur</p>
            <p className="mt-4">© 2024 QuickRent. All rights reserved.</p>
          </div>
        </div>

        {/* Right: Google Map */}
        <div className="w-full md:w-1/2">
          <div className="relative pb-[56.25%] md:pb-[45%] h-0"> 
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.4502728661105!2d77.36338237513971!3d16.24867718445716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc9d17abbd87b87%3A0x28afde55f519a10b!2sIndian%20Institute%20of%20Information%20Technology%2C%20Raichur!5e0!3m2!1sen!2sin!4v1734194473932!5m2!1sen!2sin"
              title="Office Location Map"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
