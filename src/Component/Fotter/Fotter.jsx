import React from "react";

const Fotter = () => {
  return (
    <div>
      <footer className=" bg-gradient-to-r from-yellow-600 to-red-700 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <h3 className="text-xl font-semibold  mb-4">Contact Us</h3>
              <p className="font-bold">Azimpur Lalbagh</p>
              <p className=" ">Sekh Saheb Bazer</p>
              <p>Email: waseque.ndc@gmail.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Closing Hours</h3>
              <p> Friday: 11:00 PM - 10:00 Am</p>
              <p>Saturday: 10:00 PM - 11:00 Am</p>
            </div>
            <div className="ml-40">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0a12 12 0 0 0-3.97 23.4v-8.406H6.54v-3.243H8.03V8.52c0-2.883 1.765-4.454 4.338-4.454 1.246 0 2.454.224 2.454.224v2.692h-1.386c-1.36 0-1.788.844-1.788 1.715v2.06h3.046l-.486 3.244h-2.56V23.4C15.935 23.4 24 22.25 24 12 24 1.75 15.935.6 15.935.6A11.985 11.985 0 0 0 12 0z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0a12 12 0 0 0-3.97 23.4v-8.406H6.54v-3.243H8.03V8.52c0-2.883 1.765-4.454 4.338-4.454 1.246 0 2.454.224 2.454.224v2.692h-1.386c-1.36 0-1.788.844-1.788 1.715v2.06h3.046l-.486 3.244h-2.56V23.4C15.935 23.4 24 22.25 24 12 24 1.75 15.935.6 15.935.6A11.985 11.985 0 0 0 12 0z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Fotter;
