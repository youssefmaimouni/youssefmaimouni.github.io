import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight, ChevronDown, MapPin, Phone, Calendar, Award, Users, Briefcase, GraduationCap, Brain, Database, Cloud, Code2, CheckCircle, ExternalLink, Shield, Newspaper, Droplets, Trophy, QrCode, Boxes, Medal, Send, Sparkles, Languages as LanguagesIcon, Globe, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import profilePicture from "@/assets/profile-picture.jpg";
import { useState, useMemo } from "react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

// Certifications (full list, newest first)
const certifications = [
  { title: "Retrieval-Augmented Generation for Enhanced AI Outputs", issuer: "IBM", date: "Apr 2026" },
  { title: "Deloitte Australia Data Analytics Job Simulation", issuer: "Forage", date: "Mar 2026" },
  { title: "OCI 2025 Certified Generative AI Professional", issuer: "Oracle", date: "Oct 2025" },
  { title: "OCI 2025 Certified AI Foundations Associate", issuer: "Oracle", date: "Oct 2025" },
  { title: "OCI 2025 Certified Foundations Associate", issuer: "Oracle", date: "Oct 2025" },
  { title: "SQL (Basic)", issuer: "HackerRank", date: "Dec 2025" },
  { title: "Machine Learning with Python", issuer: "IBM SkillsBuild", date: "Feb 2025" },
  { title: "Applied Data Science with Python – Level 2", issuer: "IBM", date: "Nov 2024" },
  { title: "Data Analysis with Python", issuer: "IBM SkillsBuild", date: "Nov 2024" },
  { title: "Data Visualization with Python", issuer: "IBM SkillsBuild", date: "Nov 2024" },
  { title: "Python Essentials 1 & 2", issuer: "Cisco", date: "Oct–Nov 2024" },
  { title: "Python for Data Science", issuer: "IBM", date: "Oct 2024" },
  { title: "Python 101 for Data Science", issuer: "IBM SkillsBuild", date: "Oct 2024" },
];

const Index = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
  };

  // Particles for hero
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 80,
        dy: -(Math.random() * 80 + 40),
        duration: Math.random() * 8 + 8,
        delay: Math.random() * 6,
      })),
    []
  );

  // Skills data — restructured per spec
  const skillCategories = [
    {
      title: language === "en" ? "AI & Machine Learning" : "IA & Machine Learning",
      icon: Brain,
      color: "primary",
      skills: ["Machine Learning", "Deep Learning", "Generative AI", "NLP", "RAG", "Text Mining", "Clustering", "MLflow", "LLMs"],
    },
    {
      title: language === "en" ? "Data & Analytics" : "Data & Analytique",
      icon: Database,
      color: "secondary",
      skills: ["Data Analysis", "Data Visualization", "Tableau", "Microsoft Excel", "Python", "Pandas", "NumPy"],
    },
    {
      title: language === "en" ? "Cloud & Infrastructure" : "Cloud & Infrastructure",
      icon: Cloud,
      color: "primary",
      skills: ["Oracle Cloud (OCI)", "OCI Generative AI Service", "Cloud Fundamentals", "Azure", "AWS", "Docker"],
    },
    {
      title: language === "en" ? "Dev & Tools" : "Dev & Outils",
      icon: Code2,
      color: "secondary",
      skills: ["API / Swagger", "IoT", "Mobile App Dev", "Project Deployment", "FastAPI", "Flask", "React", "Git"],
    },
    {
      title: language === "en" ? "NLP & LLMs" : "NLP & LLMs",
      icon: Sparkles,
      color: "primary",
      skills: ["BERT", "mT5", "TF-IDF", "RAG", "LLMs", "E5 Embeddings", "FAISS", "Qwen"],
    },
    {
      title: language === "en" ? "Computer Vision" : "Vision par Ordinateur",
      icon: Brain,
      color: "secondary",
      skills: ["YOLOv8", "Detectron2", "Mask R-CNN", "ResNet-50", "OpenCV"],
    },
  ];

  const softSkills =
    language === "en"
      ? ["Leadership", "Team Management", "Project Management", "Problem Solving", "Communication", "Critical Thinking"]
      : ["Leadership", "Gestion d'équipe", "Gestion de projet", "Résolution de problèmes", "Communication", "Esprit critique"];

  // Projects data
  const featuredProjects: { title: string; description: string; icon: typeof Brain; tags: string[]; github: string; badge?: boolean }[] = [
    {
      title: language === "en" ? "Legal AI Platform – TechPal" : "Plateforme Juridique IA – TechPal",
      description:
        language === "en"
          ? "Legal platform with automated document generation and an AI assistant grounded in Moroccan law and case law. RAG architecture with a hybrid pipeline (embeddings, relations, keywords), NER model, OCR for scanned documents, Qdrant for semantic search, Neo4j for relationship modeling, and a secure local deployment for sensitive data."
          : "Plateforme juridique avec génération automatique de documents et assistant IA basé sur le droit marocain et la jurisprudence. Architecture RAG avec pipeline hybride (embeddings, relations, mots-clés), modèle NER, module OCR pour documents scannés, Qdrant pour la recherche sémantique, Neo4j pour la modélisation des relations et déploiement local sécurisé pour données sensibles.",
      icon: Scale,
      tags: ["RAG", "NER", "OCR", "Qdrant", "Neo4j", "LLMs"],
      // github: "https://www.linkedin.com/in/maimouni-youssef/",
    },
    {
      title: language === "en" ? "Politixpert – Moroccan Political Expert System" : "Politixpert – Système Expert Politique Marocain",
      description:
        language === "en"
          ? "AI expert system on Moroccan political data from 6 official sources. End-to-end NLP, multilingual E5 embeddings, FAISS semantic search, and a RAG architecture with local Qwen 1.5B summarization."
          : "Système expert IA sur des données politiques marocaines (6 sources officielles). NLP de bout en bout, embeddings multilingues E5, recherche sémantique FAISS et architecture RAG avec Qwen 1.5B local.",
      icon: Brain,
      tags: ["NLP", "LLMs", "RAG", "FAISS", "Qwen"],
      github: "https://github.com/youssefmaimouni/politixpert",
    },
    {
      title: language === "en" ? "Intelligent Shelf Product Detection" : "Détection Intelligente de Produits en Rayon",
      description:
        language === "en"
          ? "Computer vision pipeline for retail shelf analysis. Detection (YOLOv8), segmentation (Mask R-CNN), classification (ResNet-50), validation (ORB + BFMatcher). Cloud deployment, Agile teamwork on large-scale datasets."
          : "Pipeline de vision par ordinateur pour l'analyse des rayons retail. Détection (YOLOv8), segmentation (Mask R-CNN), classification (ResNet-50), validation (ORB + BFMatcher). Déploiement cloud, travail Agile.",
      icon: Boxes,
      tags: ["YOLOv8", "Mask R-CNN", "ResNet-50", "Cloud"],
      github: "https://github.com/youssefmaimouni/SCINC",
    },
    // {
    //   title: language === "en" ? "Arabic News Clustering (NLP)" : "Clustering d'Articles Arabes (NLP)",
    //   description:
    //     language === "en"
    //       ? "Processed 52,000+ Arabic articles. Hybrid vectorization (TF-IDF + BERT), K-Means clustering, mT5 summarization."
    //       : "Traitement de 52 000+ articles arabes. Vectorisation hybride, clustering K-Means, résumé mT5.",
    //   icon: Newspaper,
    //   tags: ["NLP", "BERT", "TF-IDF", "K-Means"],
    //   github: "https://github.com/youssefmaimouni",
    // },
  ];

  const otherProjects = [
    { title: language === "en" ? "Smart Water Leak Detection" : "Détection Intelligente de Fuites d'Eau", icon: Droplets, tags: ["IoT", "Machine Learning", "Python"], badge: true, github: "https://github.com/youssefmaimouni/AquaFlow" },
    { title: language === "en" ? "Cloud Cybersecurity with AI" : "Cybersécurité Cloud avec IA", icon: Shield, tags: ["Python", "Azure", "AWS", "Deep Learning"], github: "https://github.com/youssefmaimouni" },
    { title: language === "en" ? "Exam Attendance System" : "Système de Présence", icon: QrCode, tags: ["React", "React Native", "Laravel"], github: "https://github.com/youssefmaimouni/fsac-pve" },
  ];

  // Experience — updated per spec
  const workExperience = [
    {
      title: language === "en" ? "Data Scientist / AI Engineer" : "Data Scientist / Ingénieur IA",
      company: "Techpal",
      website: "techpalservices.com",
      period: language === "en" ? "Feb 2026 — Present" : "Fév 2026 — Présent",
      location: "Casablanca-Settat, Morocco",
      industry: language === "en" ? "Information Technology & Services" : "Technologies de l'Information & Services",
      current: true,
      tags: ["Generative AI", "NLP", "RAG", "LLMs"],
    },
    {
      title: "Data Scientist",
      company: "SCINC",
      period: language === "en" ? "Previous role" : "Poste précédent",
      location: "Casablanca-Settat, Morocco",
      industry: language === "en" ? "Computer Vision · Retail AI" : "Vision par Ordinateur · IA Retail",
      tags: ["YOLOv8", "Detectron2", "ResNet-50"],
    },
    {
      title: language === "en" ? "Web Developer" : "Développeur Web",
      company: language === "en" ? "Freelance / Agency" : "Freelance / Agence",
      period: language === "en" ? "Earlier" : "Antérieur",
      location: "Casablanca-Settat, Morocco",
      industry: language === "en" ? "Full-stack web development" : "Développement web full-stack",
      tags: ["Laravel", "React", "Tailwind"],
    },
  ];

  const education = [
    {
      title: language === "en" ? "Master's — Computer Science & Mathematics for Data Science" : "Master — Informatique et Mathématiques pour la Science des Données",
      school: language === "en" ? "ENSA Khouribga (École Nationale des Sciences Appliquées)" : "ENSA Khouribga (École Nationale des Sciences Appliquées)",
      period: "2024 – 2026",
    },
    {
      title: language === "en" ? "Mathematics & Computer Science — Database Option" : "Mathématiques & Informatique — Option Base de Données",
      school: language === "en" ? "Faculty of Sciences Aïn Chock" : "Faculté des Sciences Aïn Chock",
      period: "2021 – 2024",
    },
  ];

  const volunteering = [
    {
      role: language === "en" ? "Head of Project Management Unit" : "Responsable de la Cellule Gestion de Projet",
      org: "JLM — ENSA Khouribga",
      period: language === "en" ? "Sep 2025 — Present" : "Sep 2025 — Présent",
    },
    {
      role: language === "en" ? "Director of Event Management & Logistics" : "Directeur Événementiel & Logistique",
      org: "ResearchX Club — ENSA Khouribga",
      period: language === "en" ? "Feb 2025 — Present" : "Fév 2025 — Présent",
    },
    {
      role: language === "en" ? "Project Manager" : "Responsable de Projet",
      org: "JLM — ENSA Khouribga",
      period: language === "en" ? "Dec 2024 — Sep 2025" : "Déc 2024 — Sep 2025",
    },
  ];

  const languagesSpoken = [
    { name: t("languages.arabic"), level: t("languages.arabicLevel"), pct: 100 },
    { name: t("languages.french"), level: t("languages.frenchLevel"), pct: 85 },
    { name: t("languages.english"), level: t("languages.englishLevel"), pct: 85 },
  ];

  const stats = [
    { label: t("about.yearsLearning"), value: "4+", icon: Calendar },
    { label: t("about.projectsCompleted"), value: "15+", icon: Briefcase },
    { label: t("about.hackathonsWon"), value: "3", icon: Award },
    { label: t("about.techCommunities"), value: "2", icon: Users },
  ];

  // Skill cloud (hero side panel)
  const skillCloud = ["Generative AI", "NLP", "RAG", "LLMs", "Python", "PyTorch", "FAISS", "OCI", "Docker", "MLflow", "Computer Vision"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_messages").insert({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "No subject",
        message: formData.message,
      });
      if (error) throw error;
      toast({ title: t("contact.messageSent"), description: t("contact.messageDescription") });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: language === "en" ? "Error" : "Erreur",
        description: language === "en" ? "Failed to send message. Please try again." : "Échec de l'envoi. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden noise">
      {/* ============== HERO ============== */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
        {/* Background layers */}
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute top-1/4 -left-20 w-72 md:w-[28rem] h-72 md:h-[28rem] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-72 md:w-[28rem] h-72 md:h-[28rem] bg-secondary/20 rounded-full blur-[120px]" />

        {/* Animated particles (hero only) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p) => (
            <span
              key={p.id}
              className="particle absolute rounded-full bg-primary/60"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                ['--dx' as never]: `${p.dx}px`,
                ['--dy' as never]: `${p.dy}px`,
                boxShadow: '0 0 8px hsl(var(--primary) / 0.8)',
              }}
            />
          ))}
        </div>

        <div className="container relative z-10 px-4 sm:px-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: copy */}
            <div className="lg:col-span-7">
              <motion.div variants={itemVariants} className="mb-5">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" /> {t("home.location")}
                </span>
              </motion.div>

              <motion.p variants={itemVariants} className="text-primary text-sm sm:text-base font-medium mb-3 tracking-wide uppercase">
                {t("home.greeting")}
              </motion.p>

              <motion.h1 variants={itemVariants} className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] mb-5">
                <span className="block">Youssef</span>
                <span className="gradient-text block">Maimouni</span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-lg sm:text-xl text-foreground/90 font-medium mb-2">
                {t("home.role")}
              </motion.p>

              <motion.p variants={itemVariants} className="text-base sm:text-lg text-muted-foreground mb-3">
                <span className="text-foreground/95 font-display">{t("home.tagline")}</span>
                <span className="block text-primary/90 text-sm sm:text-base mt-1">{t("home.taglineSub")}</span>
              </motion.p>

              <motion.p variants={itemVariants} className="text-sm sm:text-base text-muted-foreground max-w-xl mb-8 leading-relaxed">
                {t("home.description")}
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                <Button variant="gradient" size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                  {t("home.viewProjects")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <a href="https://www.linkedin.com/in/maimouni-youssef/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    {t("home.connectLinkedIn")}
                  </a>
                </Button>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <a href="https://github.com/youssefmaimouni" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl glass glass-hover text-muted-foreground hover:text-primary">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/maimouni-youssef/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl glass glass-hover text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:youssefmaimouni03@gmail.com" className="p-2.5 rounded-xl glass glass-hover text-muted-foreground hover:text-primary">
                  <Mail className="h-5 w-5" />
                </a>
              </motion.div>
            </div>

            {/* Right: floating skill cloud / stats panel */}
            <motion.div variants={itemVariants} className="lg:col-span-5 relative">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Animated gradient ring */}
                <div className="absolute inset-0 rounded-3xl gradient-border opacity-80" />
                <div className="absolute inset-[2px] rounded-3xl bg-card/70 backdrop-blur-2xl p-6 sm:p-8 flex flex-col">
                  {/* Profile chip */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/50 glow-primary shrink-0">
                      <img src={profilePicture} alt="Youssef Maimouni" className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-display font-semibold text-sm truncate">Youssef Maimouni</p>
                      <p className="text-xs text-primary truncate">AI Engineer</p>
                    </div>
                    <div className="ml-auto flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/30">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                      <span className="text-[10px] font-medium text-green-400">LIVE</span>
                    </div>
                  </div>

                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium">Tech Stack</div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {skillCloud.map((s, i) => (
                      <motion.span
                        key={s}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.05 }}
                        className="skill-tag px-2.5 py-1 rounded-md text-xs font-medium bg-primary/5 border border-primary/20 text-foreground/90"
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-3 pt-4 border-t border-border/50">
                    {stats.slice(0, 4).map((s) => (
                      <div key={s.label} className="text-center">
                        <p className="font-display text-xl font-bold gradient-text">{s.value}</p>
                        <p className="text-[10px] text-muted-foreground leading-tight">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-[10px] uppercase tracking-widest">{t("home.learnMore")}</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </motion.div>
      </section>

      {/* ============== ABOUT ============== */}
      <section id="about" className="py-20 sm:py-28 relative">
        <div className="container px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mb-12">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">— {t("about.title")} {t("about.me")}</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{t("about.whoIAm")}</h2>
            <p className="text-base text-muted-foreground">{t("about.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-1">
              <div className="glass rounded-2xl p-6 h-full">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/40 glow-primary">
                    <img src={profilePicture} alt="Youssef Maimouni" className="w-full h-full object-cover object-top" />
                  </div>
                  <h3 className="font-display text-xl font-bold">Youssef Maimouni</h3>
                  <p className="text-primary text-sm">{t("home.role")}</p>
                </div>
                <div className="space-y-3.5 text-sm">
                  <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary shrink-0" /><span className="text-muted-foreground truncate">{t("home.location")}</span></div>
                  <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary shrink-0" /><span className="text-muted-foreground">+212 682419203</span></div>
                  <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary shrink-0" /><span className="text-muted-foreground text-xs truncate">youssefmaimouni03@gmail.com</span></div>
                  <div className="flex items-center gap-3"><Briefcase className="h-4 w-4 text-primary shrink-0" /><span className="text-muted-foreground text-xs">Techpal · Casablanca</span></div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-6">
              <div className="glass rounded-2xl p-7">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-foreground/90"><span className="text-primary font-display font-semibold">Data Scientist</span> {language === "en" ? "and AI Engineer specialized in Generative AI, NLP, and RAG systems." : "et Ingénieur IA spécialisé en IA Générative, NLP et systèmes RAG."}</p>
                  <p>{t("about.bio2")}</p>
                  <p>{t("about.bio3")}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="glass glass-hover rounded-xl p-4 text-center cursor-pointer" onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2.5"><stat.icon className="h-4.5 w-4.5 text-primary" /></div>
                    <p className="font-display text-2xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-[11px] text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============== EXPERIENCE ============== */}
      <section id="experience" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">— {language === "en" ? "Career" : "Carrière"}</p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold">{language === "en" ? "Experience" : "Expérience"}</h2>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full glass border border-green-500/30 self-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-medium text-green-400">{t("home.currentlyAt")}</span>
            </div>
          </motion.div>

          <div className="max-w-5xl space-y-12">
            <div className="relative pl-8 border-l-2 border-primary/30 space-y-8">
              {workExperience.map((job, index) => (
                <motion.div key={job.title + index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative">
                  <div className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full border-4 border-background ${job.current ? "bg-green-500 animate-pulse" : "bg-primary"}`} />
                  <div className="glass glass-hover rounded-2xl p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
                      <div>
                        <h4 className="font-display font-semibold text-lg sm:text-xl">{job.title}</h4>
                        <p className="text-primary font-medium">
                          {job.company}
                          {job.website && (
                            <a href={`https://${job.website}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-xs ml-2 inline-flex items-center gap-1">
                              <ExternalLink className="h-3 w-3" />{job.website}
                            </a>
                          )}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{job.period}</div>
                        <div className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{job.location}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{job.industry}</p>
                    <div className="flex flex-wrap gap-2">{job.tags.map((tag) => (<span key={tag} className="skill-tag px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-medium">{tag}</span>))}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6"><div className="p-2.5 rounded-xl bg-secondary/10 text-secondary"><GraduationCap className="h-5 w-5" /></div><h3 className="font-display text-2xl font-bold">{t("experience.edu")}</h3></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {education.map((edu, index) => (
                  <motion.div key={edu.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="glass glass-hover rounded-2xl p-6">
                    <div className="flex items-start gap-3 mb-2">
                      <GraduationCap className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-display font-semibold">{edu.title}</h4>
                        <p className="text-secondary text-sm mt-1">{edu.school}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-xs mt-3"><Calendar className="h-3.5 w-3.5" />{edu.period}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============== SKILLS ============== */}
      <section id="skills" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mb-12">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">— {t("skills.title")} {t("skills.techStack")}</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{language === "en" ? "Technical Toolkit" : "Outillage Technique"}</h2>
            <p className="text-base text-muted-foreground">{t("skills.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mb-16">
            {skillCategories.map((category, index) => (
              <motion.div key={category.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="glass glass-hover rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${category.color === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}><category.icon className="h-5 w-5" /></div>
                  <h3 className="font-display text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className={`skill-tag px-3 py-1.5 rounded-lg text-xs font-medium border ${category.color === "primary" ? "bg-primary/5 border-primary/20 text-foreground/90" : "bg-secondary/5 border-secondary/20 text-foreground/90"}`}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-5xl">
            <h3 className="font-display text-2xl font-bold mb-6">{t("skills.softSkills")}</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (<span key={skill} className="skill-tag px-4 py-2 rounded-full glass text-sm font-medium">{skill}</span>))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============== PROJECTS ============== */}
      <section id="projects" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <div className="container px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mb-12">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">— {t("projects.title")} {t("projects.featured")}</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{language === "en" ? "Selected Work" : "Travaux Sélectionnés"}</h2>
            <p className="text-base text-muted-foreground">{t("projects.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.12 }} whileHover={{ y: -6 }} className="group relative">
                {project.badge && <div className="absolute -top-3 -right-3 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-background text-xs font-semibold z-10"><Trophy className="h-3 w-3" /> 1st Place</div>}
                <div className="h-full glass glass-hover rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5"><project.icon className="h-6 w-6" /></div>
                  <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">{project.tags.map((tag) => (<span key={tag} className="px-2.5 py-1 rounded-md bg-muted/50 text-muted-foreground text-xs font-medium">{tag}</span>))}</div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"><Github className="h-4 w-4" /> {t("projects.viewCode")}</a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-7xl">
            <h3 className="font-display text-2xl font-bold mb-6">{t("projects.other")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherProjects.map((project, index) => (
                <motion.a key={project.title} href={project.github} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} whileHover={{ y: -4 }} className="glass glass-hover rounded-xl p-5 group relative">
                  {project.badge && <div className="absolute -top-2 -right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-background text-[10px] font-semibold"><Trophy className="h-2.5 w-2.5" /> 1st</div>}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary"><project.icon className="h-5 w-5" /></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2"><h4 className="font-display font-semibold group-hover:text-primary transition-colors">{project.title}</h4><ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" /></div>
                      <div className="flex flex-wrap gap-1.5">{project.tags.map((tag) => (<span key={tag} className="px-2 py-0.5 rounded bg-muted/50 text-muted-foreground text-xs">{tag}</span>))}</div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
            <div className="text-center mt-10">
              <a href="https://github.com/youssefmaimouni" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover text-muted-foreground hover:text-primary"><Github className="h-5 w-5" /> {t("projects.viewAll")} <ExternalLink className="h-4 w-4" /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============== CERTIFICATIONS ============== */}
      <section id="certifications" className="py-20 sm:py-28 relative">
        <div className="container px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mb-12">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">— {t("certs.title")} {t("certs.credentials")}</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{t("certs.credentials")}</h2>
            <p className="text-base text-muted-foreground">{t("certs.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass glass-hover rounded-xl p-5 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center shrink-0">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-display font-semibold text-sm leading-snug mb-1">{cert.title}</h4>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="text-primary font-medium">{cert.issuer}</span>
                    <span className="text-muted-foreground">{cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== VOLUNTEERING & LANGUAGES ============== */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl">
            {/* Volunteering */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8">
                <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">— {t("volunteer.title")} {t("volunteer.community")}</p>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3">{t("volunteer.community")}</h2>
                <p className="text-sm text-muted-foreground">{t("volunteer.subtitle")}</p>
              </motion.div>

              <div className="space-y-4">
                {volunteering.map((v, i) => (
                  <motion.div key={v.role + i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass glass-hover rounded-xl p-5 flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-secondary/10 text-secondary shrink-0">
                      <Users className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-semibold">{v.role}</h4>
                      <p className="text-sm text-secondary">{v.org}</p>
                      <p className="text-xs text-muted-foreground mt-1 inline-flex items-center gap-1.5"><Calendar className="h-3 w-3" />{v.period}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8">
                <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">— {t("languages.title")}</p>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 inline-flex items-center gap-3">
                  <Globe className="h-7 w-7 text-primary" /> {t("languages.title")}
                </h2>
                <p className="text-sm text-muted-foreground">{t("languages.subtitle")}</p>
              </motion.div>

              <div className="glass rounded-2xl p-6 space-y-5">
                {languagesSpoken.map((l, i) => (
                  <motion.div key={l.name} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display font-semibold text-sm">{l.name}</span>
                      <span className="text-xs text-muted-foreground">{l.level}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${l.pct}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }} className="h-full bg-gradient-to-r from-primary to-secondary rounded-full" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CONTACT ============== */}
      <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mb-12">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">— {t("contact.title")} {t("contact.connect")}</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{t("contact.openCta")}</h2>
            <p className="text-base text-muted-foreground">{t("contact.subtitle")}</p>
          </motion.div>

          <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
              <div className="space-y-3">
                <a href="mailto:youssefmaimouni03@gmail.com" className="flex items-center gap-4 p-4 glass glass-hover rounded-xl group">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0"><Mail className="h-5 w-5" /></div>
                  <div className="min-w-0"><p className="text-xs text-muted-foreground">{t("contact.email")}</p><p className="font-medium group-hover:text-primary transition-colors text-sm truncate">youssefmaimouni03@gmail.com</p></div>
                </a>
                <a href="https://www.linkedin.com/in/maimouni-youssef/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 glass glass-hover rounded-xl group">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0"><Linkedin className="h-5 w-5" /></div>
                  <div><p className="text-xs text-muted-foreground">LinkedIn</p><p className="font-medium group-hover:text-primary transition-colors text-sm">linkedin.com/in/maimouni-youssef</p></div>
                </a>
                <div className="flex items-center gap-4 p-4 glass rounded-xl">
                  <div className="p-2.5 rounded-lg bg-secondary/10 text-secondary shrink-0"><MapPin className="h-5 w-5" /></div>
                  <div><p className="text-xs text-muted-foreground">Location</p><p className="font-medium text-sm">{t("home.location")}</p></div>
                </div>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-sm text-green-400 font-medium">{t("contact.openCta")}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{t("contact.pfeDescription")}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="hero" asChild className="flex-1"><a href="/MAIMOUNI_YOUSSEF_CV.pdf" download><Download className="mr-2 h-4 w-4" />{t("contact.englishCV")}</a></Button>
                  <Button variant="hero" asChild className="flex-1"><a href="/Youssef_maimouni_CV_FR.pdf" download><Download className="mr-2 h-4 w-4" />{t("contact.frenchCV")}</a></Button>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">{t("contact.name")}</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground" placeholder={t("contact.namePlaceholder")} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">{t("contact.email")}</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground" placeholder={t("contact.emailPlaceholder")} />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">{t("contact.subject")}</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground" placeholder={t("contact.subjectPlaceholder")} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">{t("contact.message")}</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none" placeholder={t("contact.messagePlaceholder")} />
                </div>
                <Button type="submit" variant="gradient" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? t("contact.sending") : (<>{t("contact.send")}<Send className="ml-2 h-4 w-4" /></>)}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
