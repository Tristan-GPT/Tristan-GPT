import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navbar: {
        home: 'Home',
        about: 'About',
        music: 'Music',
        projects: 'Projects',
        menu: 'Menu',
        youtube: 'YouTube',
        github: 'GitHub',
        instagram: 'Instagram',
        mail: 'Mail',
        lang_en: 'English',
        lang_fr: 'French',
        lang_select: 'Language',
      },
      hero: {
        title: "I'm Tristan Jacob & I'm a developer",
        subtitle: 'I design and code websites, Discord bots and APIs with React, TypeScript and build useful tools.',
        cta_projects: 'View projects',
        cta_about: 'About',
      },
      home: {
        presence_title: 'Presence',
        projects_title: 'Recent projects',
        networks_title: 'Networks',
      },
      about: {
        title: 'About',
        text:
          "I started coding in 2020 by learning JavaScript. I built Discord bots and many other projects. Over time I learned Python, HTML/CSS and TypeScript. I use frameworks like Discord.js, Express, React and Vite. My main tools today are pnpm, React, Discord.js with TypeScript, Express, MySQL and MongoDB. I use Visual Studio Code and JetBrains IDEs.",
      },
      projects: {
        title: 'Projects',
        text: 'Here are some of my favorite projects.',
        miralys: { name: 'Miralys', desc: 'Tech organisation: bots, tools and platforms.' },
        lexkess: { name: 'LEXKESS', desc: 'Artistic & musical projects: releases, production and branding.' },
        portfolio: { name: 'Portfolio (new)', desc: 'Portfolio redesign — animations and modern UI.' },
        ayden: { name: 'Ayden', desc: 'A Discord bot combining many features.' },
        kairo: { name: 'Kairo', desc: 'A powerful AI.' },
        tournament: { name: 'Miralys Tournament', desc: 'E-sport/Sport tournament manager.' },
        kolba: { name: 'Kolba', desc: 'A programming language to compile COBOL to modern languages.' },
        discordian: { name: 'Discordian', desc: 'A framework built on Discord.js.' },
      },
      
      tech: {
        react: 'React',
        typescript: 'TypeScript',
        monorepo: 'Monorepo',
        dev: 'Dev',
        ceo: 'CEO',
        music: 'Music',
        artist: 'Artist',
        production: 'Production',
        framer_motion: 'Framer Motion',
      },
      music: {
        title: 'Music',
        description: 'A showcase of musical projects and releases.',
        listen: 'Listen',
        tracks: [
          { name: 'PROJ3KT', desc: "A collection of old productions created at the beginning of my adventure in electronic music.", url: 'https://open.spotify.com/intl-fr/artist/4tPQ4WRIozeNceVL03wdJU?si=iwDg3blmR1qfaqtfGewzWg', image: '/music-cover-1.png' },
          { name: 'Soon...', desc: "Soon...", url: 'https://open.spotify.com/intl-fr/artist/4tPQ4WRIozeNceVL03wdJU?si=iwDg3blmR1qfaqtfGewzWg', image: '/music-cover-1.png' },
          { name: 'SH∆TTR† Collective', desc: "My music collective created very recently.", url: 'https://open.spotify.com/intl-fr/artist/4tPQ4WRIozeNceVL03wdJU?si=iwDg3blmR1qfaqtfGewzWg', image: '/music-cover-1.png' },
          { name: 'Venom', desc: "Cover of the song Venom by The Hyb-D Project, one of my cover projects.", url: 'https://youtu.be/B-B3Hlhey8s?si=N_GG3DDF8NgdAMO4', image: '/music-cover-2.png' },
        ],
      },
      footer: { about: 'About', projects: 'Projects', contact: 'Contact' },
      notfound: { title: 'Page Not Found', text: 'Sorry, the page you are looking for does not exist.' },
    },
  },
  fr: {
    translation: {
      navbar: {
        home: 'Accueil',
        about: 'À propos',
        music: 'Musique',
        projects: 'Projets',
        menu: 'Menu',
        youtube: 'YouTube',
        github: 'GitHub',
        instagram: 'Instagram',
        mail: 'Mail',
        lang_en: 'Anglais',
        lang_fr: 'Français',
        lang_select: 'Langue',
      },
      tech: {
        react: 'React',
        typescript: 'TypeScript',
        monorepo: 'Monorepo',
        dev: 'Dev',
        ceo: 'CEO',
        music: 'Musique',
        artist: 'Artiste',
        production: 'Production',
        framer_motion: 'Framer Motion',
      },
      hero: {
        title: "Je suis Tristan Jacob & je suis un développeur",
        subtitle:
          "Je conçois et développe des sites web, des bots Discord et des APIs avec React, TypeScript et je crée des outils utiles.",
        cta_projects: 'Voir mes projets',
        cta_about: 'À propos',
      },
      home: {
        presence_title: 'Présence',
        projects_title: 'Projets récents',
        networks_title: 'Réseaux',
      },
      about: {
        title: 'À propos',
        text:
          "J'ai commencé à coder en 2020 en apprenant JavaScript. J'ai créé des bots Discord et d'autres projets. Avec le temps j'ai appris Python, HTML/CSS et TypeScript. J'utilise Discord.js, Express, React et Vite. Mes outils principaux sont pnpm, React, Discord.js avec TypeScript, Express, MySQL et MongoDB.",
      },
      projects: {
        title: 'Projets',
        text: 'Voici quelques-uns de mes projets préférés.',
        miralys: { name: 'Miralys', desc: "Organisation tech : bots, outils et plateformes." },
        lexkess: { name: 'LEXKESS', desc: "Projets artistiques et musicaux : sorties, production et branding." },
        portfolio: { name: 'Portfolio (nouveau)', desc: "Refonte du portfolio — animations et design moderne." },
        ayden: { name: 'Ayden', desc: "Un bot Discord combinant plusieurs fonctionnalités." },
        kairo: { name: 'Kairo', desc: "Une IA puissante." },
        tournament: { name: 'Miralys Tournament', desc: "Gestionnaire de tournois E-sport/Sport." },
        kolba: { name: 'Kolba', desc: "Un langage pour compiler du COBOL vers des langages modernes." },
        discordian: { name: 'Discordian', desc: "Un framework basé sur Discord.js." },
      },
      music: {
        title: 'Music',
        description: 'Une vitrine de projets et sorties musicales.',
        listen: 'Écouter',
        tracks: [
          { name: 'PROJ3KT', desc: "Ensemble de vieilles productions créé au début de mon aventure en musique électronique.", url: 'https://open.spotify.com/intl-fr/artist/4tPQ4WRIozeNceVL03wdJU?si=iwDg3blmR1qfaqtfGewzWg', image: '/music-cover-1.png' },
          { name: 'Soon...', desc: "Soon...", url: 'https://open.spotify.com/intl-fr/artist/4tPQ4WRIozeNceVL03wdJU?si=iwDg3blmR1qfaqtfGewzWg', image: '/music-cover-1.png' },
          { name: 'SH∆TTR† Collective', desc: "Mon collectif musical créé très récemment.", url: 'https://open.spotify.com/intl-fr/artist/4tPQ4WRIozeNceVL03wdJU?si=iwDg3blmR1qfaqtfGewzWg', image: '/music-cover-1.png' },
          { name: 'Venom', desc: "Cover de la chanson Venom de The Hyb-D Project, l'un de mes projets covers.", url: 'https://youtu.be/B-B3Hlhey8s?si=N_GG3DDF8NgdAMO4', image: '/music-cover-2.png' },
        ]
      },
      common: { view: 'Voir', code: 'Code' },
      footer: { about: 'À propos', projects: 'Projets', contact: 'Contact' },
      notfound: { title: 'Page non trouvée', text: "Désolé, la page que vous recherchez n'existe pas." },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
