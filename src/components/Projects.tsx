import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-app', label: 'Web Applications' },
    { id: 'dashboard', label: 'Dashboard Systems' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'uiux', label: 'UI/UX Designs' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Restaurant Management System',
      category: 'dashboard',
      role: 'Full Stack Developer',
      description: 'A comprehensive restaurant management platform with order tracking, inventory management, and staff scheduling.',
      features: [
        'Real-time order tracking',
        'Inventory management',
        'Staff scheduling system',
        'Analytics dashboard',
        'Customer feedback system',
      ],
      tools: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management System',
      category: 'dashboard',
      role: 'Frontend Developer',
      description: 'Modern task management application with drag-and-drop functionality, team collaboration, and progress tracking.',
      features: [
        'Drag-and-drop task boards',
        'Team collaboration tools',
        'Progress tracking',
        'Calendar integration',
        'Real-time notifications',
      ],
      tools: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'React DnD'],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Expense Tracker',
      category: 'web-app',
      role: 'Frontend Developer & Designer',
      description: 'Personal finance management app with expense categorization, budget planning, and financial insights.',
      features: [
        'Expense categorization',
        'Budget planning tools',
        'Visual analytics',
        'Receipt scanning',
        'Monthly reports',
      ],
      tools: ['React', 'Chart.js', 'Tailwind CSS', 'LocalStorage API'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Kids Learning App',
      category: 'web-app',
      role: 'UI/UX Designer & Developer',
      description: 'Educational platform for children with interactive games, quizzes, and progress tracking for parents.',
      features: [
        'Interactive learning games',
        'Progress tracking',
        'Parental dashboard',
        'Gamification elements',
        'Age-appropriate content',
      ],
      tools: ['React', 'Figma', 'Tailwind CSS', 'Motion'],
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Laptop & Electronics Store',
      category: 'ecommerce',
      role: 'Frontend Developer',
      description: 'Full-featured e-commerce platform for electronics with product filtering, cart, and checkout.',
      features: [
        'Product catalog with filters',
        'Shopping cart',
        'Secure checkout',
        'Product comparison',
        'Customer reviews',
      ],
      tools: ['React', 'Redux', 'Stripe API', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Furniture Website',
      category: 'ecommerce',
      role: 'UI/UX Designer & Developer',
      description: 'Elegant furniture e-commerce site with 3D product views and interior design inspiration.',
      features: [
        '3D product visualization',
        'Room planner tool',
        'Style inspiration gallery',
        'Custom order system',
        'Wishlist functionality',
      ],
      tools: ['React', 'Three.js', 'Tailwind CSS', 'Figma'],
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 7,
      title: 'Real Estate Website',
      category: 'web-app',
      role: 'Full Stack Developer',
      description: 'Property listing platform with advanced search, virtual tours, and agent management.',
      features: [
        'Advanced property search',
        'Virtual tour integration',
        'Agent profiles',
        'Mortgage calculator',
        'Favorite properties',
      ],
      tools: ['React', 'Next.js', 'MongoDB', 'Tailwind CSS', 'Mapbox'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 8,
      title: 'CamVoyage Tourism Website',
      category: 'web-app',
      role: 'UI/UX Designer & Developer',
      description: 'Tourism platform showcasing Cameroon destinations with booking system and travel guides.',
      features: [
        'Destination showcase',
        'Booking system',
        'Travel guides',
        'Interactive maps',
        'Customer testimonials',
      ],
      tools: ['React', 'Figma', 'Tailwind CSS', 'Google Maps API'],
      image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 9,
      title: 'Event Planner Website',
      category: 'web-app',
      role: 'Frontend Developer',
      description: 'Event planning platform with vendor management, guest lists, and budget tracking.',
      features: [
        'Event creation tools',
        'Vendor directory',
        'Guest list management',
        'Budget tracking',
        'Timeline builder',
      ],
      tools: ['React', 'TypeScript', 'Tailwind CSS', 'Calendar APIs'],
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 10,
      title: 'Time Management System',
      category: 'dashboard',
      role: 'Frontend Developer',
      description: 'A focused time management application with timers, pomodoro support, and tracking of productive sessions.',
      features: [
        'Pomodoro timers',
        'Session logging',
        'Customizable intervals',
        'Task-focused timers',
        'Session statistics',
      ],
      tools: ['React', 'TypeScript', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1526378721981-3b5a5b1f0f4a?w=800',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 11,
      title: 'Habit Tracker (Habit Forge)',
      category: 'dashboard',
      role: 'Frontend Developer',
      description: 'Habit management system with reminders, streak tracking, and progress insights.',
      features: [
        'Create & track habits',
        'Reminders & notifications',
        'Streaks and progress charts',
        'Daily/weekly goals',
        'History and export',
      ],
      tools: ['React', 'TypeScript', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1529676468690-9b1f4d9f9f3a?w=800',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  // Map demo links explicitly by project id to avoid index misalignment.
  // Updated per user's mapping; ambiguous / not-yet-available links are set to '#'.
  const demoLinkMap: Record<number, string> = {
    // 1: Restaurant Management System
    1: 'https://food-fusion-gray.vercel.app/',
    // 2: Task Management System (Planova)
    2: 'https://planova-eta.vercel.app/',
    // 3: Expense Tracker (mapped to habit tracker provided)
    3: 'https://habit-forge-j42n.vercel.app/',
    // 4: Kids Learning App - no link provided / unclear (left as '#')
    4: '#',
    // 5: Laptop & Electronics Store - not available yet
    5: '#',
    // 6: Furniture Website
    6: 'https://furnisure-green.vercel.app/',
    // 7: Real Estate Website (user-provided URL; please confirm)
    7: 'https://fashio-naire-m7edrt7jw-bulawa-joy-afumboms-projects.vercel.app/',
    // 8: CamVoyage Tourism Website
    8: 'https://cam-voyage-z35d-b2t4uwnur-bulawa-joy-afumboms-projects.vercel.app/',
    // 9: Event Planner Website
    9: 'https://eventify-gray-five.vercel.app/',
    // 10: Time Management System (Taskly)
    10: 'https://taskly-phi-one.vercel.app/',
    // 11: Habit Tracker (Habit Forge)
    11: 'https://habit-forge-j42n.vercel.app/',
  };

  const projectsWithLinks = projects.map((project) => ({
    ...project,
    liveUrl: demoLinkMap[project.id] || '#',
  }));

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsWithLinks
      : projectsWithLinks.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work spanning web applications, dashboards, and e-commerce solutions
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              className={
                selectedCategory === category.id
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : ''
              }
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-video">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                      <Button
                        size="sm"
                        className="bg-white text-gray-900 hover:bg-gray-100"
                        onClick={() => setSelectedProject(project)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Details
                      </Button>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-3">
                      <Badge variant="secondary" className="mb-2">
                        {project.role}
                      </Badge>
                    </div>

                    <h3 className="text-gray-900 dark:text-white mb-2">{project.title}</h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.slice(0, 3).map((tool, toolIndex) => (
                        <Badge
                          key={toolIndex}
                          variant="outline"
                          className="text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400"
                        >
                          {tool}
                        </Badge>
                      ))}
                      {project.tools.length > 3 && (
                        <Badge variant="outline">+{project.tools.length - 3}</Badge>
                      )}
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <Button 
                        size="sm" 
                        className="flex-1 gap-2" 
                        variant="outline"
                        onClick={() => {
                          if (project.liveUrl && project.liveUrl !== '#') {
                            window.open(project.liveUrl, '_blank');
                          }
                        }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button size="sm" className="flex-1 gap-2" variant="outline">
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedProject.title}</DialogTitle>
                  <DialogDescription>
                    {selectedProject.role} - View detailed information about this project
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-lg aspect-video">
                    <ImageWithFallback
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <Badge variant="secondary" className="mb-4">
                      {selectedProject.role}
                    </Badge>
                    <p className="text-gray-600 dark:text-gray-400">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-gray-900 dark:text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature: string, index: number) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-blue-600 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool: string, index: number) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 gap-2"
                      onClick={() => {
                        if (selectedProject.liveUrl && selectedProject.liveUrl !== '#') {
                          window.open(selectedProject.liveUrl, '_blank');
                        }
                      }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Live Demo
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2">
                      <Github className="h-4 w-4" />
                      View Code
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}