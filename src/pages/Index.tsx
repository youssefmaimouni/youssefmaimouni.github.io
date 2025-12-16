import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight, ChevronDown, MapPin, Phone, Calendar, Award, Users, Briefcase, GraduationCap, Brain, Database, Cloud, Code2, CheckCircle, ExternalLink, Shield, Newspaper, Droplets, Trophy, Home, QrCode, Boxes, Medal, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import profilePicture from "@/assets/profile-picture.jpg";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

// Certifications data
const certifications = [
  { title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", issuer: "Oracle", year: "2025" },
  { title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", issuer: "Oracle", year: "2025" },
  { title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", issuer: "Oracle", year: "2025" },
  { title: "Machine Learning with Python", issuer: "IBM SkillsBuild", year: "2024" },
  { title: "Applied Data Science with Python – Level 2", issuer: "IBM", year: "2024" },
  { title: "Data Analysis with Python", issuer: "IBM SkillsBuild", year: "2024" },
  { title: "Data Visualization with Python", issuer: "IBM SkillsBuild", year: "2024" },
  { title: "Python Essentials 1 & 2", issuer: "Cisco", year: "2024" },
];

const Index = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Skills data
  const skillCategories = [
    { title: t("skills.aiMl"), icon: Brain, color: "primary", skills: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "CNN", "LSTM", "Transformers", "XGBoost", "Deep Learning"] },
    { title: t("skills.nlpLlms"), icon: Code2, color: "secondary", skills: ["BERT", "mT5", "TF-IDF", "Text Mining", "RAG", "K-Means", "LLMs", "Stable Diffusion"] },
    { title: t("skills.computerVision"), icon: Brain, color: "primary", skills: ["YOLOv8", "Detectron2", "Mask R-CNN", "ResNet-50", "OpenCV", "Object Detection"] },
    { title: t("skills.dataBigData"), icon: Database, color: "secondary", skills: ["SQL", "MySQL", "MongoDB", "Pandas", "NumPy", "Power BI", "PCA", "t-SNE"] },
    { title: t("skills.webDev"), icon: Code2, color: "primary", skills: ["React.js", "TypeScript", "Laravel", "Flask", "FastAPI", "Tailwind CSS", "REST APIs"] },
    { title: t("skills.cloudDevops"), icon: Cloud, color: "secondary", skills: ["Azure", "AWS", "OCI", "Docker", "Git", "GitHub", "CI/CD", "Agile"] },
  ];

  const softSkills = language === "en" 
    ? ["Leadership", "Team Management", "Project Management", "Problem Solving", "Communication", "Critical Thinking"]
    : ["Leadership", "Gestion d'équipe", "Gestion de projet", "Résolution de problèmes", "Communication", "Esprit critique"];

  // Projects data
  const featuredProjects = [
    { title: language === "en" ? "Politixpert – Moroccan Political Expert System" : "Politixpert – Système Expert Politique Marocain", description: language === "en" ? "AI-based expert system using Moroccan political data from 6 official sources. End-to-end NLP preprocessing, multilingual embeddings with intfloat/multilingual-e5-large, FAISS semantic search, and RAG architecture with Qwen 1.5B." : "Système expert basé sur l'IA utilisant des données politiques marocaines de 6 sources officielles. Prétraitement NLP, embeddings multilingues, recherche sémantique FAISS et architecture RAG avec Qwen 1.5B.", icon: Brain, tags: ["NLP", "LLMs", "RAG", "FAISS", "Qwen"], github: "https://github.com/youssefmaimouni/politixpert" },
    { title: language === "en" ? "Arabic News Clustering (NLP)" : "Clustering d'Articles Arabes (NLP)", description: language === "en" ? "Processed 52,000+ Arabic articles. Hybrid vectorization (TF-IDF + BERT), K-Means clustering, mT5 summarization." : "Traitement de 52 000+ articles arabes. Vectorisation hybride, clustering K-Means, résumé mT5.", icon: Newspaper, tags: ["NLP", "BERT", "TF-IDF", "K-Means"], github: "https://github.com/youssefmaimouni" },
    { title: language === "en" ? "Smart Water Leak Detection" : "Détection Intelligente de Fuites d'Eau", description: language === "en" ? "1st Place Winner at DevJam Hackathon 2025. IoT + AI solution for real-time water leak detection." : "1ère Place au Hackathon DevJam 2025. Solution IoT + IA pour la détection de fuites d'eau.", icon: Droplets, tags: ["IoT", "Machine Learning", "Python"], badge: true, github: "https://github.com/youssefmaimouni/AquaFlow" },
  ];

  const otherProjects = [
    { title: language === "en" ? "Intelligent Shelf Product Detection" : "Détection Intelligente de Produits", icon: Boxes, tags: ["YOLOv8", "Detectron2", "ResNet-50"], github: "https://github.com/youssefmaimouni/SCINC" },
    { title: language === "en" ? "Cloud Cybersecurity with AI" : "Cybersécurité Cloud avec IA", icon: Shield, tags: ["Python", "Azure", "AWS", "Deep Learning"], github: "https://github.com/youssefmaimouni" },
    { title: language === "en" ? "Exam Attendance System" : "Système de Présence", icon: QrCode, tags: ["React", "React Native", "Laravel"], github: "https://github.com/youssefmaimouni/fsac-pve" },
  ];

  // Experience data
  const workExperience = [
    { title: language === "en" ? "Data Science Intern" : "Stagiaire Data Science", company: "SCInc.", period: language === "en" ? "June – Sept 2025" : "Juin – Sept 2025", description: language === "en" ? "Developed computer vision pipeline for retail shelf analysis using YOLOv8, Detectron2, ResNet-50." : "Pipeline de vision par ordinateur pour l'analyse des rayons retail.", tags: ["YOLOv8", "Detectron2", "Python"] },
    { title: language === "en" ? "Web Developer Intern" : "Stagiaire Développeur Web", company: "Webagency Maroc", period: language === "en" ? "June – Aug 2024" : "Juin – Août 2024", description: language === "en" ? "Full-stack applications using Laravel, React.js, and Tailwind CSS." : "Applications full-stack avec Laravel, React.js et Tailwind CSS.", tags: ["Laravel", "React.js", "Tailwind"] },
  ];

  const education = [
    { title: language === "en" ? "Master's in Computer Science & Mathematics for Data Science" : "Master en Informatique et Mathématiques pour la Science des Données", school: "ENSA Khouribga", period: "2024 – 2026" },
    { title: language === "en" ? "Bachelor's in Mathematical and Computer Sciences" : "Licence en Sciences Mathématiques et Informatiques", school: language === "en" ? "Faculty of Sciences Aïn Chock" : "Faculté des Sciences Aïn Chock", period: "2021 – 2024" },
  ];

  const awards = [
    { title: language === "en" ? "1st Place – DevJam Hackathon" : "1ère Place – Hackathon DevJam", event: "ENSIAS IT Club, 2025", icon: Trophy, color: "text-amber-500", bgColor: "bg-amber-500/10" },
    { title: language === "en" ? "2nd Place – Problem Solving" : "2ème Place – Problem Solving", event: "Open Source Days 14.0, 2024", icon: Medal, color: "text-slate-300", bgColor: "bg-slate-400/10" },
    { title: language === "en" ? "3rd Place – Hackathon" : "3ème Place – Hackathon", event: "Open Source Days 14.0, 2024", icon: Award, color: "text-amber-700", bgColor: "bg-amber-700/10" },
  ];

  const stats = [
    { label: t("about.yearsLearning"), value: "4+", icon: Calendar },
    { label: t("about.projectsCompleted"), value: "15+", icon: Briefcase },
    { label: t("about.hackathonsWon"), value: "3", icon: Award },
    { label: t("about.techCommunities"), value: "2", icon: Users },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from("contact_messages")
        .insert({
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
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/4 -left-16 md:-left-32 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-[80px] md:blur-[128px]" />
        <div className="absolute bottom-1/4 -right-16 md:-right-32 w-48 md:w-96 h-48 md:h-96 bg-secondary/20 rounded-full blur-[80px] md:blur-[128px]" />
        
        <motion.div className="absolute top-20 right-4 md:right-20 w-3 md:w-4 h-3 md:h-4 rounded-full bg-primary/60 hidden sm:block" animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-40 left-4 md:left-20 w-2 md:w-3 h-2 md:h-3 rounded-full bg-secondary/60 hidden sm:block" animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} />

        <div className="container relative z-10 px-4 sm:px-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <motion.div variants={itemVariants} className="relative">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 glow-gradient">
                  <img src={profilePicture} alt="Youssef Maimouni" className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  {t("home.openForPFE")}
                </div>
              </motion.div>

              <div className="flex-1 text-center lg:text-left">
                <motion.div variants={itemVariants} className="mb-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
                    📍 {t("home.location")}
                  </span>
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 sm:mb-4">
                  {t("home.greeting")} <span className="gradient-text">{t("home.name")}</span>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4">
                  {t("home.role")}
                </motion.p>

                <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mb-6 sm:mb-8 leading-relaxed">
                  {t("home.description")}
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                  <Button variant="gradient" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                    {t("home.viewProjects")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="hero" size="lg" asChild>
                    <a href="/MAIMOUNI_YOUSSEF_CV.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      {t("home.downloadCV")}
                    </a>
                  </Button>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-4">
                  <a href="https://github.com/youssefmaimouni" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass glass-hover text-muted-foreground hover:text-primary">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/maimouni-youssef/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass glass-hover text-muted-foreground hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="mailto:youssefmaimouni03@gmail.com" className="p-3 rounded-xl glass glass-hover text-muted-foreground hover:text-primary">
                    <Mail className="h-5 w-5" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs">{t("home.learnMore")}</span>
            <ChevronDown className="h-5 w-5" />
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24">
        <div className="container px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">{t("about.title")} <span className="gradient-text">{t("about.me")}</span></h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">{t("about.subtitle")}</p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-1">
                <div className="glass rounded-2xl p-6">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/30">
                      <img src={profilePicture} alt="Youssef Maimouni" className="w-full h-full object-cover object-top" />
                    </div>
                    <h3 className="text-xl font-bold">Youssef Maimouni</h3>
                    <p className="text-primary text-sm">{t("home.role")}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm"><MapPin className="h-4 w-4 text-primary shrink-0" /><span className="text-muted-foreground truncate">{t("home.location")}</span></div>
                    <div className="flex items-center gap-3 text-sm"><Phone className="h-4 w-4 text-primary shrink-0" /><span className="text-muted-foreground">+212 682419203</span></div>
                    <div className="flex items-center gap-3 text-sm"><Mail className="h-4 w-4 text-primary shrink-0" /><span className="text-muted-foreground text-xs sm:text-sm truncate">youssefmaimouni03@gmail.com</span></div>
                    <div className="flex items-center gap-3 text-sm"><GraduationCap className="h-4 w-4 text-primary shrink-0" /><span className="text-muted-foreground text-xs sm:text-sm">Master's Student, ENSA Khouribga</span></div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-8">
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">👨‍💻</span>{t("about.whoIAm")}</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>{t("about.bio1")}</p>
                    <p>{t("about.bio2")}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="glass rounded-xl p-4 text-center hover:border-primary/30 transition-all cursor-pointer" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3"><stat.icon className="h-5 w-5 text-primary" /></div>
                      <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="container px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">{t("skills.title")} <span className="gradient-text">{t("skills.techStack")}</span></h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">{t("skills.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
            {skillCategories.map((category, index) => (
              <motion.div key={category.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="glass glass-hover rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${category.color === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}><category.icon className="h-5 w-5" /></div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${category.color === "primary" ? "bg-primary/10 text-primary/90" : "bg-secondary/10 text-secondary/90"}`}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">{t("skills.softSkills")}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill) => (<span key={skill} className="px-4 py-2 rounded-full glass text-sm font-medium">{skill}</span>))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8"><Award className="h-6 w-6 text-primary" /><h3 className="text-2xl font-bold">{t("skills.certifications")}</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div key={cert.title} initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="glass rounded-xl p-4 flex items-start gap-3 hover:border-primary/30 transition-all">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div><h4 className="font-medium text-sm">{cert.title}</h4><p className="text-xs text-muted-foreground">{cert.issuer} • {cert.year}</p></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent" /></div>
        <div className="container px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">{t("projects.title")} <span className="gradient-text">{t("projects.featured")}</span></h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">{t("projects.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto mb-10 sm:mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }} whileHover={{ y: -8 }} className="group relative">
                {project.badge && <div className="absolute -top-3 -right-3 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-background text-xs font-semibold z-10"><Trophy className="h-3 w-3" /> 1st Place</div>}
                <div className="h-full glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5"><project.icon className="h-6 w-6" /></div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">{project.tags.map((tag) => (<span key={tag} className="px-2.5 py-1 rounded-md bg-muted/50 text-muted-foreground text-xs font-medium">{tag}</span>))}</div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"><Github className="h-4 w-4" /> {t("projects.viewCode")}</a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">{t("projects.other")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherProjects.map((project, index) => (
                <motion.a key={project.title} href={project.github} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} whileHover={{ y: -4 }} className="glass rounded-xl p-5 hover:border-primary/30 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary"><project.icon className="h-5 w-5" /></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2"><h4 className="font-semibold group-hover:text-primary transition-colors">{project.title}</h4><ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" /></div>
                      <div className="flex flex-wrap gap-1.5">{project.tags.map((tag) => (<span key={tag} className="px-2 py-0.5 rounded bg-muted/50 text-muted-foreground text-xs">{tag}</span>))}</div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
              <a href="https://github.com/youssefmaimouni" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:border-primary/50 transition-all text-muted-foreground hover:text-primary"><Github className="h-5 w-5" /> {t("projects.viewAll")} <ExternalLink className="h-4 w-4" /></a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">{t("experience.title")} <span className="gradient-text">{t("experience.education")}</span></h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">{t("experience.subtitle")}</p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-10 sm:space-y-16">
            {/* Work */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-8"><div className="p-2.5 rounded-xl bg-primary/10 text-primary"><Briefcase className="h-5 w-5" /></div><h3 className="text-2xl font-bold">{t("experience.work")}</h3></div>
              <div className="relative pl-8 border-l-2 border-border space-y-8">
                {workExperience.map((job, index) => (
                  <motion.div key={job.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative">
                    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                    <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                        <div><h4 className="font-semibold text-lg">{job.title}</h4><p className="text-primary">{job.company}</p></div>
                        <div className="flex items-center gap-1.5 text-muted-foreground text-sm"><Calendar className="h-3.5 w-3.5" />{job.period}</div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2">{job.tags.map((tag) => (<span key={tag} className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">{tag}</span>))}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-8"><div className="p-2.5 rounded-xl bg-secondary/10 text-secondary"><GraduationCap className="h-5 w-5" /></div><h3 className="text-2xl font-bold">{t("experience.edu")}</h3></div>
              <div className="relative pl-8 border-l-2 border-border space-y-8">
                {education.map((edu, index) => (
                  <motion.div key={edu.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative">
                    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                    <div className="glass rounded-xl p-6 hover:border-secondary/30 transition-all">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div><h4 className="font-semibold text-lg">{edu.title}</h4><p className="text-secondary text-sm">{edu.school}</p></div>
                        <div className="flex items-center gap-1.5 text-muted-foreground text-sm"><Calendar className="h-3.5 w-3.5" />{edu.period}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-8"><div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500"><Trophy className="h-5 w-5" /></div><h3 className="text-2xl font-bold">{t("experience.awards")}</h3></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {awards.map((award, index) => (
                  <motion.div key={award.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -5 }} className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-all">
                    <div className={`w-16 h-16 rounded-full ${award.bgColor} flex items-center justify-center mx-auto mb-5`}><award.icon className={`h-7 w-7 ${award.color}`} /></div>
                    <h4 className="font-semibold text-lg mb-2">{award.title}</h4>
                    <p className="text-primary text-sm">{award.event}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">{t("contact.title")} <span className="gradient-text">{t("contact.connect")}</span></h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">{t("contact.getInTouch")}</h3>
                <div className="space-y-4">
                  <a href="mailto:youssefmaimouni03@gmail.com" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass rounded-xl hover:border-primary/30 transition-all group">
                    <div className="p-2 sm:p-2.5 rounded-lg bg-primary/10 text-primary shrink-0"><Mail className="h-4 sm:h-5 w-4 sm:w-5" /></div>
                    <div className="min-w-0"><p className="text-xs sm:text-sm text-muted-foreground">{t("contact.email")}</p><p className="font-medium group-hover:text-primary transition-colors text-sm sm:text-base truncate">youssefmaimouni03@gmail.com</p></div>
                  </a>
                  <a href="tel:+212682419203" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass rounded-xl hover:border-primary/30 transition-all group">
                    <div className="p-2 sm:p-2.5 rounded-lg bg-primary/10 text-primary shrink-0"><Phone className="h-4 sm:h-5 w-4 sm:w-5" /></div>
                    <div><p className="text-xs sm:text-sm text-muted-foreground">Phone</p><p className="font-medium group-hover:text-primary transition-colors text-sm sm:text-base">+212 682419203</p></div>
                  </a>
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass rounded-xl">
                    <div className="p-2 sm:p-2.5 rounded-lg bg-secondary/10 text-secondary shrink-0"><MapPin className="h-4 sm:h-5 w-4 sm:w-5" /></div>
                    <div><p className="text-xs sm:text-sm text-muted-foreground">Location</p><p className="font-medium text-sm sm:text-base">{t("home.location")}</p></div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">{t("contact.followMe")}</h3>
                <div className="flex gap-3">
                  <a href="https://github.com/youssefmaimouni" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:border-primary/50 hover:text-primary transition-all"><Github className="h-5 w-5" /></a>
                  <a href="https://www.linkedin.com/in/maimouni-youssef/" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:border-primary/50 hover:text-primary transition-all"><Linkedin className="h-5 w-5" /></a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">{t("contact.downloadResume")}</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="hero" asChild className="flex-1"><a href="/MAIMOUNI_YOUSSEF_CV.pdf" download><Download className="mr-2 h-4 w-4" />{t("contact.englishCV")}</a></Button>
                  <Button variant="hero" asChild className="flex-1"><a href="/Youssef_maimouni_CV_FR.pdf" download><Download className="mr-2 h-4 w-4" />{t("contact.frenchCV")}</a></Button>
                </div>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold mb-3">{t("contact.lookingForPFE")}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t("contact.pfeDescription")}</p>
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /><span className="text-sm text-green-500">{t("contact.openForOpportunities")}</span></div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">{t("contact.name")}</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground" placeholder={t("contact.namePlaceholder")} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">{t("contact.email")}</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground" placeholder={t("contact.emailPlaceholder")} />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">{t("contact.subject")}</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground" placeholder={t("contact.subjectPlaceholder")} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">{t("contact.message")}</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none" placeholder={t("contact.messagePlaceholder")} />
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
