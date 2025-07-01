import ProjectCard from './components/ProjectCard';

const projects = [
  {
    title: "Reddit Sentiment Meter",
    image: "images/reddit-meter.png",
    alt: "Screenshot of Reddit Sentiment Meter dashboard",
    description: "An end-to-end sentiment analysis tool that monitors Reddit posts, performs transformer-based inference, and visualizes public opinion trends in real time.",
    tech: ['FastAPI', 'Firestore', 'Cloud Run', 'React', 'Vite'],
    date: "2024-2025",
    tags: ['Live', 'Open Source'],
    links: {
      demo: 'https://reddit-sentiment-meter.firebaseapp.com/',
      frontend: 'https://github.com/Nech-C/reddit-meter-frontend',
      backend: 'https://github.com/Nech-C/reddit-meter-backend',
    },
  },
  {
    title: "Rockognize - Mineral Identifier",
    image: "images/rockognize.png",
    alt: "Screenshot of Rockognize mineral classification app",
    description: "A computer vision classifier for minerals using a fine-tuned vision transformer, deployed on Hugging Face Spaces with an intuitive drag-and-drop UI.",
    tech: ['Gradio', 'Hugging Face', 'Transformers'],
    date: "2024",
    tags: ['Live'],
    links: {
      demo: 'https://huggingface.co/spaces/Nech-C/Rock-Identifier',
      repo: 'https://github.com/Nech-C/rockognize',
    },
  },
];

function App() {
  return (
    <div className="bg-gray-50">
      <main className="min-h-screen">
        <section className="bg-gray-100 py-12">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h1 className="text-3xl font-bold mb-4">Hi, I'm Xiaokun Chen 👋</h1>
            <p className="text-gray-700 text-lg">
              I'm a Computer Science MS student at UMass Lowell, specializing in machine learning and full-stack development.
              I've contributed to open-source libraries like <a href="https://github.com/huggingface/transformers" className="text-blue-600 hover:underline">Transformers</a>,
              and built real-world apps using cloud infrastructure and Hugging Face tools. I'm passionate about building useful, intelligent systems.
            </p>
          </div>
        </section>

        <hr className="mb-10 border-t border-gray-300" />
        <section className="mb-10">
          <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 py-6 mt-12 text-center text-sm text-gray-600">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://github.com/Nech-C"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 underline"
          >
            GitHub
          </a>
          <span className="hidden sm:inline">|</span>
          <a
            href="https://www.linkedin.com/in/xiaokunchen/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 underline"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} Xiaokun Chen</p>
      </footer>

    </div>
  );
}


export default App;
