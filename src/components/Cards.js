import React, { useState } from "react";

const Cards = (props) => {
  const [tags, setTags] = useState(props.pic.tags.split(", "));

  
  console.table(props.pic);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={props.pic.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">Photo by {props.pic.user}</div>
        <ul>
          <li>
            <strong>Views: </strong>
            {props.pic.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {props.pic.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {props.pic.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 px-3 py-1 text-sm rounded-md font-semibold textgray-700 mr-2">
          #{tags[0]}
        </span>
        <span className="inline-block bg-gray-200 px-3 py-1 rounded-md text-sm font-semibold textgray-700 mr-2">
          #{tags[1]}
        </span>
        <span className="inline-block bg-gray-200 px-3 rounded-md py-1 text-sm font-semibold textgray-700 mr-2">
          #{tags[2]}
        </span>
      </div>
    </div>
  );
};

export default Cards;
