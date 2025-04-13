import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Gsap03 = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    // Timeline : 애니메이션을 순차적으로 제어할 때 사용
    const element = boxRef.current;
    if(!element) return;

    const tl = gsap.timeline({
      scrollTrigger : {
        trigger : element,
        start : "top 80%",
        end : "top 30%",
        scrub:true,
        markers:true,
      }
    })
    .to(element, {x:100, duration:1})
    .to(element, {rotation:360, duration:1})
    .to(element, {scale:1.5, duration:1})

    return () =>{
      tl.kill(); // 애니메이션 정리
      gsap.killTweensOf(element); // 요소 변수 정리
      ScrollTrigger.getAll().forEach((trigger)=>trigger.kill());
    }
  },[])

  return (
    <section className="h-[200vh] flex justify-center items-center">
      <div ref={boxRef} className="size-20 bg-red-600">BOX</div>
    </section>
  );
};

export default Gsap03;
