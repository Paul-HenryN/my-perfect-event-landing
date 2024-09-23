"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop({ fromTop = 800 }) {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > fromTop) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <Button
      variant="primary"
      size="icon"
      className="fixed bottom-10 right-10 z-50"
      onClick={() => {
        scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <ArrowUpIcon className="h-5 w-5" />
    </Button>
  );
}
