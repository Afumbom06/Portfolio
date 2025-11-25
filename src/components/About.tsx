import { motion } from 'motion/react';
import { Download, CheckCircle2, Code2, Palette, Users, Brain } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import professionalImage from '../assets/joy.jpg';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
    },
    {
      icon: Palette,
      title: 'Design First',
      description: 'User-centered design approach in every project',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Team player with excellent communication skills',
    },
    {
      icon: Brain,
      title: 'Problem Solver',
      description: 'Analytical thinking and attention to detail',
    },
  ];

  const keyPoints = [
    'BSc Software Engineering - CoT, University of Buea',
    'Specialized in Frontend Development & UI/UX Design',
    '2+ years of hands-on experience',
    'Strong foundation in modern web technologies',
    'Passionate about creating accessible interfaces',
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 dark:border-slate-800">
              <ImageWithFallback
                src={professionalImage}
                alt="Bulawa Joy Afumbom - Professional"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-gray-900 dark:text-white mb-6">
              Crafting Digital Experiences That Matter
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate Frontend Developer and UI/UX Designer with a Bachelor's degree in 
              Software Engineering from the College of Technology, University of Buea. My journey 
              in tech is driven by a love for creating beautiful, functional digital experiences 
              that truly serve users.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              My approach combines technical excellence with design thinking. I believe in the 
              power of clean code, intuitive interfaces, and seamless user experiences. From 
              wireframing and prototyping in Figma to bringing designs to life with React and 
              modern web technologies, I handle the complete development lifecycle.
            </p>

            <div className="space-y-3 mb-8">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 gap-2"
              onClick={() => {
                alert('CV download would start here');
              }}
            >
              <Download className="h-4 w-4" />
              Download My CV
            </Button>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950 rounded-lg flex items-center justify-center mb-4 border border-blue-100 dark:border-blue-900">
                  <highlight.icon className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                </div>
                <h4 className="text-gray-900 dark:text-white mb-2">{highlight.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}