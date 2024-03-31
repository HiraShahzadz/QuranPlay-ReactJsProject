function AboutUs() {
  return (
    <div>
      <div className="md:ml-44 xl:ml-48 md:mr-44 xl:mr-48">
        <section className=" bg-green-600 bg-opacity-10 rounded-md border shadow-lg mt-9 mb-9 dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <div className="xl:flex xl:items-center">
              <div className="xl:w-1/2 xl:mx-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl md:sm:text-3xl font-semibold text-black capitalize dark:text-white">
                    Our Team
                  </h1>
                  <h2 className=" text-green-600 text-xl md:sm:text-3xl font-bold mb-4">
                    فريقنا
                  </h2>
                </div>
                <p className="text-justify mt-4 text-black dark:text-gray-300">
                  We have established dedicated teams to provide you with
                  authentic sources of the Quran for both reading and listening.
                  Our team is deeply committed to upholding and respecting your
                  religious values and beliefs.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
                <div className="border-8 border-white text-center bg-white shadow-lg rounded-2xl">
                  <img
                    className="object-cover rounded-xl h-64 w-full"
                    src="https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=" Ali Ahmed"
                  />
                  <h1 className="mt-4 text-xl  font-semibold text-black capitalize dark:text-white">
                    Ali Ahmed
                  </h1>
                  <p className="mb-4 text-black capitalize dark:text-gray-300">
                    Backend developer
                  </p>
                </div>

                <div className="border-8 border-white bg-white text-center shadow-lg rounded-2xl">
                  <img
                    className="object-cover rounded-xl h-64 w-full"
                    src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Hira Shahzad"
                  />
                  <h1 className="mt-4 text-xl font-semibold text-blackcapitalize dark:text-white">
                    Hira Shahzad
                  </h1>
                  <p className="mb-4 text-black capitalize dark:text-gray-300">
                    Frontend Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
