import { useState } from "react";

function AudioSurah() {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(0);
  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
    if (isLiked === false) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  console.log(isLiked);
  return (
    <div className="m-5">
      <div className="h-2"></div>
      <div className="flex items-center justify-center">
        <div
          className="bg-white shadow-lg rounded-lg"
          style={{ width: "45rem !important" }}
        >
          <div className="flex">
            <div>
              <img
                className="w-full rounded hidden md:block"
                src="/src/assets/quran.jpg"
                alt="Album Pic"
              />
            </div>
            <div className="w-full p-8">
              <div className="flex justify-between">
                <div>
                  <h2 className=" text-left text-green-600 text-xl font-bold ">
                    سورة الفاتحة
                  </h2>
                  <h3 className="text-2xl text-grey-darkest font-medium">
                    Al-Fatihah
                  </h3>
                  <p className="text-sm text-grey mt-1">By Ahmed El Agamy</p>
                </div>
                <div className="text-red-lighter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={isLiked ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke={isLiked ? "currentColor" : "currentColor"}
                    className="w-6 h-6 cursor-pointer"
                    onClick={handleLikeToggle}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  <spam className="ml-1.5">{count}</spam>
                </div>
              </div>
              <div className="flex mt-8">
                <img
                  className="rounded-full h-12 w-12 mr-4"
                  src="https://i.pinimg.com/564x/b1/9f/03/b19f03a9f2f09c46afbfd4f03727aee7.jpg"
                  alt="Reciter"
                />

                <audio
                  controls
                  className="max-h-full max-w-full cursor-pointer "
                >
                  <source
                    className=" bg-green-600"
                    src="/src/assets/hi.mp3"
                    type="audio/mp4"
                  />
                  Your browser does not support the audio tag.
                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioSurah;
