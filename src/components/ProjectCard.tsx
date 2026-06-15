import React, { useState } from 'react';
import type { Project } from '../data/projects';
import './ProjectCard.css';

interface Props {
  project: Project;
  index: number;
}

function YoutubeEmbed({ src }: { src: string }) {
  const id = src.includes('youtu.be/')
    ? src.split('youtu.be/')[1].split('?')[0]
    : src.split('v=')[1]?.split('&')[0];
  return (
    <div className="video-wrapper">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default function ProjectCard({ project, index }: Props) {
  const [expanded, setExpanded] = useState(false);
  const accent = project.accentColor ?? '#4caf7d';

  if (project.placeholder) {
    return (
      <div
        className="project-card placeholder-card"
        style={{ '--accent': accent, '--delay': `${index * 0.08}s` } as React.CSSProperties}
      >
        <div className="card-accent-bar" />
        <div className="placeholder-inner">
          <h2 className="card-title">{project.title}</h2>
          <p className="placeholder-note">{project.subtitle}</p>
          {project.description && <p className="card-desc">{project.description}</p>}
        </div>
      </div>
    );
  }

  return (
    <article
      className={`project-card ${expanded ? 'expanded' : ''}`}
      style={{ '--accent': accent, '--delay': `${index * 0.08}s` } as React.CSSProperties}
    >
      <div className="card-accent-bar" />

      <div className="card-header">
        <div className="card-meta">
          <span className="card-year">{project.year}</span>
          <div className="card-tags">
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <h2 className="card-title">{project.title}</h2>
        <p className="card-subtitle">{project.subtitle}</p>
      </div>

      <div className="card-body">
        <p className="card-desc">{project.description}</p>

        {/* Media */}
        {project.media.length > 0 && (
          <div className="card-media">
            {project.media.map((m, i) => {
              if (m.type === 'youtube') return <YoutubeEmbed key={i} src={m.src} />;
              if (m.type === 'image') return (
                <figure key={i} className="media-figure">
                  <img src={m.src} alt={m.alt ?? ''} className="media-img" />
                  {m.caption && <figcaption>{m.caption}</figcaption>}
                </figure>
              );
              return null;
            })}
          </div>
        )}

        {/* Expand toggle */}
        <button
          className="expand-btn"
          onClick={() => setExpanded(e => !e)}
          aria-expanded={expanded}
        >
          {expanded ? '↑ Show less' : '↓ Read more'}
        </button>

        {expanded && (
          <div className="card-expanded">
            <div className="details-section">
              <h3>About this project</h3>
              <ul className="details-list">
                {project.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>

            {project.skills.length > 0 && (
              <div className="skills-section">
                <h3>Skills & Technologies</h3>
                <div className="skills-grid">
                  {project.skills.map(s => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
            )}

            {project.links && project.links.length > 0 && (
              <div className="links-section">
                <h3>Research links</h3>
                <ul className="project-links">
                  {project.links.map(link => (
                    <li key={link.url}>
                      <a
                        className="project-link"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
