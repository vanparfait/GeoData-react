import React from "react";

const ModalContent = ({ country, closeModal }) => {
  console.log(Object.entries(country.languages));

  return (
    <div
      onClick={closeModal}
      className="fixed z-10 top-0 left-0 w-full h-full bg-gray-800/95 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="min-w-[500px] relative rounded p-7 bg-gray-50"
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-1 w-8 h-8 flex justify-center items-center text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded"
        >
          X
        </button>
        <h1 className="text-2xl mb-4">
          here is {country.name.common}'s information
        </h1>
        <p className="text-lg mb-2">
          <span className="font-semibold">Language(s)</span> :
          {Object.entries(country.languages).join("  ")}
        </p>
      </div>
    </div>
  );
};

export default ModalContent;
