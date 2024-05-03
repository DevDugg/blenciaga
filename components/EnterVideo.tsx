"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";

const EnterVideo = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);

  useEffect(() => {
    setHasPlayedOnce(sessionStorage.getItem("hasPlayedOnce") === "true");
  }, []);

  useEffect(() => {
    if (!isClicked || hasPlayedOnce) return;

    const desktopVideo = document.querySelector(".desktop-only") as HTMLVideoElement;
    const mobileVideo = document.querySelector(".mobile-only") as HTMLVideoElement;
    desktopVideo?.play();
    mobileVideo?.play();
  }, [isClicked]);

  const handleVideoEnd = () => {
    sessionStorage.setItem("hasPlayedOnce", "true");
    setHasPlayedOnce(true);
    setHasEnded(true);
  };

  return (
    <>
      <motion.div
        className="bg-BLACK w-full h-full flex items-center justify-center fixed top-0 left-0 z-40 pointer-events-none"
        animate={{ opacity: 0 }}
        transition={{ delay: 1.5 }}
      >
        <Image
          src={"https://store.baggashe.com/cdn/shop/t/2/assets/small.png?v=116558805354479720301714696411"}
          alt="Logo"
          width={230}
          height={125}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-full h-full"
        initial={{ opacity: 1 }}
        animate={hasEnded || hasPlayedOnce ? { opacity: 0 } : {}}
        style={{ pointerEvents: hasEnded || hasPlayedOnce ? "none" : "auto" }}
      >
        <video
          muted
          playsInline
          className="desktop-only object-cover w-full h-full max-md:hidden z-50"
          onEnded={handleVideoEnd}
          onClick={() => setIsClicked(true)}
          style={{
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <source src="https://cdn.shopify.com/videos/c/o/v/a14136cb97c94022a02e963718bbea5f.mp4" type="video/mp4" />
        </video>
        <video
          className="mobile-only hidden object-cover w-full h-full max-md:inline z-50"
          id="animation-mobile"
          muted
          playsInline
          onEnded={handleVideoEnd}
          onTouchEnd={() => setIsClicked(true)}
        >
          <source src="https://cdn.shopify.com/videos/c/o/v/058432f7ce704c0c974fabef468694ac.mp4#t=0.2" />
        </video>
      </motion.div>
    </>
  );
};
export default EnterVideo;
