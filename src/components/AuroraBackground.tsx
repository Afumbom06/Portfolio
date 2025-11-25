import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface AuroraBackgroundProps {
  children: ReactNode;
  className?: string;
}

export function AuroraBackground({ children, className = '' }: AuroraBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Aurora Effect Container */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />
        
        {/* Aurora blobs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-30 dark:opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.8) 0%, rgba(37, 99, 235, 0.4) 25%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-25 dark:opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.7) 0%, rgba(59, 130, 246, 0.3) 25%, transparent 70%)',
            filter: 'blur(70px)',
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        <motion.div
          className="absolute bottom-0 left-1/3 w-[700px] h-[700px] rounded-full opacity-20 dark:opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(29, 78, 216, 0.6) 0%, rgba(29, 78, 216, 0.3) 25%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-0 w-[550px] h-[550px] rounded-full opacity-25 dark:opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.7) 0%, rgba(96, 165, 250, 0.3) 25%, transparent 70%)',
            filter: 'blur(65px)',
          }}
          animate={{
            x: [0, 120, 0],
            y: [0, 40, 0],
            scale: [1.1, 1, 1.1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-0 w-[650px] h-[650px] rounded-full opacity-20 dark:opacity-12"
          style={{
            background: 'radial-gradient(circle, rgba(30, 64, 175, 0.6) 0%, rgba(30, 64, 175, 0.3) 25%, transparent 70%)',
            filter: 'blur(75px)',
          }}
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        />

        {/* Accent aurora streaks */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full opacity-30 dark:opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(147, 197, 253, 0.6) 0%, transparent 60%)',
            filter: 'blur(50px)',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -80, 0],
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Noise texture overlay for depth */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
