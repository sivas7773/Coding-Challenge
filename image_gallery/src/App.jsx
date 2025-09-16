import React, { useState } from "react";

function App() {
  const images = [
    "/src/images/image1.jpg",
    "/src/images/image2.jpg",
    "/src/images/image3.jpg",
    "/src/images/image4.jpg",
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const next = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="flex flex-col items-center w-full p-4 sm:p-6">
      <p className="text-3xl font-bold underline">
    Hello world!
  </p>
      <img
        src={images[index]}
        alt={`Gallery ${index + 1}`}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-cover rounded shadow"
      />
      <div className="mt-4 flex gap-4">
        <button
          onClick={prev}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
        >
          Prev
        </button>
        <button
          onClick={next}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
