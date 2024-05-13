import React from "react";

export const Card = ({
  title,
  img,
  description,
  author,
  url,
  comments,
}) => {

  return (
    <div className="inline-block w-1/4 p-4">
      <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden">
        <img
          className="w-full h-32 object-cover"
          src={img}
          alt={title}
        />
        <div className="p-4 h-64 overflow-y-auto"> {/* Establece una altura máxima y permite desplazamiento vertical */}
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="mt-2 text-gray-600">{description}</p>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-sm text-gray-500">{author}</p>
            <a
              href={url}
              className="text-sm font-semibold text-indigo-500 hover:text-indigo-600"
            >
              Read more
            </a>
          </div>
          <div className="mt-2">
            <h3 className="text-gray-700 font-semibold">Comments:</h3>
            <ul>
              {comments.map(comment => (
                <li key={comment._id || comment.comment}>
                  <p className="text-gray-600">{comment.comment}</p>
                  <p className="text-gray-500">Author: {comment.author}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};