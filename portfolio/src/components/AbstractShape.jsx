// src/components/AbstractShape.jsx
import { motion } from 'framer-motion';

export const AbstractShape = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative shape-spin">
        <svg
          viewBox="0 0 500 500"
          className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F8CFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#4F8CFF" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4F8CFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#4F8CFF" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <circle
            cx="250"
            cy="250"
            r="200"
            fill="none"
            stroke="url(#grad2)"
            strokeWidth="2"
          />

          <rect
            x="100"
            y="100"
            width="150"
            height="150"
            rx="20"
            fill="url(#grad1)"
          />

          <circle cx="350" cy="350" r="80" fill="url(#grad2)" />

          <polygon
            points="250,150 350,300 150,300"
            fill="none"
            stroke="#4F8CFF"
            strokeWidth="3"
          />

          {[...Array(8)].map((_, i) => (
            <circle
              key={i}
              cx={250 + 180 * Math.cos((i * 45 * Math.PI) / 180)}
              cy={250 + 180 * Math.sin((i * 45 * Math.PI) / 180)}
              r="4"
              fill="#4F8CFF"
              opacity="0.55"
            />
          ))}

          <text
            x="250"
            y="260"
            textAnchor="middle"
            className="font-mono text-2xl"
            fill="#4F8CFF"
          >
            {'</>'}
          </text>
        </svg>
      </div>

      {/* Soft glow — CSS only, no JS animation loop */}
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-accent/10 blur-3xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
};
