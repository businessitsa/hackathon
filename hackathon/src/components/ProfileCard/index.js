import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function ProfileCard({name, role, image, linkedin, children}) {
  return (
    <div className={styles.profileCard}>
      {image && (
        <img
          className={styles.profilePhoto}
          src={useBaseUrl(image)}
          alt={name}
        />
      )}
      <div className={styles.profileBody}>
        <Heading as="h3" className={styles.profileName}>
          {name}
        </Heading>
        {role && <p className={styles.profileRole}>{role}</p>}
        <div className={styles.profileBio}>{children}</div>
        {linkedin && (
          <a
            className={styles.profileLink}
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer">
            Connect with {name.split(' ')[0]} on LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}
