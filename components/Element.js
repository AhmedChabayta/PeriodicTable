function Element({
  element: { name, number, atomicMass, xpos, ypos, color, symbol, shells },
}) {
  const styles = {
    gridColumn: xpos,
    gridRow: ypos,
    color: color,
    borderColor: color,
  };
  return (
    <div
      className="item relative z-10 bg-black h-full pl-1 flex cursor-pointer group hover:scale-[3] hover:z-50 hover:bg-stone-900 hover:border-2 transform-gpu transition-all duration-150 "
      style={styles}
      key={atomicMass}
    >
      <div className="flex flex-col">
        <p className="text-[0.7rem]">{number}</p>
        <h1 className="text-xl font-bold">{symbol}</h1>
        <h5 className="text-[0.4rem]">{name}</h5>
        <h6 className="text-[0.4rem] mb-1">{atomicMass}</h6>
      </div>
      <div className="flex flex-col absolute right-1">
        {shells.map((shell, index) => (
          <p key={index} className="flex flex-col text-[6px]">
            {shell}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Element;
