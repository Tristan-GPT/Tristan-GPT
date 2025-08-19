import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navbar: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        youtube: 'YouTube',
        github: 'GitHub',
        instagram: 'Instagram',
        mail: 'Mail',
        lang_en: 'English',
        lang_fr: 'French',
        lang_select: 'Language',
      },
      intro: {
        text: "I'm <span class='highlight'>Tristan-GPT</span><br/> & I'm a developer",
        text_fr: "Je suis <span class='highlight'>Tristan-GPT</span><br/> & je suis un développeur"
      },
      about: {
        title: 'About',
        text: "I started to code in 2020 by learning Javascript. I was coding Discord bots & I created many projects. As time went on, I learned other programming languages such as Python, HTML/CSS and the latest, Typescript. I know many frameworks like Discord.js, Express, React, Vite, etc. Today, my main tools are PNPM to replace NPM, React for all my websites, Discord.js with Typescript for all my bots, Express for my APIs and MySQL and MongoDB for Databases. My IDEs are Visual Studio Code, IntelliJ IDEA, PyCharm, WebStorm, CLion, Rider, RustRover, Arduino IDE & rarely Visual Studio."
      },
      projects: {
        title: 'Projects',
        text: 'Here are some of my favorite projects.',
        miralys: {
          name: 'Miralys',
          desc: 'Tech Organization: Ayden discord bot, Kairo, Miralys Tournament, Discordian & Kolba',
        },
        ayden: {
          name: 'Ayden',
          desc: 'A Discord bot to replace all others discord bots in one',
        },
        kairo: {
          name: 'Kairo',
          desc: 'A powerful AI',
        },
        tournament: {
          name: 'Miralys Tournament',
          desc: 'E-sport/Sport Tournament Manager',
        },
        kolba: {
          name: 'Kolba',
          desc: 'A programming language which allow you to compile Cobol into recent languages',
        },
        discordian: {
          name: 'Discordian',
          desc: 'A powerful framework based on Discord.js to simplify Discord.js and make it with better performances',
        },
      },
      notfound: {
        title: 'Page Not Found',
        text: 'Sorry, the page you are looking for does not exist.'
      }
    }
  },
  fr: {
    translation: {
      navbar: {
        home: 'Accueil',
        about: 'À propos',
        projects: 'Projets',
        youtube: 'YouTube',
        github: 'GitHub',
        instagram: 'Instagram',
        mail: 'Mail',
        lang_en: 'Anglais',
        lang_fr: 'Français',
        lang_select: 'Langue',
      },
      intro: {
        text: "Je suis <span class='highlight'>Tristan-GPT</span><br/> & je suis un développeur"
      },
      about: {
        title: 'À propos',
        text: "J'ai commencé à coder en 2020 en apprenant Javascript. Je créais des bots Discord et de nombreux projets. Au fil du temps, j'ai appris d'autres langages comme Python, HTML/CSS et le dernier, Typescript. Je connais de nombreux frameworks comme Discord.js, Express, React, Vite, etc. Aujourd'hui, mes principaux outils sont PNPM pour remplacer NPM, React pour tous mes sites web, Discord.js avec Typescript pour tous mes bots, Express pour mes APIs et MySQL et MongoDB pour les bases de données. Mes IDEs sont Visual Studio Code, IntelliJ IDEA, PyCharm, WebStorm, CLion, Rider, RustRover, Arduino IDE & rarement Visual Studio."
      },
      projects: {
        title: 'Projets',
        text: 'Voici quelques-uns de mes projets préférés.',
        miralys: {
          name: 'Miralys',
          desc: 'Organisation technologique: Ayden discord bot, Kairo, Miralys Tournament, Discordian & Kolba',
        },
        ayden: {
          name: 'Ayden',
          desc: 'Un bot Discord pour remplacer tous les autres bots en un seul',
        },
        kairo: {
          name: 'Kairo',
          desc: 'Une IA puissante',
        },
        tournament: {
          name: 'Miralys Tournament',
          desc: 'Gestionnaire de tournois E-sport/Sport',
        },
        kolba: {
          name: 'Kolba',
          desc: 'Un langage de programmation permettant de compiler du Cobol vers des langages récents',
        },
        discordian: {
          name: 'Discordian',
          desc: 'Un framework puissant basé sur Discord.js pour simplifier Discord.js et l\'améliorer les performances',
        },
      },
      },
      notfound: {
        title: 'Page non trouvée',
        text: 'Désolé, la page que vous recherchez n\'existe pas.'
      }
    }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
