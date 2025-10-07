import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import "./ShadiLandExplanation.css";

const ShadiLandExplanation = () => {
  const sectionRef = useRef(null);
  const confettiPlayed = useRef(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current && !canvasRef.current) {
      const canvas = document.createElement("canvas");
      canvas.style.position = "absolute";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.pointerEvents = "none";
      sectionRef.current.style.position = "relative";
      sectionRef.current.appendChild(canvas);
      canvasRef.current = canvas;
    }

    const handleScroll = () => {
      if (!sectionRef.current || confettiPlayed.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top < windowHeight * 0.75 && rect.bottom > windowHeight * 0.25) {
        const myConfetti = confetti.create(canvasRef.current, {
          resize: true,
          useWorker: true,
        });

        let particleCount = 260;
        let originY = -0.8;
        let spread = 140;
        let gravity = 0.25;

        if (window.innerWidth < 450) {
          particleCount = 350;
          originY = -0.4;
          spread = 100;
          gravity = 0.5;

        } else if (window.innerWidth < 576) {
          particleCount = 350;
          originY = -0.4;
          spread = 110;
        } else if (window.innerWidth < 768) {
          particleCount = 350;
          originY = -0.6;
          spread = 160;
        } else if (window.innerWidth < 1200) {
          particleCount = 260;
          originY = -0.7;
          spread = 150;
        }

        myConfetti({
          particleCount,
          angle: 270,
          spread,
          origin: { y: originY, x: 0.5 },
          gravity,
          colors: ["#ff5e6c", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"],
        });

        confettiPlayed.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about-shadiland" ref={sectionRef}>
      <h2 className="about-shadiland__title">فروشگاه آنلاین شادی لند</h2>
      <p className="about-shadiland__text">
        شادی‌لند یک فروشگاه اینترنتی تخصصی در زمینه فروش لوازم تولد، تزئینات جشن
        و خدمات بادکنک‌آرایی است. که با هدف ساختن لحظاتی شاد و خاطره‌انگیز برای
        شما و عزیزانتان راه‌اندازی شده است. در شادی‌لند مجموعه‌ای کامل از انواع
        بادکنک‌ها، تم‌های تولد کودکانه، بادکنک‌های فویلی و هلیومی، و وسایل
        تزئینی برای مجالس متنوع گردآوری شده تا بتوانید در کمترین زمان بهترین
        انتخاب را داشته باشید. ما تلاش می‌کنیم تا با ارائه خدمات باکیفیت،
        محصولات متنوع و قیمت‌های مناسب، تجربه‌ای راحت، سریع و هیجان‌انگیز از
        برگزاری جشن‌ها برای شما فراهم کنیم.
      </p>
    </div>
  );
};

export default ShadiLandExplanation;
