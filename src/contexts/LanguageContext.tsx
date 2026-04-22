import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",
    "nav.getInTouch": "Get in Touch",

    // Home
    "home.location": "Casablanca, Morocco",
    "home.greeting": "Hi, I'm",
    "home.name": "Youssef Maimouni",
    "home.role": "Data Scientist & AI Engineer",
    "home.tagline": "Building Real-World AI Solutions",
    "home.taglineSub": "Generative AI · NLP · RAG Systems",
    "home.description": "I design and deploy end-to-end AI systems — from data and modeling to production-ready solutions integrated into real-world applications.",
    "home.viewProjects": "View My Work",
    "home.connectLinkedIn": "Connect on LinkedIn",
    "home.downloadCV": "Download CV",
    "home.openForPFE": "Currently at Techpal",
    "home.learnMore": "Scroll to explore",
    "home.currentlyAt": "Currently at Techpal",

    // About
    "about.title": "About",
    "about.me": "Me",
    "about.subtitle": "Passionate about turning data into actionable insights and building impactful AI solutions.",
    "about.whoIAm": "Who I Am",
    "about.bio1": "Data Scientist and AI Engineer specialized in Generative AI, NLP, and Retrieval-Augmented Generation (RAG) systems.",
    "about.bio2": "I design and deploy end-to-end AI solutions — from data processing and modeling (Machine Learning, Deep Learning, LLMs) to production-ready systems integrated into real-world applications.",
    "about.bio3": "I focus on building scalable, efficient, and secure systems, especially when dealing with sensitive data.",
    "about.whatIDo": "What I Do",
    "about.ml": "Machine Learning",
    "about.mlDesc": "Supervised & unsupervised learning, CNN, LSTM, Transformers for real-world applications.",
    "about.nlp": "NLP & LLMs",
    "about.nlpDesc": "Text mining, BERT, mT5, TF-IDF, RAG for intelligent text processing and generation.",
    "about.cv": "Computer Vision",
    "about.cvDesc": "YOLOv8, Mask R-CNN, ResNet-50, OpenCV for detection, segmentation, and classification.",
    "about.cloud": "Cloud & Deployment",
    "about.cloudDesc": "Azure, AWS, Docker, Flask, FastAPI for scalable AI solutions deployment.",
    "about.languages": "Languages",
    "about.yearsLearning": "Years Learning",
    "about.projectsCompleted": "Projects Completed",
    "about.hackathonsWon": "Hackathons Won",
    "about.techCommunities": "Tech Communities",
    "about.availableForPFE": "Available for PFE Internship starting February 2026",

    // Skills
    "skills.title": "Skills &",
    "skills.techStack": "Tech Stack",
    "skills.subtitle": "A comprehensive toolkit for building intelligent systems from prototype to production",
    "skills.aiMl": "AI & Machine Learning",
    "skills.nlpLlms": "NLP & LLMs",
    "skills.computerVision": "Computer Vision",
    "skills.dataBigData": "Data & Big Data",
    "skills.webDev": "Web Development",
    "skills.cloudDevops": "Cloud & DevOps",
    "skills.softSkills": "Soft Skills",
    "skills.certifications": "Licenses & Certifications",

    // Projects
    "projects.title": "Featured",
    "projects.featured": "Projects",
    "projects.subtitle": "Real-world AI solutions tackling cybersecurity, NLP, IoT, and computer vision challenges",
    "projects.other": "Other Projects",
    "projects.viewCode": "View Code",
    "projects.viewAll": "View all repositories on GitHub",

    // Experience
    "experience.title": "Experience &",
    "experience.education": "Education",
    "experience.subtitle": "A journey through learning, building, and leading impactful AI solutions",
    "experience.work": "Work Experience",
    "experience.edu": "Education",
    "experience.awards": "Awards & Distinctions",
    "experience.volunteering": "Volunteering & Leadership",

    // Contact
    "contact.title": "Let's",
    "contact.connect": "Connect",
    "contact.subtitle": "Have a project in mind, want to discuss opportunities, or just say hello? I'd love to hear from you.",
    "contact.getInTouch": "Get in Touch",
    "contact.followMe": "Follow Me",
    "contact.downloadResume": "Download Resume",
    "contact.englishCV": "English CV",
    "contact.frenchCV": "CV Français",
    "contact.lookingForPFE": "Looking for PFE Internship",
    "contact.pfeDescription": "I'm actively seeking a final-year internship (PFE) starting February 2026 to design and deploy intelligent, high-impact AI solutions.",
    "contact.openForOpportunities": "Open for opportunities",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.namePlaceholder": "Your name",
    "contact.emailPlaceholder": "your@email.com",
    "contact.subjectPlaceholder": "What's this about?",
    "contact.messagePlaceholder": "Tell me about your project or opportunity...",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.messageSent": "Message sent!",
    "contact.messageDescription": "Thank you for reaching out. I'll get back to you soon.",

    // Footer
    "footer.builtWith": "Built with",
    "footer.by": "by",
    "footer.rights": "All rights reserved.",

    // Chatbot
    "chatbot.title": "Chat with AI",
    "chatbot.placeholder": "Ask about Youssef's skills, projects, or experience...",
    "chatbot.welcome": "Hello! I'm Youssef's AI assistant. I can tell you about his skills, projects, experience, and how to get in touch. What would you like to know?",
    "chatbot.send": "Send",
    "chatbot.thinking": "Thinking...",

    // Certifications
    "certs.title": "Certifications &",
    "certs.credentials": "Credentials",
    "certs.subtitle": "Validated expertise across cloud, AI, data science, and engineering.",

    // Volunteering
    "volunteer.title": "Leadership &",
    "volunteer.community": "Community",
    "volunteer.subtitle": "Driving projects and people beyond code.",

    // Languages
    "languages.title": "Languages",
    "languages.subtitle": "Communicating across cultures and contexts.",
    "languages.arabic": "Arabic",
    "languages.arabicLevel": "Native / Bilingual",
    "languages.french": "French",
    "languages.frenchLevel": "Professional Working Proficiency",
    "languages.english": "English",
    "languages.englishLevel": "Professional Working Proficiency",

    // Contact extras
    "contact.openCta": "Open to opportunities — let's connect",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.experience": "Expérience",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",
    "nav.getInTouch": "Me contacter",

    // Home
    "home.location": "Casablanca, Maroc",
    "home.greeting": "Bonjour, je suis",
    "home.name": "Youssef Maimouni",
    "home.role": "Data Scientist & Ingénieur IA",
    "home.tagline": "Solutions IA pour le monde réel",
    "home.taglineSub": "IA Générative · NLP · Systèmes RAG",
    "home.description": "Je conçois et déploie des systèmes IA de bout en bout — du traitement des données à la production intégrée à des applications réelles.",
    "home.viewProjects": "Voir mes projets",
    "home.connectLinkedIn": "Me suivre sur LinkedIn",
    "home.downloadCV": "Télécharger CV",
    "home.openForPFE": "Actuellement chez Techpal",
    "home.learnMore": "Explorer",
    "home.currentlyAt": "Actuellement chez Techpal",

    // About
    "about.title": "À",
    "about.me": "propos",
    "about.subtitle": "Passionné par la transformation des données en informations exploitables et la création de solutions IA impactantes.",
    "about.whoIAm": "Qui suis-je",
    "about.bio1": "Data Scientist et Ingénieur IA spécialisé en IA Générative, NLP et systèmes Retrieval-Augmented Generation (RAG).",
    "about.bio2": "Je conçois et déploie des solutions IA de bout en bout — du traitement des données et la modélisation (Machine Learning, Deep Learning, LLMs) jusqu'aux systèmes en production intégrés à des applications réelles.",
    "about.bio3": "Je me concentre sur la construction de systèmes évolutifs, efficaces et sécurisés, en particulier lors du traitement de données sensibles.",
    "about.whatIDo": "Ce que je fais",
    "about.ml": "Machine Learning",
    "about.mlDesc": "Apprentissage supervisé et non supervisé, CNN, LSTM, Transformers pour des applications réelles.",
    "about.nlp": "NLP & LLMs",
    "about.nlpDesc": "Text mining, BERT, mT5, TF-IDF, RAG pour le traitement et la génération de texte intelligent.",
    "about.cv": "Vision par Ordinateur",
    "about.cvDesc": "YOLOv8, Mask R-CNN, ResNet-50, OpenCV pour la détection, segmentation et classification.",
    "about.cloud": "Cloud & Déploiement",
    "about.cloudDesc": "Azure, AWS, Docker, Flask, FastAPI pour le déploiement de solutions IA évolutives.",
    "about.languages": "Langues",
    "about.yearsLearning": "Années d'apprentissage",
    "about.projectsCompleted": "Projets réalisés",
    "about.hackathonsWon": "Hackathons gagnés",
    "about.techCommunities": "Communautés Tech",
    "about.availableForPFE": "Disponible pour un stage PFE à partir de février 2026",

    // Skills
    "skills.title": "Compétences &",
    "skills.techStack": "Technologies",
    "skills.subtitle": "Une boîte à outils complète pour construire des systèmes intelligents du prototype à la production",
    "skills.aiMl": "IA & Machine Learning",
    "skills.nlpLlms": "NLP & LLMs",
    "skills.computerVision": "Vision par Ordinateur",
    "skills.dataBigData": "Data & Big Data",
    "skills.webDev": "Développement Web",
    "skills.cloudDevops": "Cloud & DevOps",
    "skills.softSkills": "Soft Skills",
    "skills.certifications": "Licences & Certifications",

    // Projects
    "projects.title": "Projets",
    "projects.featured": "Phares",
    "projects.subtitle": "Solutions IA réelles pour la cybersécurité, le NLP, l'IoT et la vision par ordinateur",
    "projects.other": "Autres Projets",
    "projects.viewCode": "Voir le Code",
    "projects.viewAll": "Voir tous les dépôts sur GitHub",

    // Experience
    "experience.title": "Expérience &",
    "experience.education": "Formation",
    "experience.subtitle": "Un parcours à travers l'apprentissage, la création et le leadership de solutions IA impactantes",
    "experience.work": "Expérience Professionnelle",
    "experience.edu": "Formation",
    "experience.awards": "Prix & Distinctions",
    "experience.volunteering": "Bénévolat & Leadership",

    // Contact
    "contact.title": "Restons en",
    "contact.connect": "Contact",
    "contact.subtitle": "Vous avez un projet en tête, souhaitez discuter d'opportunités ou simplement dire bonjour ? J'adorerais avoir de vos nouvelles.",
    "contact.getInTouch": "Me Contacter",
    "contact.followMe": "Suivez-moi",
    "contact.downloadResume": "Télécharger le CV",
    "contact.englishCV": "CV Anglais",
    "contact.frenchCV": "CV Français",
    "contact.lookingForPFE": "Recherche de Stage PFE",
    "contact.pfeDescription": "Je recherche activement un stage de fin d'études (PFE) à partir de février 2026 pour concevoir et déployer des solutions IA intelligentes à fort impact.",
    "contact.openForOpportunities": "Ouvert aux opportunités",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.subject": "Sujet",
    "contact.message": "Message",
    "contact.namePlaceholder": "Votre nom",
    "contact.emailPlaceholder": "votre@email.com",
    "contact.subjectPlaceholder": "De quoi s'agit-il ?",
    "contact.messagePlaceholder": "Parlez-moi de votre projet ou opportunité...",
    "contact.send": "Envoyer le Message",
    "contact.sending": "Envoi en cours...",
    "contact.messageSent": "Message envoyé !",
    "contact.messageDescription": "Merci de m'avoir contacté. Je vous répondrai bientôt.",

    // Footer
    "footer.builtWith": "Construit avec",
    "footer.by": "par",
    "footer.rights": "Tous droits réservés.",

    // Chatbot
    "chatbot.title": "Discuter avec l'IA",
    "chatbot.placeholder": "Posez des questions sur les compétences, projets ou expériences de Youssef...",
    "chatbot.welcome": "Bonjour ! Je suis l'assistant IA de Youssef. Je peux vous parler de ses compétences, projets, expériences et comment le contacter. Que souhaitez-vous savoir ?",
    "chatbot.send": "Envoyer",
    "chatbot.thinking": "Réflexion...",

    // Certifications
    "certs.title": "Certifications &",
    "certs.credentials": "Diplômes",
    "certs.subtitle": "Expertise validée en cloud, IA, data science et ingénierie.",

    // Volunteering
    "volunteer.title": "Leadership &",
    "volunteer.community": "Communauté",
    "volunteer.subtitle": "Faire avancer les projets et les personnes au-delà du code.",

    // Languages
    "languages.title": "Langues",
    "languages.subtitle": "Communiquer à travers cultures et contextes.",
    "languages.arabic": "Arabe",
    "languages.arabicLevel": "Natif / Bilingue",
    "languages.french": "Français",
    "languages.frenchLevel": "Compétence professionnelle",
    "languages.english": "Anglais",
    "languages.englishLevel": "Compétence professionnelle",

    // Contact extras
    "contact.openCta": "Ouvert aux opportunités — discutons",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-language');
    return (saved as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
