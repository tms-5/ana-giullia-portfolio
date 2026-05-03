export type ProfileMode = 'odonto' | 'tech'

export type ExperienceItem = {
  role: string
  organization: string
  date: string
  location: string
  description: string
}

export type SkillItem = {
  title: string
  description: string
  icon?: string
}

export type ProjectItem = {
  title: string
  category: string
  description: string
  cta: string
}

export type ProfileContent = {
  mode: ProfileMode
  label: string
  hero: {
    eyebrow: string
    title: string
    description: string
    cta: string
    image: string
    imagePosition: string
  }
  about: {
    eyebrow: string
    title: string
    description: string
  }
  experience: ExperienceItem[]
  skills: SkillItem[]
  projects: ProjectItem[]
  cta: {
    eyebrow: string
    title: string
    description: string
    action: string
  }
}

export const profileContent: Record<ProfileMode, ProfileContent> = {
  odonto: {
    mode: 'odonto',
    label: 'Odonto',
    hero: {
      eyebrow: 'Clinical healthcare',
      title: 'Dentistry with calm precision and patient-first care.',
      description:
        'Ana Giullia Calado presents a gentle clinical profile shaped by communication, prevention, and elegant healthcare experiences.',
      cta: 'Explore dental profile',
      image: '/images/ana-odonto.png',
      imagePosition: 'center top',
    },
    about: {
      eyebrow: 'About',
      title: 'A softer clinical presence for modern dentistry.',
      description:
        'This mode highlights Ana as a dentist who values trust, careful listening, and clear treatment journeys. The tone is warm, polished, and reassuring without feeling formal or distant.',
    },
    experience: [
      {
        role: 'Cirurgiã-Dentista',
        organization: 'Clinical practice',
        date: '2024 - Present',
        location: 'Brazil',
        description:
          'Patient-centered dental care with attention to preventive education, clinical documentation, and a calm appointment experience.',
      },
      {
        role: 'Dental graduate',
        organization: 'FOUFT',
        date: '2024',
        location: 'Brazil',
        description:
          'Academic and clinical training with a personal interest in periodontics, care quality, and humanized healthcare communication.',
      },
    ],
    skills: [
      {
        title: 'Patient communication',
        description: 'Clear explanations, gentle guidance, and trust-building throughout care.',
      },
      {
        title: 'Clinical documentation',
        description: 'Organized case narratives that make treatment progress easy to understand.',
      },
      {
        title: 'Preventive care',
        description: 'Education-led care plans focused on long-term oral health.',
      },
    ],
    projects: [
      {
        title: 'Patient Journey',
        category: 'Care experience',
        description:
          'A soft content structure for explaining first appointments, treatment planning, and follow-up.',
        cta: 'View case',
      },
      {
        title: 'Clinical Portfolio',
        category: 'Documentation',
        description:
          'A clean way to present dental cases with context, restraint, and patient-safe storytelling.',
        cta: 'Open portfolio',
      },
    ],
    cta: {
      eyebrow: 'Next step',
      title: 'Create a clinical presence that feels trustworthy and personal.',
      description:
        'Use this mode to guide patients through Ana’s values, care approach, and professional story.',
      action: 'Contact Ana',
    },
  },
  tech: {
    mode: 'tech',
    label: 'Tech',
    hero: {
      eyebrow: 'Data analytics and BI',
      title: 'Data stories that turn scattered signals into decisions.',
      description:
        'A modern tech profile for Ana’s work with analysis, Python, SQL, Power BI, and business intelligence workflows.',
      cta: 'Explore tech profile',
      image: '/images/ana-tech.png',
      imagePosition: 'center top',
    },
    about: {
      eyebrow: 'About',
      title: 'Analytical work with clarity, structure, and a human lens.',
      description:
        'This mode positions Ana as a data analyst who can translate business questions into readable dashboards, clean analysis, and practical insights.',
    },
    experience: [
      {
        role: 'Data Analyst',
        organization: 'Business intelligence projects',
        date: '2024 - Present',
        location: 'Remote',
        description:
          'Exploratory analysis, dashboard design, and data preparation using Python, SQL, and Power BI.',
      },
      {
        role: 'BI Portfolio Builder',
        organization: 'Independent projects',
        date: '2024 - Present',
        location: 'Brazil',
        description:
          'Development of dashboards and analytical case studies focused on usability, decision context, and visual clarity.',
      },
    ],
    skills: [
      {
        title: 'Python analysis',
        description: 'Data cleaning, exploration, and practical analysis workflows.',
      },
      {
        title: 'SQL thinking',
        description: 'Structured querying for reliable business and operational answers.',
      },
      {
        title: 'Power BI dashboards',
        description: 'Readable reporting experiences with calm hierarchy and useful metrics.',
      },
    ],
    projects: [
      {
        title: 'BI Dashboard System',
        category: 'Power BI',
        description:
          'A refined reporting concept for tracking operational performance and decision signals.',
        cta: 'View dashboard',
      },
      {
        title: 'Python Insight Notebook',
        category: 'Analysis',
        description:
          'A portfolio case showing how raw data becomes an accessible recommendation.',
        cta: 'Read analysis',
      },
    ],
    cta: {
      eyebrow: 'Next step',
      title: 'Make the technical story feel elegant, focused, and useful.',
      description:
        'Use this mode to highlight analytics skills without drifting into a generic tech portfolio.',
      action: 'Discuss data work',
    },
  },
}
