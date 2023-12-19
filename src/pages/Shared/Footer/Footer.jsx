const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-white py-8 bg-opacity-95 rounded-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <img
              src="logo.png"
              alt="Website Logo"
              className="h-12 mb-4 rounded-full"
            />
            <p className="text-sm">Study Junction</p>
            <p>Dhaka, Bangladesh</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p>Email: study@junction.com</p>
            <p>Phone: 01*********</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Address</h4>
            <p>**************</p>
            <p>**************************</p>
            <p>****************</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Privacy Policy</h4>
            <p>**************</p>
            <p>**************************</p>
            <p>****************</p>
          </div>
        </div>
        <hr className="my-8 border-gray-600" />
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Study Junction. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
