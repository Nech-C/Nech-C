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
    <main className="min-h-screen bg-gray-50 py-12 px-6 md:px-12">
      <section className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Hi, I'm Xiaokun Chen 👋</h1>
        <p className="text-gray-700 text-lg">
          I'm a Computer Science MS student at UMass Lowell, specializing in machine learning and full-stack development.
          I've contributed to open-source libraries like <a href="https://github.com/huggingface/transformers" className="text-blue-600 hover:underline">Transformers</a>,
          and built real-world apps using cloud infrastructure and Hugging Face tools. I'm passionate about building useful, intelligent systems.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">My Projects</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}


export default App;
