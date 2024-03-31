import AudioSurah from "./AudioSurah";
import { useEffect, useState } from "react";

function Translation() {
  const [ayahs, setAyahs] = useState([]);
  const [enAyahs, setEnAyahs] = useState([]);

  useEffect(() => {
    loadSurah();
    loadSurahEn();
  }, []);

  async function loadSurah() {
    try {
      const url = await fetch(`http://api.alquran.cloud/v1/surah/1/ar.alafasy`);
      const result = await url.json();
      if (result && result.data && result.data.ayahs) {
        setAyahs(result.data.ayahs);
      } else {
        console.error("Invalid data structure returned by the API");
      }
    } catch (error) {
      console.error("Error loading surah:", error);
    }
  }

  async function loadSurahEn() {
    try {
      const url = await fetch(`http://api.alquran.cloud/v1/surah/1/en.asad`);
      const result = await url.json();
      if (result && result.data && result.data.ayahs) {
        setEnAyahs(result.data.ayahs);
      } else {
        console.error("Invalid data structure returned by the API");
      }
    } catch (error) {
      console.error("Error loading surah:", error);
    }
  }

  return (
    <div>
      <div className="mt-9">
        <AudioSurah />
      </div>

      <h2 className="mt-20 text-center text-green-600 text-xl md:sm:text-3xl font-bold mb-4 font-mono">
        بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ لرَّحِيمِ
      </h2>
      <h2 className=" text-center mt-5 text-black text-xl md:sm:text-xl font-bold mb-2">
        In the name of God, the Merciful, the Compassionate
      </h2>

      {ayahs.map((ayah, index) => (
        <div
          key={index}
          className="border pl-7 border-green-600 bg-green-600 bg-opacity-10 text-black px-4 py-2 rounded-md relative focus:bg-green-400 focus:bg-opacity-10 focus:border-green-600 m-5"
          dir="rtl"
        >
          <h1 className="text-right text-3xl pt-5 pr-7 font-serif">
            {ayah.text}
            <img
              className="h-7 w-7 inline-block mr-2"
              src="/src/assets/end.png"
              alt=""
            />
          </h1>
          {enAyahs.find((enayah) => enayah.number === ayah.number) && (
            <p className="text-left font-serif mt-4 pb-5">
              {enAyahs.find((enayah) => enayah.number === ayah.number).text}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Translation;
