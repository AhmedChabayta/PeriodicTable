import Head from "next/head";
import { useState } from "react";
import Element from "../components/Element";
import Legend from "../components/Legend";
import eData from "../elementsData.json";

export default function Home() {
  const [search, setSearch] = useState("");
  const [element, setElement] = useState([]);
  const [checked, setChecked] = useState(true);

  const filteredElements = eData.filter((item) => {
    return (
      item.name,
      item.name.toLowerCase,
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });
  const searchELements = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="h-screen w-screen relative bg-black text-white">
      <Head>
        <title>PeriodicElements</title>
        <meta name="description" content="PeriodicElements" />
        <link ritem="icon" href="/favicon.ico" />
      </Head>
      <input
        className="w-screen h-10 bg-black text-center"
        type="text"
        value={search}
        onChange={searchELements.bind(this)}
      />
      <div className="flex justify-center items-center mt-[400px]">
        {filteredElements.map((item, index) => (
          <div key={index} className="elements">
            <Element item={item} />
          </div>
        ))}
        <Legend />
      </div>
    </div>
  );
}
