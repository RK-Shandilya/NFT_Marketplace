import React from "react";
import { useNavigate } from "react-router-dom";

const SingleAnnouncement = ({ data}) => {
  const navigate = useNavigate()

  const truncatedDescription = () => {
    const words = data.description.split(" ");
    if (words.length > 10) {
      return words.slice(0, 20).join(" ") + "...";
    }
    return data.description;
  };

  return (
    <div className="flex flex-col sm:flex-row bg-white p-4 rounded-lg hover:shadow-lg transition">
      <img
        src={data.image}
        alt={data.title}
        className="w-full sm:w-32 h-40 sm:h-20 object-cover rounded-lg"
      />

      <div className="mt-4 sm:mt-0 sm:ml-4 flex-1">
        <h3 className="text-lg text-black font-semibold">{data.title}</h3>
        <p className="text-gray-500 text-sm">{data.date}</p>
        <p className="text-gray-700 text-sm mt-1 truncate">{truncatedDescription()}</p>

        {/* Tags and Button */}
        <div className="mt-3 flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
          <span className="bg-red-500  text-xs px-2 py-1 rounded w-fit my-auto">
            Announcement
          </span>
          <button className="px-4 py-1 bg-blue-500 font-light rounded-lg w-fit cursor-pointer"
          onClick={()=> navigate(`/announcement/${data.id-1}`)}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleAnnouncement;