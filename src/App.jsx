import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">
      <ProjectCard
        title="Reddit Sentiment Meter"
        image="/images/reddit-meter.png"
        description="Real-time sentiment tracker for Reddit using ML and GCP"
        tech={['FastAPI', 'Firestore', 'Cloud Run', 'React', 'Vite']}
        links={{
          demo: 'https://your-app.firebaseapp.com',
          frontend: 'https://github.com/Nech-C/reddit-meter-frontend',
          backend: 'https://github.com/Nech-C/reddit-meter-backend',
        }}
      />
      <ProjectCard
        title="Rockognize – Mineral Identifier"
        image="/images/rockognize.png"
        description="Image classifier for minerals deployed via Hugging Face Spaces"
        tech={['Gradio', 'Hugging Face', 'Transformers']}
        links={{
          demo: 'https://huggingface.co/spaces/Nech-C/rockognize',
          repo: 'https://github.com/Nech-C/rockognize',
        }}
      />
    </div>
  );
}
export default App;