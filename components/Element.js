/* eslint-disable @next/next/link-passhref */
import Link from "next/link";

function Element({
  element: {
    name,
    number,
    atomicMass,
    xpos,
    ypos,
    color,
    symbol,
    shells,
    slug,
  },
}) {
  const styles = {
    gridColumn: xpos,
    gridRow: ypos,
    color: color,
    borderColor: color,
  };
  return (
    <Link href={`./elements/` + slug.current}>
      <div
        className="item relative z-10 h-full pl-1 flex border-[0.01px] border-white cursor-pointer group hover:scale-[1.5] hover:z-50 hover:bg-stone-900 hover:border-2 transform-gpu transition-all duration-150 "
        style={styles}
        key={atomicMass}
      >
        <div className="flex flex-col">
          <p className="text-[0.7rem] hidden sm:inline">{number}</p>
          <h1 className="text-xl font-bold">{symbol}</h1>
          <h5 className="text-[0.4rem] hidden sm:inline">{name}</h5>
          <h6 className="text-[0.4rem] mb-1 hidden sm:inline">{atomicMass}</h6>
        </div>
        <div className="flex flex-col absolute right-1">
          {shells.map((shell, index) => (
            <p key={index} className="flex flex-col text-[6px]">
              {shell}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default Element;
