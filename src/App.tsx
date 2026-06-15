import React, { useState, useEffect } from 'react';
import { projects } from './data/projects';
import type { Tab } from './data/projects';
import ProjectCard from './components/ProjectCard';
import './App.css';

const TABS: { id: Tab; label: string; emoji: string }[] = [
  { id: 'software', label: 'Software & XR', emoji: '🥽' },
  { id: 'academic', label: 'Academic', emoji: '📄' },
  { id: 'design', label: 'Design / UI', emoji: '🎨' },
];

function getInitialTab(): Tab {
  const hash = window.location.hash.replace('#', '') as Tab;
  if (TABS.find(t => t.id === hash)) return hash;
  return 'software';
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>(getInitialTab);

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace('#', '') as Tab;
      if (TABS.find(t => t.id === hash)) setActiveTab(hash);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const handleTab = (id: Tab) => {
    setActiveTab(id);
    window.location.hash = id;
  };

  const visible = projects.filter(p => p.tabs.includes(activeTab));

  return (
    <div className="app">
      {/* Decorative blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <header className="header">
        <div className="header-inner">
          <div className="name-block">
            <span className="name-tag">Signe Toftgaard Henriksen</span>
            <span className="role-tag">Medialogy · XR · Interaction Design</span>
          </div>
          <nav className="tab-nav">
            {TABS.map(tab => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTab(tab.id)}
              >
                <span className="tab-emoji">{tab.emoji}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="tab-intro">
          <h1 className="tab-heading">
            {TABS.find(t => t.id === activeTab)?.emoji}{' '}
            {TABS.find(t => t.id === activeTab)?.label}
          </h1>
          {activeTab === 'software' && (
            <p className="tab-sub">Projects combining code, interaction design, and immersive technology.</p>
          )}
          {activeTab === 'academic' && (
            <p className="tab-sub">Research publications and academic projects in XR and human-computer interaction.</p>
          )}
          {activeTab === 'design' && (
            <p className="tab-sub">Visual design, UI/UX work, and creative projects.</p>
          )}
        </div>

        <div className="projects-grid">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Signe Toftgaard Henriksen · Built with React</p>
        <p className="footer-links">
          <a href="mailto:signetohe@gmail.com">signetohe@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}
