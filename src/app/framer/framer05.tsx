import React, { useRef } from "react";
import { motion, useInView } from 'framer-motion';

const Framer05 = () => {
  const ref = useRef(null);
  /*
    [ useInview ]
    특정 요소가 뷰포트에 보이는지 여부를 감지하는데 사용
    반환값 Boolean (true : 요소가 뷰에 있음, false : 요소가 뷰에 없음)
    요소가 뷰포트에 들어왔을 때 한번만 트리거되는 애니메이션에 적합
  */
 const inInview = useInView(ref, {
  once : false, // 한번만 실행여부
  amount : 0.5, // 요소가 뷰포트에 얼마만큼 들어와야 보이는 것으로 간주할지
 })
 console.log(inInview);

  return (
    <>
      <div className="h-[200vh]"></div>
      <div className="border border-red-500">
        <motion.div 
        ref={ref} 
        initial = {{opacity:0}}
        animate = {{opacity: inInview ? 1 : 0, x: inInview ? 0 : 200}}
        transition={{duration:1, ease:'easeInOut'}}
        className="bg-blue-500 size-40">BOX</motion.div>
      </div>
    </>
  );
};

export default Framer05;
