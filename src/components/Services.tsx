import { motion } from 'motion/react';
import { Code2, Palette, Zap, Smartphone, Globe, Sparkles, Check } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description:
        'Building responsive, performant, and accessible web applications using modern technologies.',
      features: [
        'Responsive website development',
        'Modern UI development with React',
        'Single Page Applications (SPA)',
        'Performance optimization',
        'Cross-browser compatibility',
        'Code review and refactoring',
      ],
      color: 'blue',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'Creating intuitive and visually appealing user interfaces that enhance user experience.',
      features: [
        'Figma designs and prototypes',
        'Wireframing and user flows',
        'Mobile & web design systems',
        'Interactive prototypes',
        'Design handoff to developers',
        'Usability testing',
      ],
      color: 'purple',
    },
    {
      icon: Zap,
      title: 'Website Redesign',
      description:
        'Modernizing existing websites with improved UI/UX and performance enhancements.',
      features: [
        'UX audit and analysis',
        'Modern design makeover',
        'Speed and performance optimization',
        'Mobile responsiveness',
        'Accessibility improvements',
        'SEO optimization',
      ],
      color: 'orange',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description:
        'Ensuring seamless experiences across all devices and screen sizes.',
      features: [
        'Mobile-first approach',
        'Tablet and desktop optimization',
        'Touch-friendly interfaces',
        'Progressive Web Apps (PWA)',
        'Adaptive layouts',
        'Device testing',
      ],
      color: 'green',
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description:
        'Developing full-featured web applications with complex functionality.',
      features: [
        'Dashboard and admin panels',
        'E-commerce platforms',
        'Content management systems',
        'Real-time applications',
        'API integration',
        'Database design',
      ],
      color: 'blue',
    },
    {
      icon: Sparkles,
      title: 'Branding & Identity',
      description:
        'Creating cohesive brand identities with logo design and style guides.',
      features: [
        'Logo design',
        'Brand style guides',
        'Color palette development',
        'Typography systems',
        'Icon design',
        'Marketing materials',
      ],
      color: 'pink',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; hover: string }> = {
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-600 dark:text-blue-400',
        hover: 'hover:shadow-blue-200 dark:hover:shadow-blue-900/50',
      },
      purple: {
        bg: 'bg-purple-100 dark:bg-purple-900/30',
        text: 'text-purple-600 dark:text-purple-400',
        hover: 'hover:shadow-purple-200 dark:hover:shadow-purple-900/50',
      },
      orange: {
        bg: 'bg-orange-100 dark:bg-orange-900/30',
        text: 'text-orange-600 dark:text-orange-400',
        hover: 'hover:shadow-orange-200 dark:hover:shadow-orange-900/50',
      },
      green: {
        bg: 'bg-green-100 dark:bg-green-900/30',
        text: 'text-green-600 dark:text-green-400',
        hover: 'hover:shadow-green-200 dark:hover:shadow-green-900/50',
      },
      pink: {
        bg: 'bg-pink-100 dark:bg-pink-900/30',
        text: 'text-pink-600 dark:text-pink-400',
        hover: 'hover:shadow-pink-200 dark:hover:shadow-pink-900/50',
      },
    };
    return colors[color] || colors.blue;
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">Services I Offer</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive web development and design services tailored to bring your vision to life
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`p-8 h-full border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300 ${colors.hover}`}
                >
                  <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className={`h-8 w-8 ${colors.text}`} />
                  </div>

                  <h3 className="text-gray-900 dark:text-white mb-3">{service.title}</h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                      >
                        <Check className={`h-4 w-4 ${colors.text} mt-1 flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Ready to start your project? Let's work together!
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={scrollToContact}
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}