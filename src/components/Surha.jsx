import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Translation from "./Translation";

function Surha({ surha }) {
  const navigate = useNavigate();

  const handleClick = (surah) => {
    <Translation mysurha={surah} />;
    navigate("/read");
    console.log(surah);
  };

  return (
    <>
      <h2 className="text-center mt-9 text-green-600 text-xl md:sm:text-3xl font-bold mb-4">
        سورة القرآن الكريم
      </h2>
      <h2 className="text-center mt-5 text-black text-xl md:sm:text-3xl font-bold mb-2">
        Surahs Quran Al-Karim
      </h2>
      <p className="text-center text-black mb-4">Choose the surah from list</p>
      <div className="grid gap-16 gap-x-7 gap-y-10 grid-cols-2 xl:grid-cols-4 m-5 ">
        {surha.surahs &&
          surha.surahs.map((surah, index) => (
            <button
              key={index}
              className="flex justify-between items-center bg-white border pl-7 hover:border-green-600 hover:bg-green-600 hover:bg-opacity-10 border-gray-300 text-black px-4 py-2 rounded-md relative focus:bg-green-400 focus:bg-opacity-10  focus:border-green-600"
              onClick={() => handleClick(surah.number)}
            >
              <span className="ml-3">{surah.englishName}</span>
              <span className="absolute left-0 text-black px-2 mr-3 rounded-full">
                {index + 1}.
              </span>
              <span className="absolute right-0 text-right text-green-600 px-2">
                {surah.name}
              </span>
            </button>
          ))}
      </div>
    </>
  );
}
Surha.propTypes = {
  surha: PropTypes.shape({
    surahs: PropTypes.array,
  }).isRequired,
  onSurahSelect: PropTypes.func.isRequired,
};

export default Surha;
