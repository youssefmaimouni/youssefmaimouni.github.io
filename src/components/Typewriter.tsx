import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  showCaret?: boolean;
}

const Typewriter = ({ text, speed = 35, startDelay = 0, className = "", showCaret = true }: TypewriterProps) => {
  const [out, setOut] = useState("");

  useEffect(() => {
    setOut("");
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const start = setTimeout(function tick() {
      if (i <= text.length) {
        setOut(text.slice(0, i));
        i++;
        timer = setTimeout(tick, speed);
      }
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearTimeout(timer!);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={`${className} ${showCaret ? "typewriter-caret" : ""}`}>{out}</span>
  );
};

export default Typewriter;
