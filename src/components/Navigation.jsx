import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import { useEffect, useState } from "react";
import ReadListen from "./ReadListen";
import Blogs from "./Blogs";
import Footer from "./Footer";
function Navigation() {
  const [menu, setMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showParagraph = windowWidth > 640;
  return (
    <Router>
      <div className="relative z-10 bg-white shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center px-2 lg:px-0">
              <Link to="/" className="flex-shrink-0">
                <img
                  className="block lg:hidden h-12 w-16 mb-3 mr-2"
                  src="/src/assets/logo-b.png"
                  alt="Logo"
                />

                <img
                  className="hidden lg:block h-12 w-auto mb-3 mr-2"
                  src="/src/assets/logo-b.png"
                  alt="Logo"
                />
              </Link>
              <span className=" text-green-600 font-extrabold font-serif">
                Quran Play
              </span>
              <div className="hidden lg:block lg:ml-2">
                <div className="flex">
                  <Link
                    to="/"
                    className="ml-4 px-3 py-2 rounded-full text-sm leading-5 text-gray-800 font-semibold  hover:bg-green-600 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
                  >
                    Home
                  </Link>
                  <Link
                    to="/read"
                    className="ml-4 px-3 py-2 rounded-full text-sm leading-5 text-gray-800 font-semibold  hover:bg-green-600 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
                  >
                    Read & Listen
                  </Link>
                  <Link
                    to="/about"
                    className="ml-4 px-3 py-2 rounded-full text-sm leading-5 text-gray-800 font-semibold  hover:bg-green-600 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
                  >
                    About
                  </Link>
                  <Link
                    to="/blogs"
                    className="ml-4 px-3 py-2 rounded-full text-sm leading-5 text-gray-800 font-semibold  hover:bg-green-600 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
                  >
                    Blogs
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <form method="get" action="#" className="relative z-50">
                  <button
                    type="submit"
                    id="searchsubmit"
                    className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  >
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <input
                    type="text"
                    name="s"
                    id="s"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 focus:border-green-600 rounded-full leading-5 bg-white-200 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
                    placeholder="Search"
                  />
                </form>
              </div>
            </div>
            <div className="flex lg:hidden">
              <button
                onClick={() => setMenu(!menu)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-600 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {menu && (
          <div className="block md:hidden">
            <div className="px-2 pt-2 pb-3">
              <Link
                to="/"
                className="mt-1 block px-3 py-2 rounded-md text-black font-semibold hover:bg-green-600 hover:text-white  focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="mt-1 block px-3 py-2 rounded-md text-black font-semibold  hover:bg-green-600 hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                About
              </Link>
              <Link
                to="/read"
                className="mt-1 block px-3 py-2 rounded-md text-black font-semibold  hover:bg-green-600 hover:text-white  focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                Read & Listen
              </Link>
              <Link
                to="/blogs"
                className="mt-1 block px-3 py-2 rounded-md text-black font-semibold  hover:bg-green-600 hover:text-white   focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                Blogs
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="relative">
        <img
          className="w-full h-98 object-cover"
          src="src/assets/holy-7.png"
          alt="Quran"
        />
        <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-black text-xl md:sm:text-3xl font-bold mb-4">
            Read & Listen Quran Every Day.
          </h2>
          {showParagraph && (
            <p className="text-gray-500 mb-4 text-justify">
              The Quran is the central religious text of islam, Muslim belive
              the Quran is the book of guidance and direction for mankind.
            </p>
          )}
          <button className="bg-green-600 text-white px-4 py-2 rounded-full">
            Get started
          </button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/read" element={<ReadListen />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default Navigation;
