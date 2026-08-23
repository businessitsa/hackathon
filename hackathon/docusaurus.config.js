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

  // Structured data so search engines can surface this as an event
  headTags: [
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Hackathon',
        name: 'Cape Town Software Development Meetup - Open Payments Hackathon',
        description:
          "A community-driven hackathon powered by the Interledger Foundation, empowering developers to build better payment solutions for South Africa's spaza shops.",
        startDate: '2026-10-05',
        endDate: '2026-11-21',
        eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: [
          {
            '@type': 'VirtualLocation',
            url: 'https://hackathon.devmeetup.capetown'
          },
          {
            '@type': 'Place',
            name: 'Cape Town, South Africa',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Cape Town',
              addressCountry: 'ZA'
            }
          }
        ],
        image: 'https://hackathon.devmeetup.capetown/img/hackathon-social-card.png',
        isAccessibleForFree: true,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'ZAR',
          availability: 'https://schema.org/InStock',
          url: 'https://hackathon.devmeetup.capetown/docs/register',
          validFrom: '2026-09-01'
        },
        organizer: {
          '@type': 'Organization',
          name: 'Cape Town Software Development Meetup',
          url: 'https://www.meetup.com/cape-town-software-development-meetup/'
        },
        sponsor: {
          '@type': 'Organization',
          name: 'Interledger Foundation',
          url: 'https://interledger.org/'
        }
      })
    }
  ],

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

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/docs'
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/hackathon-social-card.png',
      metadata: [
        {
          name: 'keywords',
          content:
            'hackathon, Cape Town, South Africa, open payments, Interledger, spaza shops, fintech, payment solutions, developers, software development'
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:site_name',
          content: 'Cape Town Software Development Meetup - Hackathon'
        }
      ],
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
          {
            href: 'https://interledger.slack.com/archives/C0BS0AZLPFF',
            label: 'Slack',
            position: 'left'
          },
          { type: 'search', position: 'right' },
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
                label: 'Slack Community',
                href: 'https://interledger.slack.com/archives/C0BS0AZLPFF'
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
