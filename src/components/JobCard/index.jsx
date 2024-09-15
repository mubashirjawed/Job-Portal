import React from "react";
import dayjs from "dayjs";

function JobCard() {
  const skills = ["Javascript", "React", "Nodejs"];
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff("2024-28-1", "day");
  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-600 hover:translate-y-1 hover:scale-103">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-lg font-semibold">Frontend developer - Amazon</h1>{" "}
          <p>Full Time &#x2022; Fresher &#x2022; In-Office</p>
          <div className="flex items-center gap-2">
            {skills.map((skill) => (
              <p className="text-gray-500 py-1 px-2 rounded-md border border-black">
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p>Posted {diffInDays} ago</p>
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
}
export default JobCard;
