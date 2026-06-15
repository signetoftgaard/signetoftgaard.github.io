export type Tab = 'design' | 'software' | 'academic';

export interface ProjectTag {
  label: string;
}

export interface MediaItem {
  type: 'image' | 'video' | 'youtube';
  src: string;
  alt?: string;
  caption?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  tabs: Tab[];
  description: string;
  details: string[];
  skills: string[];
  media: MediaItem[];
  links?: ProjectLink[];
  accentColor?: string;
  placeholder?: boolean;
}

export const projects: Project[] = [
  {
    id: 'earnormous',
    title: 'EarNormous VR',
    subtitle: 'Immersive Health Education Game',
    year: '2024–2025',
    tags: ['VR', 'Unity', 'Blender', 'User Study', 'Health Education'],
    tabs: ['software', 'academic'],
    accentColor: '#f4a261',
    description:
      'EarNormous is a serious educational game designed to teach ear anatomy and hearing protection. Players shrink down and explore a stylised 3D human ear — observing sound waves travel through its structures and experiencing the consequences of noise exposure on cochlear hair cells. The game was built in both VR (Meta Quest 3) and desktop PC versions.',
    details: [
      'Hearing loss affects over 430 million people worldwide, yet awareness remains low — especially among young people. EarNormous addresses this through interactive, immersive learning.',
      'Players explore a colorful 3D ear environment (built in Blender & Unity), scan anatomical structures into an in-game "EarDex", toggle earplugs, and observe real-time hair-cell destruction from loud sound.',
      'A between-group study with 67 participants compared three conditions: VR game, PC game, and text-based reading. All three showed significant knowledge gains, with the PC version outperforming text in the learning test.',
      'The study demonstrated that immersive and interactive approaches like EarNormous are effective tools for raising hearing health awareness in non-professional contexts.',
    ],
    skills: [
      '3D environment design (Blender, Unity)',
      'VR interaction design (Meta Quest 3)',
      'Quantitative user study design & analysis',
      'Health communication & game-based learning',
      'Between-group experimental methodology',
      'Statistical analysis (T-tests, Wilcoxon)',
    ],
    media: [
      {
        type: 'youtube',
        src: 'https://youtu.be/XTWuxT2ivn4',
        caption: 'EarNormous VR gameplay walkthrough',
      },
    ],
    links: [
      {
        label: 'Abstract published in ACM (2023)',
        url: 'https://dl.acm.org/doi/abs/10.1145/3611659.3616887',
      },
      {
        label: 'Published in ScienceDirect (2025)',
        url: 'https://www.sciencedirect.com/science/article/pii/S0165587625004483',
      },
    ],
  },
  {
    id: 'balance-rehab',
    title: 'HealthXR — Balance Rehabilitation',
    subtitle: 'Co-designed VR Exergames for Physiotherapy',
    year: '2024–2025',
    tags: ['VR', 'Unity', 'Healthcare', 'Co-design', 'Exergames', 'Meta Quest 3'],
    tabs: ['software', 'academic'],
    accentColor: '#2ec4b6',
    description:
      'A collaborative design and development project creating two VR exergames targeting specific balance rehabilitation skills for elderly patients. Developed in close partnership with physiotherapists at University Hospital Herlev and Gentofte, the games align with the STABLE rehabilitation protocol.',
    details: [
      'Balance disorders affect 17–30% of adults worldwide and are a leading cause of falls in the elderly. VR exergames offer a cost-effective, engaging alternative to traditional physiotherapy.',
      'Game A (Stability Limits Training): Players grab and sort fruits appearing in front of them, requiring controlled center-of-mass shifts. Includes spatialized audio (Meta XR Audio SDK), haptic feedback (Meta Haptics SDK), and ecological soundscapes.',
      'Game B (Sensory Integration Training): Players track flying objects with their head and "shoot" them with a gaze-based laser mechanic. Difficulty is fully customizable by the physiotherapist via sliders.',
      'Six health professionals (5 physiotherapists + 1 doctor) conducted a preliminary evaluation, confirming therapeutic potential while identifying improvements in usability and progress monitoring.',
      'The project covered four domains of the STABLE protocol: stability limits, sensory orientation, anticipatory turning, and reactive stepping.',
    ],
    skills: [
      'Co-design methodology with clinical experts',
      'VR game development (Unity, Meta Quest 3)',
      'Multisensory feedback design (audio + haptics)',
      'Healthcare UX and accessibility',
      'Iterative prototyping with domain experts',
      'STABLE rehabilitation protocol',
    ],
    media: [],
    links: [
      {
        label: 'Published workshop paper (IEEE VR 2025)',
        url: 'https://ieeexplore.ieee.org/abstract/document/10972394',
      },
    ],
  },
  {
    id: 'vr-tablet-workshop',
    title: 'Collaborative Design Workshop',
    subtitle: 'Asymmetric VR + Tablet Platform for Novo Nordisk',
    year: '2024',
    tags: ['VR', 'Tablet', 'Android', 'Unity', 'Cross-platform', 'Master\'s Thesis', 'CSCW'],
    tabs: ['software', 'academic'],
    accentColor: '#6a4c93',
    description:
      'Master\'s thesis project designing and evaluating a cross-platform multiplayer application for VR (Meta Quest 2) and tablet (Lenovo Tab P12), enabling non-VR participants to actively collaborate in design workshops — developed in response to a real need at Novo Nordisk\'s VR design workshops.',
    details: [
      'Novo Nordisk\'s VR design workshops had a problem: only 1–2 participants could be in VR, while everyone else passively watched a TV screen. This created a high degree of asymmetry and unequal participation.',
      'The solution: a networked multiplayer cross-platform app where both VR users and tablet users can directly manipulate the same virtual environment, with mirrored directional dependency and a low degree of asymmetry.',
      'The VR interface (Meta Quest 2) uses ray-casting for object selection, teleportation locomotion, and haptic feedback. The tablet interface offers three view modes (2D top-down, 3D orbit, first-person) with intuitive touch gestures.',
      'A within-group study with 6 groups of 4 participants (24 total) found no significant difference in perceived collaboration or participation between VR and tablet users — except tablet users were more aware of others\' spatial location.',
      'Key finding: tablet excelled at getting an overview and moving furniture in; VR excelled at fine-tuning placement. Both interfaces are complementary.',
    ],
    skills: [
      'Cross-platform VR/tablet development (Unity)',
      'Networked multiplayer (Unity Netcode)',
      'Interaction design for asymmetric collaboration',
      'Mixed-methods research (questionnaire + focus group interview)',
      'CSCW (Computer Supported Cooperative Work)',
      'Stakeholder interviews & contextual inquiry at Novo Nordisk',
    ],
    media: [],
  },
  {
    id: 'vr-dialogues',
    title: 'VR Dialogues',
    subtitle: 'Enhancing Communication for Autistic Individuals Through Virtual Activities',
    year: '2024',
    tags: ['VR', 'Autism', 'Communication', 'Co-design', 'Special Education', 'Mental Health'],
    tabs: ['software', 'academic'],
    accentColor: '#e63946',
    description:
      'VR Dialogues is a virtual reality intervention designed to facilitate communication about sensitive topics between adolescents with Autism Spectrum Disorder (ASD) and their special education teachers. Developed in collaboration with special education professionals, the VR application features interactive activities including basketball, air hockey, drawing, and avatar customization to create a comfortable space for dialogue.',
    details: [
      'Autism Spectrum Disorder presents significant challenges in social interaction, verbal and non-verbal communication, and maintaining relationships. Many adolescents with ASD struggle to express feelings about sensitive issues such as bullying, trauma, or personal fears.',
      'VR Dialogues was co-designed through workshops with special education teachers to identify activities that could facilitate open communication while reducing social anxiety.',
      'The application features four main interactive activities: basketball (for casual engagement), air hockey (for collaborative play), drawing (for creative expression), and avatar customization (for personalization and social interaction).',
      'Evaluation involved two sessions between one autistic adolescent and a special education teacher at a residential home for autistic adolescents.',
      'Results demonstrate that VR environments can serve as an effective intermediary space for sensitive conversations between autistic individuals and educators, reducing communication barriers.',
    ],
    skills: [
      'VR application development (Unity)',
      'Co-design with special education professionals',
      'Autism Spectrum Disorder (ASD) research',
      'Communication and social interaction design',
      'Mental health and therapeutic VR design',
      'User research with vulnerable populations',
    ],
    media: [],
    links: [
      {
        label: 'Published in Universal Design 2024',
        url: 'https://doi.org/10.3233/SHTI241045',
      },
    ],
    placeholder: false,
  },
  {
    id: 'seaquest',
    title: 'SEAQUEST',
    subtitle: 'Educational Ocean Exploration Experience for Children',
    year: '2025',
    tags: ['VR', 'Tablet', 'Unity', 'Meta Quest 3', 'Erasmus+', 'Learning Game'],
    tabs: ['software'],
    accentColor: '#457b9d',
    description: 'A game designed to familiarize children in primary school with the ocean and the importance of seagrass in marine ecosystems. Developed as part of an Erasmus+ project in collaboration with organizations across Europe.',
    details: [],
    skills: [],
    media: [{
        type: 'youtube',
        src: 'https://youtu.be/dpicCUdGaU8',
        caption: 'SEAQUEST Tablet gameplay walkthrough',
      },],
    placeholder: true,
  },
  {
    id: 'design-placeholder',
    title: 'Design / UI Work',
    subtitle: 'To be updated',
    year: '',
    tags: ['UI/UX', 'Design'],
    tabs: ['design'],
    accentColor: '#a8dadc',
    description: 'PROJECTS COMING SOON',
    details: [],
    skills: [],
    media: [],
    placeholder: true,
  },
];
