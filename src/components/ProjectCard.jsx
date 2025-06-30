// file: src/components/ProjectCard.jsx
import React from 'react';

export default function ProjectCard({ title, image, description, tech, links }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden p-4 flex flex-col gap-4 max-w-md">
      {image && <img src={image} className="w-full h-48 object-contain border border-gray-300 rounded-lg shadow-sm bg-white" />}
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, idx) => (
          <span key={idx} className="bg-gray-200 text-xs px-2 py-1 rounded-full">{item}</span>
        ))}
      </div>
      <div className="mt-2 flex gap-4">
        {links.demo && <a href={links.demo} className="text-blue-600 hover:underline" target="_blank">Demo</a>}
        {links.repo && <a href={links.repo} className="text-blue-600 hover:underline" target="_blank">Repo</a>}
        {links.frontend && <a href={links.frontend} className="text-blue-600 hover:underline" target="_blank">Frontend</a>}
        {links.backend && <a href={links.backend} className="text-blue-600 hover:underline" target="_blank">Backend</a>}
      </div>
    </div>
  );
}
