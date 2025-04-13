import React from "react";

const Lenis01 = () => {
  return (
    <>
      <div className="fixed top-0 left-0 flex gap-4">
        <button className="bg-slate-100 rounded-lg p-4 opacity-90">STOP</button>
        <button className="bg-slate-100 rounded-lg p-4 opacity-90">
          ACTIVE
        </button>
      </div>
      <div className="h-[300vh] ">
        <div className="w-full h-screen bg-yellow-500 flex justify-center items-center">
          부드러운 스크롤 제공하는 라이브러리
        </div>
        <div className="w-full h-screen bg-blue-500 flex justify-center items-center">
          <div className="target-element bg-red-500 size-28"></div>
        </div>
        <div className="w-full h-screen bg-green-500 flex justify-center items-center">
          부드러운 스크롤 제공하는 라이브러리
        </div>
      </div>
    </>
  );
};

export default Lenis01;
