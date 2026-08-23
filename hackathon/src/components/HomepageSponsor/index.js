import Heading from '@theme/Heading';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const SocialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/interledger-foundation/',
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/interledger',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@InterledgerFoundation',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/interledgerfoundation/',
  },
  {
    label: 'Mastodon',
    href: 'https://interledger.social/@Interledger',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/interledger',
  },
];

export default function HomepageSponsor() {
  return (
    <section className={styles.sponsor}>
      <div className="container text--center">
        <Heading as="h2" className={styles.sponsorTitle}>
          About Our Sponsor
        </Heading>
        <a
          href="https://interledger.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.sponsorLogoLink}>
          <ThemedImage
            className={styles.sponsorLogo}
            alt="Interledger Foundation"
            sources={{
              light: useBaseUrl('/img/interledger-logo-positive.png'),
              dark: useBaseUrl('/img/interledger-logo-negative.png'),
            }}
          />
        </a>
        <p className={styles.sponsorText}>
          The{' '}
          <a
            href="https://interledger.org/"
            target="_blank"
            rel="noopener noreferrer">
            Interledger Foundation
          </a>{' '}
          is a nonprofit working to make financial access open and fair at a
          global scale. It stewards open, independently governed payment
          standards, including the Interledger Protocol and Open Payments,
          that let financial systems connect and work together. Alongside the
          technology, the Foundation supports, funds and connects the
          developers, researchers, educators, and advocates expanding access
          to digital financial services. It also works with regulators and
          institutions to create the conditions for open financial systems to
          operate in practice. Since 2020, it has committed over $21M in
          grants across 300+ projects in 45+ countries.
        </p>
        <p className={styles.sponsorFollow}>
          Follow Interledger Foundation on social media:
        </p>
        <div className={styles.socialLinks}>
          {SocialLinks.map(({label, href}) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
