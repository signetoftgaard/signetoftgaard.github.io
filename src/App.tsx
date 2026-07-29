import React, { useState, useEffect } from 'react';
import { projects } from './data/projects';
import type { Tab } from './data/projects';
import ProjectCard from './components/ProjectCard';
import './App.css';

type AppTab = 'home' | Tab;

const TABS: { id: AppTab; label: string; emoji: string }[] = [
  { id: 'home', label: 'Home', emoji: '👋' },
  { id: 'software', label: 'Software & XR', emoji: '🥽' },
  { id: 'academic', label: 'Academic', emoji: '📄' },
  { id: 'design', label: 'Design / UI', emoji: '🎨' },
];

const PROJECT_TABS: Tab[] = ['software', 'academic', 'design'];

function isProjectTab(value: string): value is Tab {
  return PROJECT_TABS.includes(value as Tab);
}

function getInitialTab(): AppTab {
  const hash = window.location.hash.replace('#', '');
  if (isProjectTab(hash)) return hash;
  return 'home';
}

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>(getInitialTab);

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (isProjectTab(hash)) {
        setActiveTab(hash);
        return;
      }
      setActiveTab('home');
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const handleTab = (id: AppTab) => {
    setActiveTab(id);
    if (id === 'home') {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
      return;
    }
    window.location.hash = id;
  };

  const visible = projects
    .filter(p => isProjectTab(activeTab) && p.tabs.includes(activeTab))
    .sort((a, b) => {
      if (!isProjectTab(activeTab)) return 0;
      const aOrder = a.order?.[activeTab] ?? Number.MAX_SAFE_INTEGER;
      const bOrder = b.order?.[activeTab] ?? Number.MAX_SAFE_INTEGER;
      return aOrder - bOrder;
    });

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
        {activeTab === 'home' ? (
          <section className="landing" aria-label="About Signe Toftgaard Henriksen">
            <div className="landing-copy">
              <p className="landing-kicker">Welcome</p>
              <h1 className="landing-title">Signe Toftgaard Henriksen</h1>
              <p className="landing-text">
                MSc in Medialogy. Combining creativity, technology, and design to create immersive experiences and interactive systems.
              </p>
              <p className="landing-text">
                Use the tabs above to explore software projects, academic work, and design projects.
              </p>
              {/* <div className="landing-actions">
                <button className="landing-btn primary" onClick={() => handleTab('software')}>
                  Explore Software & XR
                </button>
                <button className="landing-btn" onClick={() => handleTab('academic')}>
                  View Academic Work
                </button>
              </div> */}
            </div>

            {/* <div className="landing-image-placeholder" role="img" aria-label="Profile image placeholder">
              <span>Image Placeholder</span>
            </div> */}
          </section>
        ) : (
          <>
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
          </>
        )}
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
