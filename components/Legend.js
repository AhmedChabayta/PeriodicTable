import React, { useState } from "react";

export default function Legend() {
  const [element, setElement] = useState([]);
  const [checked, setChecked] = useState(true);

  return (
    <div className="flex absolute top-20 space-x-5">
      <div className="flex flex-col space-y-2">
        <input
          checked={checked}
          onChange={setChecked}
          type="radio"
          className="appearance-none checked:bg-[#32CD32] w-5 h-5"
        />
        <input
          checked={checked}
          onChange={setChecked}
          type="radio"
          className="appearance-none checked:bg-[#ffc8dd] w-5 h-5"
        />
        <input
          checked={checked}
          onChange={setChecked}
          type="radio"
          className="appearance-none checked:bg-[#800000] w-5 h-5"
        />
        <input
          checked={checked}
          onChange={setChecked}
          type="radio"
          className="appearance-none checked:bg-[#FFD700] w-5 h-5"
        />
        <input
          checked={checked}
          onChange={setChecked}
          type="radio"
          className="appearance-none checked:bg-[#FF7F50] w-5 h-5"
        />
      </div>
      <div className="flex flex-col space-y-2 text-sm">
        <div className="">Diatomic Nonmetal</div>
        <div className="">Noble Gas</div>
        <div className="">Alkali Metal</div>
        <div className="">Alkaline Earth Metal</div>
        <div className="">Metalloid</div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="bg-[#adc178] w-5 h-5" />
        <div className="bg-[#cdb4db] w-5 h-5" />
        <div className="bg-[#00b4d8] w-5 h-5" />
        <div className="bg-[#FFD700] w-5 h-5" />
        <div className="bg-[#0077b6] w-5 h-5" />
      </div>
      <div className="flex flex-col space-y-2 text-sm">
        <div className="">Polyatomic Nonmetal</div>
        <div className="">Post-Transition Metal</div>
        <div className="">Transition Metal</div>
        <div className="">Alkaline Earth Metal</div>
        <div className="">Lanthanide</div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="bg-[#C8729D] w-5 h-5" />
        <div className="bg-[#abc4ff] w-5 h-5" />
      </div>
      <div className="flex flex-col space-y-2 text-sm">
        <div className="">Actinide</div>
        <div className="">Unknown</div>
      </div>
    </div>
  );
}
