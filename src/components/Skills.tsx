import { motion } from 'motion/react';
import { Code2, Palette, Wrench, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      color: 'blue',
      skills: [
        { name: 'HTML & CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Bootstrap', level: 85 },
      ],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      color: 'purple',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe XD', level: 75 },
        { name: 'Prototyping', level: 85 },
        { name: 'Wireframing', level: 90 },
        { name: 'User Flows', level: 85 },
        { name: 'Design Systems', level: 80 },
        { name: 'Responsive Design', level: 95 },
      ],
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      color: 'green',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'npm/yarn', level: 85 },
        { name: 'Postman', level: 80 },
        { name: 'Chrome DevTools', level: 90 },
        { name: 'Webpack', level: 70 },
        { name: 'Vite', level: 85 },
      ],
    },
    {
      icon: TrendingUp,
      title: 'Additional Skills',
      color: 'orange',
      skills: [
        { name: 'Node.js (Basic)', level: 65 },
        { name: 'REST APIs', level: 80 },
        { name: 'MongoDB', level: 70 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Web Performance', level: 80 },
        { name: 'SEO Basics', level: 75 },
        { name: 'Accessibility', level: 85 },
      ],
    },
  ];

  const softSkills = [
    'Team Collaboration',
    'Problem Solving',
    'Communication',
    'Time Management',
    'Attention to Detail',
    'Adaptability',
    'Leadership',
    'Critical Thinking',
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; bar: string }> = {
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-600 dark:text-blue-400',
        bar: 'bg-blue-600',
      },
      purple: {
        bg: 'bg-purple-100 dark:bg-purple-900/30',
        text: 'text-purple-600 dark:text-purple-400',
        bar: 'bg-purple-600',
      },
      green: {
        bg: 'bg-green-100 dark:bg-green-900/30',
        text: 'text-green-600 dark:text-green-400',
        bar: 'bg-green-600',
      },
      orange: {
        bg: 'bg-orange-100 dark:bg-orange-900/30',
        text: 'text-orange-600 dark:text-orange-400',
        bar: 'bg-orange-600',
      },
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and professional competencies
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <Card className="p-8 h-full border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-lg ${colors.bg} border ${colors.text.replace('text-', 'border-')} flex items-center justify-center`}>
                      <category.icon className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <h3 className="text-gray-900 dark:text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className={`${colors.text}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className={`h-full ${colors.bar} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <h3 className="text-gray-900 dark:text-white mb-6 text-center">
              Professional Soft Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg text-center border border-blue-100 dark:border-blue-900 hover:shadow-lg transition-shadow cursor-default"
                >
                  <span className="text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}