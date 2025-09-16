import React, { useState } from "react";

function App() {
  const images = [
    "https://fastly.picsum.photos/id/93/2000/1334.jpg?hmac=HdhcVTbAYkFCXsu1qBRWeEPiy05Qjc3LbnMWJlfEFjo",
    "https://fastly.picsum.photos/id/95/2048/2048.jpg?hmac=rvEUpzQSeSWTzfsWTIytYnLieOx_Iaa6PfYOxVwEb1g",
    "https://fastly.picsum.photos/id/110/5000/3333.jpg?hmac=AvUBrnXG4ebvrtC08T95vEzD1I9SryZ8KSQ4iJ9tb9s",
    "https://fastly.picsum.photos/id/109/4287/2392.jpg?hmac=K5ytllhfakgsUEDFnY5ujHIGJTzELPQgVJjZMpRlfJY",
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
      <p className="text-3xl font-bold p-4">
   Image Gallery
  </p>
      <img
        src={images[index]}
        alt={`Gallery ${index + 1}`}
        className="w-400 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-100 object-cover rounded shadow"
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
