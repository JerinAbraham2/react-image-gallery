import React, { useState } from "react";

const Cards = (props) => {
  const [tags, setTags] = useState(props.pic.tags.split(", "));

  console.table(props);
  return (
    <div className="max-w-sm rounded  shadow-lg flex flex-col justify-between">
      <img src={props.pic.webformatURL} alt="" className="w-full h-56" />
      <div className="px-6 py-2">
        <div className="font-bold text-purple-500 text-xl my-2">Photo by {props.pic.user}</div>
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
            <strong strong>Likes: </strong>
            {props.pic.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 ">
        <span className="inline-block bg-gray-200 px-3 py-1 text-sm rounded-md font-semibold text-gray-700 mr-2 mt-2">
          #{tags[0]}
        </span>
        <span className="inline-block bg-gray-200 px-3 py-1 rounded-md text-sm font-semibold text-gray-700 mr-2 mt-2">
          #{tags[1]}
        </span>
        <span className="inline-block bg-gray-200 px-3 rounded-md py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">
          #{tags[2]}
        </span>
      </div>
      <a
        href={props.pic.webformatURL}
        target="_blank"
        class="inline-flex items-center justify-center w-1/4 h-12 px-6 font-medium m-5 tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-purple-700 hover:bg-orange-500"
        aria-label="Sign up"
        title="Sign up"
      >
        View
      </a>
    </div>
  );
};

export default Cards;
