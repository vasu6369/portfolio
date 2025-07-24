import { useEffect } from 'react';

export default function AnimatedBackground() {
  useEffect(() => {
    const blobs = document.querySelectorAll('.floating-blob');

    blobs.forEach((blob) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = 30+Math.random() * 200; 
      const duration = 12000 + Math.random() * 10000;
      const direction = Math.random() > 0.5 ? 'normal' : 'reverse';

      blob.style.width = `${size}px`;
      blob.style.height = `${size}px`;
      blob.style.top = `${y}%`;
      blob.style.left = `${x}%`;
      blob.style.backgroundColor = getRandomColor();
      blob.style.animationDuration = `${duration}ms`;
      blob.style.animationDelay = `${Math.random() * 3000}ms`;
      blob.style.animationDirection = direction;
      blob.style.boxShadow = `0 0 60px 5px ${blob.style.backgroundColor}`;
    });
  }, []);

  return (
    <>
      <div className="glow-background-3d"></div>
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="relative w-full h-full">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="floating-blob absolute rounded-full blur-[1px] opacity-20 animate-floating"
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes floatRandom {
          0% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-20px, 80px) scale(1.1) rotate(5deg);
          }
          50% {
            transform: translate(500px, -15px) scale(0.9) rotate(-5deg);
          }
          75% {
            transform: translate(-10px, 800px) scale(1.05) rotate(3deg);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        .animate-floating {
          animation-name: floatRandom;
          animation-timing-function:1000ms ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </>
  );
}

function getRandomColor() {
  const colors = ['#ff4fd8', '#b44bff', '#4faaff', '#4dffb4', '#ffa34d', '#00ffc8'];
  return colors[Math.floor(Math.random() * colors.length)];
}
