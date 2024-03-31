import { useEffect, useState } from "react";
import Surha from "./Surha";
import Reciters from "./Reciters";
import Pryar from "./Prayer";
import Blogs from "./Blogs";

function Home() {
  const [surha, setSurha] = useState([]);

  useEffect(() => {
    loadSurha();
  }, []);

  async function loadSurha() {
    const url = await fetch("http://api.alquran.cloud/v1/quran/ar.alafasy");
    const result = await url.json();
    setSurha(result.data);
  }

  return (
    <>
      <div className="md:ml-44 xl:ml-48 md:mr-44 xl:mr-48">
        <Surha surha={surha} />
        <Pryar />
        <Reciters />
        <Blogs />
      </div>
    </>
  );
}

export default Home;
