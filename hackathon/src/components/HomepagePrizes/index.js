import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const PrizeList = [
  {
    place: '1st Place',
    amount: 'R20 000',
    emoji: '🥇',
    blurb: 'Top honours and the biggest cheque of the night.',
  },
  {
    place: '2nd Place',
    amount: 'R10 000',
    emoji: '🥈',
    blurb: 'A serious reward for a serious runner-up.',
  },
  {
    place: '3rd Place',
    amount: 'R5 000',
    emoji: '🥉',
    blurb: 'Make the podium and get paid for it.',
  },
];

function PrizeCard({place, amount, emoji, blurb}) {
  return (
    <div className={styles.prizeCard}>
      <span className={styles.prizeEmoji} role="img" aria-hidden="true">
        {emoji}
      </span>
      <span className={styles.prizePlace}>{place}</span>
      <span className={styles.prizeAmount}>{amount}</span>
      <p className={styles.prizeBlurb}>{blurb}</p>
    </div>
  );
}

export default function HomepagePrizes() {
  return (
    <section className={styles.prizes}>
      <div className="container text--center">
        <Heading as="h2" className={styles.prizesTitle}>
          R35 000 in Cash Prizes
        </Heading>
        <p className={styles.prizesSubtitle}>
          Pitch your prototype at the in-person finale in Cape Town - there's
          real money on the table.
        </p>
        <div className={styles.prizeGrid}>
          {PrizeList.map((props) => (
            <PrizeCard key={props.place} {...props} />
          ))}
        </div>
        <div className={styles.prizeActions}>
          <Link className="button button--cta button--lg" to="/docs/register">
            Register Your Team
          </Link>
          <Link className={styles.prizeDetailsLink} to="/docs/prizes">
            See full prize details →
          </Link>
        </div>
      </div>
    </section>
  );
}
