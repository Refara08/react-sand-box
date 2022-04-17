import { useState } from "react";

const Playground = () => {
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(25);
  const [style, setStyle] = useState("border-2 p-4 px-8 border-gray-700 ");

  const handleClick = () => {
    setName("Luigi");
    setAge(29);
    setStyle("border-2 p-4 px-8 border-green-400 rounded-lg ");
  };

  return (
    <div className="text-left w-[90%] mx-auto p-4 mt-12">
      <h1 className="font-bold text-5xl mb-16">This is a Sandbox Playground</h1>
      <div className={style}>
        <div className="ml-3">
          <h2 className="font-bold text-xl mb-5">1. useState Hook</h2>
          <p className="text-lg font-semibold mb-5">
            I am {name}, and I am {age} years old
          </p>
        </div>
        <button
          className="py-2 px-6 rounded-full bg-black text-white border-2 hover:bg-white hover:text-black hover:border-black transition-300ms"
          onClick={handleClick}
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Playground;
