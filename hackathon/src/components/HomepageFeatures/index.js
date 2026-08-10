import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Register by Aug 26',
    emoji: '📝',
    description: (
      <>
        Sign up before the deadline as a team of three to five participants -
        developers, designers, fintech professionals, students and community
        innovators are all welcome.
      </>
    ),
    link: '/docs/register',
    linkLabel: 'Register now',
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
    link: '/docs/how-it-works',
    linkLabel: 'How it works',
  },
  {
    title: 'In-Person Finale',
    emoji: '🏆',
    description: (
      <>
        The top 5 teams will pitch in person.
      </>
    ),
    link: '/docs/prizes',
    linkLabel: 'See the prizes',
  },
];

function Feature({emoji, title, description, link, linkLabel}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className={styles.featureEmoji} role="img" aria-hidden="true">
          {emoji}
        </span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link to={link}>{linkLabel}</Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
