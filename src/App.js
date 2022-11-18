import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [pics, setPics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("background"); // <== cars will be whats shown on the homepage
  let pictures;
  if (isLoading) {
    pictures = <h1 className="text-6xl text-center mx-auto mt-32">Loading</h1>;
  } else {
    pictures = pics.map((pic, i) => {
      return <Cards pic={pic} key={i} />;
    });
  }
  useEffect(() => {
    const responseJSON = async () => {
      try {
        const res = await fetch(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API}&q=${searchTerm}&image_type=photo&pretty=true`
        );
        if (res.ok) {
          const resJson = await res.json();
          setPics(resJson.hits);
          setIsLoading(false);
          return resJson;
        }
        throw new Error(res.status);
      } catch (e) {
        console.log(e);
      }
    };
    responseJSON();
  }, [searchTerm]); // <== searchTerm so that everytime it changes, it re-renders the images

  return (
    <div className="bg-slate-200">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-6xl text-purple-500 my-5 font-bold font-verdana">
          Stock image searcher
        </h1>
        <ImageSearch searchTerm={(text) => setSearchTerm(text)} />
        <div className="grid grid-cols-4 gap-4">{pictures}</div>
      </div>
    </div>
  );
}

export default App;
