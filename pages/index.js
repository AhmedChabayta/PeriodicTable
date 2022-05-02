import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { client } from "../lib/client";
import Element from "../components/Element";
import Legend from "../components/Legend";

export default function Home({ elements }) {
  const [search, setSearch] = useState("");

  const filteredElements = elements.filter((element) => {
    return (
      element.name,
      element.name.toLowerCase,
      element.name.toLowerCase().includes(search.toLowerCase())
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
        className="text-center form-control block w-full px-3 py-1.5 text-base font-normal text-gray-100 bg-black bg-clip-padding transition ease-in-out m-0 focus:text-white focus:outline-none"
        type="text"
        value={search}
        placeholder="search elements"
        onChange={searchELements.bind(this)}
      />
      <div className="flex justify-center items-center mt-[400px]">
        {filteredElements.map((element, index) => (
          // eslint-disable-next-line @next/next/link-passhref
          <Link key={index} href={`./elements/` + element.slug.current}>
            <div className="elements">
              <Element element={element} />
            </div>
          </Link>
        ))}
        <Legend />
      </div>
    </div>
  );
}
export const getStaticProps = async () => {
  const query = '*[_type == "element"]';
  const elements = await client.fetch(query);

  return {
    props: { elements },
  };
};
