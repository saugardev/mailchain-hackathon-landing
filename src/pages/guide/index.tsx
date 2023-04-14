// pages/guide.tsx
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'angular-usage', title: 'Angular Usage' },
  { id: 'react-usage', title: 'React Usage' },
  { id: 'nextjs-usage', title: 'Next.js Usage' },
];

export default function Guide() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef: any = useRef();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="min-h-screen bg-gray-100 font-roboto relative">
      <Head>
        <title>Guide - My NPM Libraries</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto py-4 px-4 md:flex md:justify-between">
          <div className="text-2xl font-semibold">
            Mailchain UI Components
          </div>
        </div>
      </header>

      <button
        className={`fixed top-4 right-4 z-20 md:hidden text-gray-800 focus:outline-none ${
          isOpen ? 'text-red-500' : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div className="container mx-auto py-6 px-4 md:flex">
        <aside
          ref={menuRef}
          className={`w-full md:w-64 md:mr-8 transition-all duration-300 ${
            isOpen ? 'block' : 'hidden md:block'
          }`}
        >
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg ${
                  activeSection === section.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                } focus:outline-none`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </aside>
    
        <section className="w-full md:max-w-3xl">
          <div className="bg-white p-6 rounded-lg shadow-md">
            {activeSection === 'introduction' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p>...</p>
              </div>
            )}
    
            {activeSection === 'angular-usage' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Angular Usage</h2>
                <p>...</p>
              </div>
            )}
    
            {activeSection === 'react-usage' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">React Usage</h2>
                <p>...</p>
              </div>
            )}
    
            {activeSection === 'nextjs-usage' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Next.js Usage</h2>
                <p>...</p>
              </div>
            )}
          </div>
        </section>
      </div>
      <div className="container mx-auto py-4 px-4 text-center">
        <Link href="/" scroll={false}>
          <div className="text-blue-600 hover:text-blue-800 transition duration-200">
            Back to Home
          </div>
        </Link>
      </div>
    </div>
  );
}    