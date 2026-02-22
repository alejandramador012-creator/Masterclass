/**
 * Application routes configuration
 */
export const ROUTE_PATHS = {
  HOME: '/',
} as const;

/**
 * External registration link for the Masterclass
 * All CTA buttons must point to this URL
 */
export const REGISTRATION_URL = "https://nicolas-moreno.com/masterclass-codigo-del-futuro/";

/**
 * Speaker definition for the Hosts section
 */
export interface Speaker {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

/**
 * Shared animation presets for Framer Motion
 * Optimized for a premium Web 3.0 feel
 */
export const springPresets = {
  snappy: { type: "spring", stiffness: 400, damping: 30 },
  gentle: { type: "spring", stiffness: 300, damping: 35 },
  bouncy: { type: "spring", stiffness: 500, damping: 25 },
  smooth: { type: "spring", stiffness: 200, damping: 40 },
} as const;

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * Utility to open the registration link in a new tab
 */
export const handleRegister = () => {
  window.open(REGISTRATION_URL, "_blank", "noopener,noreferrer");
};
