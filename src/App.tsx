import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { ArticlePage } from './components/ArticlePage';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showArticle, setShowArticle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleArticleClick = () => {
    setShowArticle(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlog = () => {
    setShowArticle(false);
    // Scroll to blog section after a short delay
    setTimeout(() => {
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (showArticle) {
    return (
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
          <Navigation scrolled={true} />
          <ArticlePage onBack={handleBackToBlog} />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <Navigation scrolled={scrolled} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Services />
          <Testimonials />
          <Blog onArticleClick={handleArticleClick} />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}