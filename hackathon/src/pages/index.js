import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/register">
            Register Your Team
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/about">
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Bringing developers, designers and payment innovators together to explore how open and interoperable payment technology can improve everyday transactions for informal businesses.">
      <HomepageHeader />
      <main>
        <section className={styles.introSection}>
          <div className="container text--center">
            <p className={styles.introText}>
              Bringing developers, designers and payment innovators together to
              explore how open and interoperable payment technology can improve
              everyday transactions for informal businesses.
            </p>
          </div>
        </section>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
