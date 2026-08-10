// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cape Town Software Development Meetup - Hackathon',
  tagline:
    "Powered by the Interledger Foundation, this hackathon empowers developers to build better payment solutions for South Africa's spaza shops.",
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://hackathon.devmeetup.capetown',
  // Set the /<baseUrl>/ pathname under which your site is served
  // The custom domain serves the site from the root
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'businessitsa', // Usually your GitHub org/user name.
  projectName: 'hackathon', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css'
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true
      },
      navbar: {
        title: 'Home',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'eventSidebar',
            position: 'left',
            label: 'Event Info'
          },
          { to: '/docs/faq', label: 'FAQ', position: 'left' },
          {
            href: 'https://www.meetup.com/cape-town-software-development-meetup/',
            label: 'Meetup',
            position: 'left'
          },
          { to: '/docs/register', label: 'Register', position: 'right' }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'The Event',
            items: [
              {
                label: 'About the Hackathon',
                to: '/docs/about'
              },
              {
                label: 'The Challenge',
                to: '/docs/challenge'
              },
              {
                label: 'Schedule',
                to: '/docs/schedule'
              }
            ]
          },
          {
            title: 'Participate',
            items: [
              {
                label: 'Register',
                to: '/docs/register'
              },
              {
                label: 'Who Can Participate',
                to: '/docs/who-can-participate'
              },
              {
                label: 'Rules & Code of Conduct',
                to: '/docs/rules'
              },
              {
                label: 'FAQ',
                to: '/docs/faq'
              }
            ]
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Technology & Resources',
                to: '/docs/technology'
              },
              {
                label: 'Interledger Foundation',
                href: 'https://interledger.org/'
              },
              {
                label: 'Open Payments',
                href: 'https://openpayments.dev/'
              },
              {
                label: 'Discord Community',
                href: 'https://discord.gg/xtRb2UK9k'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cape Town Software Development Meetup.`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      }
    })
}

export default config
