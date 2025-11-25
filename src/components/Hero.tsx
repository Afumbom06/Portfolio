import { motion } from 'motion/react';
import { Download, Mail, ArrowRight, Github, Linkedin, Dribbble, Code, Palette, Zap, Star } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AuroraBackground } from './AuroraBackground';
import professionalImage from '../assets/joy.png';
import { useState, useEffect } from 'react';

export function Hero() {
  const [displayedRole, setDisplayedRole] = useState('');
  const roles = ['Frontend Developer', 'UI/UX Designer', 'React Specialist', 'Design Systems Expert'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setDisplayedRole(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedRole(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  const floatingIcons = [
    { Icon: Code, delay: 0, x: -20, y: -30, duration: 6 },
    { Icon: Palette, delay: 1, x: 20, y: -20, duration: 7 },
    { Icon: Zap, delay: 2, x: -15, y: 25, duration: 5 },
    { Icon: Star, delay: 1.5, x: 30, y: 15, duration: 8 },
  ];

  return (
    <AuroraBackground className="min-h-screen flex items-center justify-center">
      <section
        id="home"
        className="relative w-full"
      >
        {/* Floating decorative elements */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute hidden lg:block opacity-10 dark:opacity-5"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.2, 1],
              x: [item.x, item.x + 20, item.x],
              y: [item.y, item.y - 20, item.y],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: item.delay,
            }}
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + index * 10}%`,
            }}
          >
            <item.Icon className="h-16 w-16 text-blue-600" />
          </motion.div>
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-900 rounded-full mb-6 cursor-default"
              >
                <motion.div 
                  className="w-2 h-2 bg-blue-600 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity 
                  }}
                />
                <span className="text-blue-700 dark:text-blue-400 font-medium">
                  Available for opportunities
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-gray-900 dark:text-white mb-4">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Hi, I'm{' '}
                  </motion.span>
                  <motion.span 
                    className="text-blue-600 dark:text-blue-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: '0 0 20px rgba(37, 99, 235, 0.5)'
                    }}
                  >
                    Bulawa Joy Afumbom
                  </motion.span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-6"
              >
                <h2 className="text-gray-900 dark:text-white">
                  <span className="text-blue-600 dark:text-blue-500">{displayedRole}</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-0.5 h-8 bg-blue-600 dark:bg-blue-500 ml-1"
                  />
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl text-lg"
              >
                I build beautiful, functional, and user-centered digital experiences.
                Specializing in React, TypeScript, and modern UI/UX design principles.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    onClick={() => scrollToSection('projects')}
                    className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all"
                  >
                    View My Work
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
                    onClick={() => {
                      alert('CV download would start here');
                    }}
                  >
                    <motion.div
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Download className="h-4 w-4" />
                    </motion.div>
                    Download CV
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToSection('contact')}
                    className="gap-2 border-slate-300 dark:border-slate-700"
                  >
                    <Mail className="h-4 w-4" />
                    Contact Me
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex gap-4"
              >
                {[
                  { Icon: Github, href: 'https://github.com', delay: 0 },
                  { Icon: Linkedin, href: 'https://linkedin.com', delay: 0.1 },
                  { Icon: Dribbble, href: 'https://dribbble.com', delay: 0.2 },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + social.delay }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-600 dark:hover:border-blue-600 transition-all group"
                  >
                    <social.Icon className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors" />
                  </motion.a>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800"
              >
                {[
                  { number: '20+', label: 'Projects Completed' },
                  { number: '15+', label: 'Happy Clients' },
                  { number: '3+', label: 'Years Experience' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="text-center cursor-default"
                  >
                    <motion.div 
                      className="text-blue-600 dark:text-blue-500 mb-1"
                      animate={{ 
                        textShadow: [
                          '0 0 0px rgba(37, 99, 235, 0)',
                          '0 0 10px rgba(37, 99, 235, 0.3)',
                          '0 0 0px rgba(37, 99, 235, 0)',
                        ]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.3 
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Pulsing glow */}
                <motion.div
                  className="absolute -inset-4 bg-blue-600/20 dark:bg-blue-600/10 rounded-2xl blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Main image container */}
                <motion.div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={professionalImage}
                    alt="Bulawa Joy Afumbom"
                    className="w-full h-auto"
                  />
                </motion.div>
                
                {/* Animated decorative elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-2xl opacity-20 dark:opacity-10"
                  animate={{
                    rotate: [0, 90, 180, 270, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                  }}
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-800 rounded-2xl opacity-20 dark:opacity-10"
                  animate={{
                    rotate: [360, 270, 180, 90, 0],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  }}
                />

                {/* Floating badges */}
                <motion.div
                  className="absolute -left-4 top-1/4 bg-white dark:bg-slate-800 border-2 border-blue-600 rounded-full px-4 py-2 shadow-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">React Pro</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -right-4 bottom-1/4 bg-white dark:bg-slate-800 border-2 border-blue-600 rounded-full px-4 py-2 shadow-lg"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <div className="flex items-center gap-2">
                    <Palette className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">UI/UX</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5 },
            y: { duration: 2, repeat: Infinity } 
          }}
        >
          <div className="w-6 h-10 border-2 border-blue-600 dark:border-blue-500 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-blue-600 dark:bg-blue-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>
    </AuroraBackground>
  );
}