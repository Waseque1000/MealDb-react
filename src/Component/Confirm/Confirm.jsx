import { Link } from "react-router-dom";

const Confirm = () => {
  return (
    <div>
      <div className="container mx-auto mt-35 mt-36  px-4 py-8">
        <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold mb-6">
            Thanks For Your Advise
          </h2>

          <div>
            <Link to={"/"}>
              <button
                type="submit"
                className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out text-center ml-24"
              >
                Visit My Website
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
