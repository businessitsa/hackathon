import clsx from 'clsx'
import Link from '@docusaurus/Link'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'Register by 26th August',
    emoji: '📝',
    description: (
      <>
        Form a team of three to five participants and register before the
        deadline. We welcome developers, designers, fintech professionals,
        students, and anyone passionate about building the future of open
        payments.
      </>
    ),
    link: '/docs/register',
    linkLabel: 'Register now'
  },
  {
    title: '4-Week Online Hackathon',
    emoji: '💻',
    description: (
      <>
        Learn about the Interledger Protocol and Open Payments, then research,
        design and prototype a payment solution for South Africa's spaza shops
        with workshops and mentor support along the way.
      </>
    ),
    link: '/docs/challenge#how-the-hackathon-works',
    linkLabel: 'How it works'
  },
  {
    title: 'In-Person Finale',
    emoji: '🏆',
    description: <>The top 5 teams will pitch in person.</>,
    link: '/docs/prizes',
    linkLabel: 'See the prizes'
  }
]

function Feature ({ emoji, title, description, link, linkLabel }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <span className={styles.featureEmoji} role='img' aria-hidden='true'>
          {emoji}
        </span>
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
        <Link to={link}>{linkLabel}</Link>
      </div>
    </div>
  )
}

export default function HomepageFeatures () {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
