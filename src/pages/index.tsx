import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 font-roboto">
      <Head>
        <title>My NPM Libraries</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to My NPM Libraries!
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Modern, clean, and beautiful libraries for your Angular and React projects.
        </p>
        <div className="flex flex-wrap gap-4 mb-8">
        <a
          href="https://www.npmjs.com/package/my-angular-library"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black border border-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-opacity-50 transition duration-200"
        >
          Angular Library
        </a>
        <a
          href="https://www.npmjs.com/package/my-react-library"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black border border-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-opacity-50 transition duration-200"
        >
          React Library
        </a>
        </div>
        <a
          href="https://github.com/yourusername/yourrepository"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-100 transition duration-200"
        >
          <i className="fab fa-github text-3xl"></i>
          <span className="ml-2">View on GitHub</span>
        </a>
      </main>
    </div>
  );
}
