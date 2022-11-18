import React, { useState } from "react";

const ImageSearch = ({ searchTerm }) => {
  const [text, setText] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    searchTerm(text)
  }
  return (
    <form className="w-2/3 max-w-sm my-10" onSubmit={handleSubmit}>
      {/* from tailwind blocks */}
      <div className="flex items-center gap-4 ">
        <input
          type="text"
          id="search"
          name="search"
          className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-purple-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={text => setText(text.target.value)}
        ></input>
        <button
          className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ImageSearch;
