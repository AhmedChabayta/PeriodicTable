/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { client } from "../../lib/client";
import { motion } from "framer-motion";

export default function Elements({
  elements: {
    name,
    number,
    symbol,
    discoveredBy,
    atomicMass,
    boil,
    category,
    melt,
    molarHeat,
    period,
    phase,
    density,
    description,
    electronConfiguration,
    color,
    shells,
  },
}) {
  console.log(name);
  const router = useRouter();
  const slug = router.query.slug;
  const coloredText = {
    color: color,
  };
  return (
    <div className="p-10 flex justify-between bg-black h-screen text-white">
      <div className="flex">
        <div className="whitespace-nowrap flex flex-col">
          <h1>{number}</h1>
          <p>{period}</p>
          <motion.div
            animate={{ rotate: 3600 }}
            transition={{
              type: "spring",
              stiffness: 0.1,
              repeat: Infinity,
              repeatType: "reverse",
              velocity: 0,
            }}
            className="relative flex justify-center items-center rounded-full h-5 w-5 place-self-center mb-9 bg-transparent group"
          >
            <motion.div
              style={{ backgroundColor: color }}
              className="h-3 w-3 rounded-full absolute -top-7 group-hover:invert z-30"
            />
            <motion.div
              style={{ backgroundColor: color }}
              className="h-3 w-3 rounded-full absolute -bottom-7 group-hover:invert z-30"
            />
            <motion.div
              style={{ backgroundColor: color }}
              className="h-3 w-3 rounded-full absolute -left-7 group-hover:invert z-30"
            />
            <motion.div
              style={{ backgroundColor: color }}
              className="h-3 w-3 rounded-full absolute -right-7 group-hover:invert z-30"
            />
            <motion.div
              style={{ backgroundColor: color }}
              className="h-5 w-5 rounded-full absolute group-hover:invert"
            />
            <motion.div
              style={{ backgroundColor: "transparent", borderColor: color }}
              className="h-10 w-10 rounded-full absolute border-2"
            />
            <motion.div
              style={{ backgroundColor: "transparent", borderColor: color }}
              className="h-16 w-16 rounded-full absolute border-2"
            />
          </motion.div>
          <h1 style={{ color: color }} className="text-9xl font-black">
            {symbol}
          </h1>
          <h3 className="text-5xl mb-5">{name}</h3>

          <h2>
            <span style={coloredText}>Category: </span> {category}
          </h2>
          <h2>
            <span style={coloredText}>Atomic Mass: </span> {atomicMass}
          </h2>
          <h2>
            <span style={coloredText}>Boiling Tempreture:</span> {boil}
            <span style={coloredText}> °C</span>
          </h2>
          <h2>
            <span style={coloredText}>Melting Tempreture:</span> {melt}
            <span style={coloredText}> °C</span>
          </h2>
          <h2>
            <span style={coloredText}>Molar Heat: </span> {molarHeat}
          </h2>
          <h2>
            {density} <span style={coloredText}>g/cm³</span>
          </h2>
          <h1>
            <span style={coloredText}>Phase: </span> {phase}
          </h1>
        </div>
        <div className="flex flex-col items-end justify-start">
          {shells.map((shell, index) => (
            <p key={index} className="">
              {shell}
            </p>
          ))}
        </div>
      </div>
      <div className="flex items-end justify-between w-screen">
        <div className="flex absolute left-5">
          <Link href="/">
            <a className="">
              <p>Back</p>
            </a>
          </Link>
        </div>
        <div className="flex-col">
          <p>{description}</p>
          <h2>Discovered By: {discoveredBy}</h2>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const query = `*[_type == "element"]{
        slug {
            current
        }
    }`;
  const elements = await client.fetch(query);

  const paths = elements.map((element) => ({
    params: {
      slug: element.slug.current,
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "element" && slug.current == '${slug}'][0]`;
  const elements = await client.fetch(query);

  return {
    props: { elements },
  };
};
