import { useEffect, useState } from "react";

export default function handleScroll(id: string) {
  const [imgScale, setImgScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const img = document.getElementById(id);
      if (!img) return;
      const rect = img.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const inView = Math.max(
        0,
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
      );
      const percentVisible = inView / rect.height;
      if (percentVisible > 1) {
        setImgScale(1);
      } else {
        setImgScale(1 + 0.15 * percentVisible);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  return imgScale;
}
