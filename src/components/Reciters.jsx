import { useNavigate } from "react-router-dom";
const reciters = [
  {
    name: "Ahmed El Agamy",
    img: "https://i.pinimg.com/564x/b1/9f/03/b19f03a9f2f09c46afbfd4f03727aee7.jpg",
  },
  {
    name: "Sheikh Mahmoud Al Hosary",
    img: "https://i.pinimg.com/564x/3f/da/7e/3fda7ed5056347e700cac64d07e164c3.jpg",
  },
  {
    name: "Sheikh Nasser Al Qatami",
    img: "https://i.pinimg.com/564x/52/de/a5/52dea5b5ce9ea312315229b0bde677cd.jpg",
  },
  {
    name: "Khalifa Al Tunaiji",
    img: "https://i.pinimg.com/564x/56/1b/17/561b17211f66cfb725f12b5fca5312d3.jpg",
  },
  {
    name: "Salah Bukhatir",
    img: "https://i.pinimg.com/564x/24/60/63/246063b8cd37a179fd261f0c40c57ef0.jpg",
  },
  {
    name: "Mishari Al-afasi",
    img: "https://i.pinimg.com/564x/35/0f/a8/350fa88c347525f4d74355bd9add912c.jpg",
  },
  {
    name: "Yasin Al Jazairi",
    img: "https://i.pinimg.com/564x/47/26/1a/47261a9e304a8aa18e94d7bb67baa6db.jpg",
  },
  {
    name: " Maher Al Muaiqly",
    img: "https://i.pinimg.com/564x/ab/cc/99/abcc9949d0419ef1f0963a54aef06397.jpg",
  },
];

function Reciters() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/read");
  };
  return (
    <div>
      <h2 className="text-center mt-20 text-green-600 text-xl md:sm:text-3xl font-bold mb-4">
        قراء القرآن
      </h2>
      <h2 className="text-center mt-5 text-black text-xl md:sm:text-3xl font-bold mb-2">
        Quran Reciters
      </h2>
      <p className="text-center text-black mb-4 ">
        Listen & Download The Holy Quran reciters
      </p>
      <div className="grid content-center justify-center gap-16 gap-x-7 gap-y-10 grid-cols-2 xl:grid-cols-4 m-5">
        {reciters.map((recite, index) => (
          <button
            key={index}
            onClick={() => handleClick()}
            className="bg-white border flex flex-col items-center px-7 py-2 hover:border-green-600 hover:bg-green-600 hover:bg-opacity-10 border-gray-300 text-black rounded-md relative focus:bg-green-400 focus:bg-opacity-10  focus:border-green-600"
          >
            <img className="rounded-full" src={recite.img} alt="Reciter" />
            <span>{recite.name}</span>
            <span className="text-green-600 px-2 hover:text-green-700">
              Start Listening
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Reciters;
