import { motion } from 'motion/react';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, Tag, User } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ArticlePageProps {
  onBack: () => void;
}

export function ArticlePage({ onBack }: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Badge className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 mb-4">
              Career
            </Badge>

            <h1 className="text-gray-900 dark:text-white mb-6">
              My Journey as a Frontend Developer from Buea
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>Bulawa Joy Afumbom</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>November 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>8 min read</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button size="sm" variant="outline" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button size="sm" variant="outline" className="gap-2">
                <Bookmark className="h-4 w-4" />
                Save
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8"
      >
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200"
            alt="My Journey as a Frontend Developer"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <div className="text-gray-700 dark:text-gray-300 space-y-6">
            <p className="text-xl text-gray-600 dark:text-gray-400 italic border-l-4 border-blue-600 pl-6 py-2">
              Every developer's journey is unique, shaped by their experiences, challenges, and the communities they're part of. This is the story of how I went from a curious student in Buea to a professional frontend developer working with cutting-edge technologies.
            </p>

            <h2 className="text-gray-900 dark:text-white mt-12 mb-4">The Beginning: University Days</h2>
            <p>
              My journey into software engineering began at the College of Technology, University of Buea in 2019. Like many students, I was fascinated by how websites and applications worked, but I had no idea where to start. The curriculum provided a solid foundation in computer science fundamentals, but I quickly realized that the real learning would happen outside the classroom.
            </p>

            <p>
              I spent countless hours on YouTube, following tutorials, breaking code, and fixing it again. Those late nights in the computer lab, debugging my first JavaScript functions, taught me more than just syntax—they taught me persistence and problem-solving.
            </p>

            <h2 className="text-gray-900 dark:text-white mt-12 mb-4">First Steps: The Internship at Mungwin Company</h2>
            <p>
              In 2021, I secured my first internship at Mungwin Company. This was a turning point. Working on real projects with experienced developers exposed me to industry standards, code reviews, and collaborative development. I learned about version control with Git, agile methodologies, and the importance of writing clean, maintainable code.
            </p>

            <p>
              The internship wasn't just about technical skills. It taught me how to communicate with team members, understand client requirements, and manage my time effectively. These soft skills have been invaluable throughout my career.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 my-8">
              <h3 className="text-gray-900 dark:text-white mt-0 mb-3">Key Takeaway</h3>
              <p className="mb-0 text-gray-700 dark:text-gray-300">
                "Your first job or internship is less about what you know and more about what you can learn. Be curious, ask questions, and embrace every challenge as a learning opportunity."
              </p>
            </div>

            <h2 className="text-gray-900 dark:text-white mt-12 mb-4">Discovering UI/UX: MedsInc AI Platform</h2>
            <p>
              After completing my internship, I joined MedsInc AI Platform as a UI/UX Designer in 2022. This role transformed my perspective on web development. I discovered that beautiful code is useless if users can't understand how to use it. I learned to think from the user's perspective, conduct user research, and create interfaces that were not just functional but delightful to use.
            </p>

            <p>
              Working on an AI-powered medical platform came with unique challenges. I had to design interfaces that could present complex medical data in an intuitive way for healthcare professionals. I learned Figma inside out, mastered prototyping, and built comprehensive design systems.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <h4 className="text-gray-900 dark:text-white mt-0 mb-2">Skills Developed</h4>
                <ul className="space-y-2 mb-0">
                  <li>User Research & Testing</li>
                  <li>Wireframing & Prototyping</li>
                  <li>Design Systems</li>
                  <li>Figma Mastery</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <h4 className="text-gray-900 dark:text-white mt-0 mb-2">Impact</h4>
                <ul className="space-y-2 mb-0">
                  <li>40% increase in user engagement</li>
                  <li>Reduced support tickets by 30%</li>
                  <li>Improved task completion rate</li>
                  <li>Positive user feedback</li>
                </ul>
              </div>
            </div>

            <h2 className="text-gray-900 dark:text-white mt-12 mb-4">Current Role: Frontend Developer at CS Telecoms</h2>
            <p>
              In October 2024, I transitioned to a Frontend Developer role at CS Telecoms. This position allows me to combine my design sensibilities with my development skills. I work with React, TypeScript, and Tailwind CSS to build responsive, performant web applications for telecommunications solutions.
            </p>

            <p>
              What I love most about this role is the opportunity to bridge the gap between design and development. Having experience in both areas helps me implement designs more accurately and suggest improvements based on technical feasibility.
            </p>

            <h2 className="text-gray-900 dark:text-white mt-12 mb-4">Lessons Learned Along the Way</h2>
            
            <h3 className="text-gray-900 dark:text-white mt-8 mb-3">1. Continuous Learning is Non-Negotiable</h3>
            <p>
              The tech industry moves fast. What's cutting-edge today might be outdated next year. I've made it a habit to dedicate time each week to learning—whether it's a new framework, design pattern, or best practice. Following tech blogs, taking online courses, and building side projects have kept my skills sharp.
            </p>

            <h3 className="text-gray-900 dark:text-white mt-8 mb-3">2. Community Matters</h3>
            <p>
              Being part of the tech community in Buea and online has been invaluable. Attending meetups, participating in hackathons, and contributing to open-source projects have expanded my network and exposed me to different perspectives and approaches.
            </p>

            <h3 className="text-gray-900 dark:text-white mt-8 mb-3">3. Build Projects, Not Just Skills</h3>
            <p>
              Building real projects has been my best teacher. My final year Restaurant Management System project taught me more about full-stack development than any course could. Each project presents unique challenges that force you to think creatively and apply your knowledge in practical ways.
            </p>

            <h3 className="text-gray-900 dark:text-white mt-8 mb-3">4. Soft Skills Are as Important as Technical Skills</h3>
            <p>
              Communication, teamwork, time management, and empathy are crucial. Being able to explain technical concepts to non-technical stakeholders, collaborate with designers and backend developers, and manage deadlines effectively has been essential to my success.
            </p>

            <h2 className="text-gray-900 dark:text-white mt-12 mb-4">Advice for Aspiring Developers</h2>
            <p>
              If you're starting your journey in web development, here's my advice:
            </p>

            <ul className="space-y-3">
              <li>
                <strong>Start building immediately:</strong> Don't wait until you've finished all the tutorials. Learn by doing. Build small projects and gradually increase complexity.
              </li>
              <li>
                <strong>Don't compare your Chapter 1 to someone else's Chapter 20:</strong> Everyone progresses at their own pace. Focus on your growth, not others' success.
              </li>
              <li>
                <strong>Master the fundamentals:</strong> Before jumping to frameworks, ensure you have a solid understanding of HTML, CSS, and JavaScript. These fundamentals will serve you throughout your career.
              </li>
              <li>
                <strong>Build a portfolio:</strong> Showcase your best work. Quality matters more than quantity. A few well-executed projects are better than dozens of half-finished ones.
              </li>
              <li>
                <strong>Network and collaborate:</strong> Connect with other developers, join communities, and don't be afraid to ask for help. The tech community is generally supportive and welcoming.
              </li>
              <li>
                <strong>Learn to debug effectively:</strong> You'll spend more time debugging than writing new code. Learn to read error messages, use browser dev tools, and approach problems systematically.
              </li>
            </ul>

            <h2 className="text-gray-900 dark:text-white mt-12 mb-4">Looking Ahead</h2>
            <p>
              My journey is far from over. I'm constantly exploring new technologies and improving my craft. Currently, I'm diving deeper into advanced React patterns, exploring Web3 technologies, and improving my understanding of performance optimization.
            </p>

            <p>
              I'm also passionate about giving back to the community that helped me grow. I mentor junior developers, share knowledge through articles and workshops, and contribute to open-source projects when I can.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 my-8">
              <h3 className="text-gray-900 dark:text-white mt-0 mb-3">Final Thoughts</h3>
              <p className="mb-0 text-gray-700 dark:text-gray-300">
                The path from student to professional developer isn't always linear. There will be challenges, moments of doubt, and times when you feel overwhelmed. But with persistence, continuous learning, and a genuine passion for problem-solving, you can build a rewarding career in tech—even from Buea or anywhere else in the world.
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-400 italic">
              Thank you for reading about my journey. If you have questions or want to connect, feel free to reach out through the contact form or connect with me on social media. Let's build something amazing together!
            </p>
          </div>
        </motion.article>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-2 flex-wrap mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <Tag className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <Badge variant="outline">Career</Badge>
          <Badge variant="outline">Personal Story</Badge>
          <Badge variant="outline">Development</Badge>
          <Badge variant="outline">Web Development</Badge>
          <Badge variant="outline">UI/UX</Badge>
        </motion.div>

        {/* Author Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white text-2xl">
              BA
            </div>
            <div>
              <h4 className="text-gray-900 dark:text-white mb-2">About the Author</h4>
              <h3 className="text-gray-900 dark:text-white mb-3">Bulawa Joy Afumbom</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Frontend Developer & UI/UX Designer with a passion for creating beautiful, functional web experiences. BSc in Software Engineering from the University of Buea. Currently building telecommunications solutions at CS Telecoms.
              </p>
              <Button onClick={onBack} className="bg-blue-600 hover:bg-blue-700 text-white">
                View More Articles
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
