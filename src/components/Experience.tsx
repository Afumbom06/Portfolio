import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award, Calendar } from 'lucide-react';
import { Card } from './ui/card';

export function Experience() {
  const education = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'College of Technology, University of Buea',
      location: 'Buea, Cameroon',
      period: '2019 - 2023',
      description:
        'Comprehensive software engineering program with focus on web development, software design patterns, and computer science fundamentals.',
      achievements: [
        'Dean\'s List - Multiple semesters',
        'Final Year Project: Restaurant Management System',
        'Active member of Tech Club',
      ],
    },
  ];

  const experience = [
    {
      title: 'Frontend Developer',
      company: 'CS Telecoms',
      period: 'October 2024 - Present',
      type: 'Full-time',
      description:
        'Building and maintaining web applications for telecommunications solutions, focusing on user experience and modern frontend technologies.',
      responsibilities: [
        'Developing responsive web applications using React and TypeScript',
        'Implementing modern UI/UX designs with Tailwind CSS',
        'Collaborating with cross-functional teams to deliver high-quality features',
        'Optimizing application performance and user experience',
        'Writing clean, maintainable, and well-documented code',
      ],
    },
    {
      title: 'UI/UX Designer',
      company: 'MedsInc AI Platform',
      period: '2022 - 2024',
      type: 'Full-time',
      description:
        'Led UI/UX design initiatives for an AI-powered medical platform, creating intuitive interfaces for healthcare professionals and patients.',
      responsibilities: [
        'Designed user interfaces for AI-driven medical diagnostic tools',
        'Created wireframes, prototypes, and high-fidelity designs in Figma',
        'Conducted user research and usability testing with healthcare professionals',
        'Developed comprehensive design systems and component libraries',
        'Collaborated with developers to ensure pixel-perfect implementation',
        'Improved user engagement by 40% through design optimization',
      ],
    },
    {
      title: 'Software Developer Intern',
      company: 'Mungwin Company',
      period: '2021 - 2022',
      type: 'Internship',
      description:
        'Gained hands-on experience in full-stack development, building enterprise software solutions.',
      responsibilities: [
        'Built web applications using modern JavaScript frameworks',
        'Developed RESTful APIs and integrated with frontend applications',
        'Participated in code reviews and Agile development processes',
        'Implemented responsive designs and ensured cross-browser compatibility',
        'Worked on database design and optimization',
      ],
    },
  ];

  const achievements = [
    {
      title: 'Best Final Year Project',
      organization: 'University of Buea',
      year: '2023',
      description: 'Awarded for Restaurant Management System project',
    },
    {
      title: 'Hackathon Winner',
      organization: 'Tech Innovation Challenge',
      year: '2022',
      description: 'First place in web development category',
    },
    {
      title: 'Student Leadership Award',
      organization: 'Tech Club',
      year: '2022',
      description: 'Recognition for organizing tech workshops',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">Experience & Education</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-gray-900 dark:text-white">Education</h3>
          </div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">{edu.location}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0">
                    <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-blue-600 dark:text-blue-400">{edu.period}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">{edu.description}</p>

                <div className="space-y-2">
                  {edu.achievements.map((achievement, achIndex) => (
                    <div
                      key={achIndex}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                    >
                      <span className="text-blue-600 mt-1">•</span>
                      {achievement}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-gray-900 dark:text-white">Work Experience</h3>
          </div>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-600 to-blue-600" />
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-gray-900 dark:text-white mb-2">{exp.title}</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-1">{exp.company}</p>
                      <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                      <Calendar className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      <span className="text-purple-600 dark:text-purple-400">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <div
                        key={respIndex}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-purple-600 mt-1">•</span>
                        {resp}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
              <Award className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-gray-900 dark:text-white">Achievements & Awards</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 h-full hover:shadow-lg transition-shadow">
                  <Award className="h-8 w-8 text-orange-600 dark:text-orange-400 mb-4" />
                  <h4 className="text-gray-900 dark:text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {achievement.organization}
                  </p>
                  <p className="text-orange-600 dark:text-orange-400 mb-3">
                    {achievement.year}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}