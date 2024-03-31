const surha = [
  { label: "Fajir", time: "5:00am" },
  { label: "Zuhar", time: "1:30pm" },
  { label: "Asr", time: "4:30pm" },
  { label: "Magrib", time: "6:00pm" },
  { label: "Isha", time: "8:00pm" },
  { label: "Jumu'a", time: "1:30pm" },
];

function Pryar() {
  return (
    <div className="grid lg:grid-cols-2 pl-7 mt-20 bg-green-600 bg-opacity-10 text-black px-4 py-2 rounded-md relative focus:bg-green-400 focus:bg-opacity-10 focus:border-green-600 m-5">
      <div>
        <div className="flex justify-between items-center mt-8">
          <h2 className=" text-black text-xl md:sm:text-xl font-bold mb-2">
            Prayer Timings
          </h2>
          <h2 className="text-green-600 text-xl md:sm:text-xl font-bold mb-2">
            مواقيت الصلاة
          </h2>
        </div>
        <div className="mt-5 grid gap-16 gap-x-7 gap-y-10 grid-cols-2 xl:grid-cols-2 mr-2">
          {surha.map((ayat, index) => (
            <div
              key={index}
              className="p-2 bg-white border hover:border-green-600 hover:bg-green-600 hover:bg-opacity-10 border-gray-300 text-black  rounded-md relative focus:bg-green-400 focus:bg-opacity-10  focus:border-green-600 flex justify-between items-center"
            >
              <span>{ayat.label}</span>
              <span className="border-l-2 border-y-8 border-green-600"></span>
              <span>{ayat.time}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img className="object-cover" src="/src/assets/pray.png" alt="" />
      </div>
    </div>
  );
}

export default Pryar;
