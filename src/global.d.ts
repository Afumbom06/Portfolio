declare module '*.avif';
declare module '*.bmp';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.webp';
declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  const src: string;
  export default src;
}

declare module 'motion/react' {
  // Provide a minimal fallback type definition for `motion/react`.
  import * as React from 'react';
  export const motion: any;
  export const AnimatePresence: any;
  export const layoutAnimation: any;
  export default motion;
}
