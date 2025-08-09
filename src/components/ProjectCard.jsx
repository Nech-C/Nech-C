// file: src/components/ProjectCard.jsx
import React from 'react'

export default function ProjectCard({ title, image, description, tech, links }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden p-4 flex flex-col gap-4 max-w-md animate-fade-in-up">
      {image && <img src={image} className="w-full h-48 object-contain border-2 border-gray-300 rounded-lg shadow-xl bg-white" />}
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, idx) => (
          <span key={idx} className="bg-gray-200 text-xs px-2 py-1 rounded-full">{item}</span>
        ))}
      </div>
      <div className="mt-2 flex gap-4 flex-wrap">
        {Object.entries(links).map(([label, url]) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </a>
        ))}
      </div>

    </div>
  )
}
