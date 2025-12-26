import React, { useEffect, useState } from 'react';

type TypewriterProps = {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  showCaret?: boolean;
};

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 70,
  startDelay = 0,
  className = '',
  showCaret = true,
}) => {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    let index = 0;
    let intervalId: number | undefined;

    const startTimer = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1;
        setVisibleText(text.slice(0, index));

        if (index >= text.length && intervalId) {
          window.clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(startTimer);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{visibleText}</span>
      {showCaret && (
        <span
          className="ml-1 inline-block h-[1em] w-[2px] bg-white/70 animate-pulse"
          aria-hidden="true"
        />
      )}
    </span>
  );
};

export default Typewriter;
