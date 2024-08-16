"use client";

import React from "react";

interface mtype {
    skill:string
    percentage:number
}

const SkillBar = ({ skill, percentage }:mtype) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700">{skill}</span>
        <span className="text-sm font-medium text-gray-700">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;