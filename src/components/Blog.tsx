import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogProps {
  onArticleClick: () => void;
}

export function Blog({ onArticleClick }: BlogProps) {
  const articles = [
    {
      id: 1,
      title: 'My Journey as a Frontend Developer from Buea',
      excerpt:
        'From student to professional developer - sharing my experiences, challenges, and lessons learned in the tech industry.',
      category: 'Career',
      date: 'November 15, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
      tags: ['Career', 'Personal Story', 'Development'],
    },
    {
      id: 2,
      title: 'Designing Better Interfaces with Figma',
      excerpt:
        'A comprehensive guide to creating user-centered designs in Figma, from wireframes to interactive prototypes.',
      category: 'UI/UX',
      date: 'November 10, 2024',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
      tags: ['Figma', 'UI/UX', 'Design'],
    },
    {
      id: 3,
      title: 'How I Built a Restaurant Management System',
      excerpt:
        'A detailed case study on developing a full-featured restaurant management platform with React and Node.js.',
      category: 'Frontend',
      date: 'November 5, 2024',
      readTime: '15 min read',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      tags: ['React', 'Case Study', 'Full Stack'],
    },
    {
      id: 4,
      title: 'Modern React Patterns and Best Practices',
      excerpt:
        'Exploring the latest React patterns, hooks, and best practices for building scalable applications in 2024.',
      category: 'Frontend',
      date: 'October 28, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
      tags: ['React', 'JavaScript', 'Best Practices'],
    },
    {
      id: 5,
      title: 'The Importance of Accessibility in Web Design',
      excerpt:
        'Why accessibility matters and how to implement inclusive design principles in your web projects.',
      category: 'UI/UX',
      date: 'October 20, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800',
      tags: ['Accessibility', 'UI/UX', 'Web Design'],
    },
    {
      id: 6,
      title: 'Building Responsive Layouts with Tailwind CSS',
      excerpt:
        'Tips and tricks for creating beautiful, responsive layouts using Tailwind CSS utility classes.',
      category: 'Frontend',
      date: 'October 15, 2024',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800',
      tags: ['Tailwind CSS', 'CSS', 'Responsive Design'],
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Career: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
      'UI/UX': 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
      Frontend: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
    };
    return colors[category] || colors.Frontend;
  };

  return (
    <section id="blog" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">Latest Articles</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development and design
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="overflow-hidden border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-2xl transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-video md:aspect-auto">
                <ImageWithFallback
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(articles[0].category)}>
                    Featured
                  </Badge>
                </div>
              </div>

              <div className="p-8 flex flex-col justify-center">
                <Badge className={`${getCategoryColor(articles[0].category)} w-fit mb-4`}>
                  {articles[0].category}
                </Badge>

                <h3 className="text-gray-900 dark:text-white mb-4">
                  {articles[0].title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {articles[0].excerpt}
                </p>

                <div className="flex items-center gap-4 mb-6 text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{articles[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{articles[0].readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {articles[0].tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button onClick={onArticleClick} className="w-fit bg-blue-600 hover:bg-blue-700 text-white gap-2">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 h-full flex flex-col">
                <div className="relative overflow-hidden aspect-video">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {article.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span className="text-xs">{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs">{article.readTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    onClick={onArticleClick}
                    variant="ghost"
                    className="w-fit p-0 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 gap-2"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="gap-2">
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}