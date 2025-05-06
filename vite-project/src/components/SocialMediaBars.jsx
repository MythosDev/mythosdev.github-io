import React from 'react';
import { FaHeart, FaBookmark, FaShareAlt, FaChevronDown } from 'react-icons/fa';

export const InteractionBar = () => {
  return (
    <div className="flex gap-4 items-center p-2 bg-slate-200 h-16 rounded-xl">
      <button className="flex items-center gap-1 text-red-500 hover:text-red-600">
        <FaHeart />
      </button>
      <button className="flex items-center gap-1 text-blue-500 hover:text-blue-600">
        <FaBookmark />
      </button>
      <button className="flex items-center gap-1 text-green-500 hover:text-green-600">
        <FaShareAlt />
      </button>
    </div>
  );
};

export const AccountBar = () => {
  return (
    <div className="flex items-center justify-between p-2 bg-slate-200 h-16 rounded-xl">
      <div className="flex items-center gap-3">
        <img
          src="/demo_pic2.png"
          alt="User profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-semibold">Username</span>
      </div>
      <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
        Follow
      </button>
    </div>
  );
};

export const CommentBar = () => {
  return (
    <div className="flex p-2 bg-slate-200 h-16 rounded-xl">
      <button className="flex items-center gap-1 text-gray-600 hover:text-black">
        <FaChevronDown /> Comments
      </button>
    </div>
  );
};
