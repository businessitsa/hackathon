import clsx from 'clsx'
import styles from './styles.module.css'

const phases = [
  {
    phase: 'Phase 1',
    title: 'Registration',
    timeline: '14–26 August',
    description:
      'Register as an individual or team. Once registration closes, ' +
      'participants will receive access to the Discord community, team ' +
      'channels, resources, and mentor information.'
  },
  {
    phase: 'Phase 2',
    title: 'Build Period',
    timeline: '1–30 September',
    description:
      'Over the next 30 days, teams will work on their solutions remotely ' +
      'at their own pace. Mentors will be available throughout the month ' +
      'via Discord to answer questions and provide guidance. Teams may ' +
      'also schedule an optional mid-project check-in to discuss progress, ' +
      'receive feedback, and validate their ideas before the final ' +
      'submission.'
  },
  {
    phase: 'Phase 3',
    title: 'Project Submission & Judging',
    timeline: '1 October',
    description:
      "Submit your completed project through your team's Discord channel. " +
      'The judging panel will review all submissions and select the top ' +
      'five teams to advance to the Grand Finale.'
  },
  {
    phase: 'Phase 4',
    title: 'Grand Finale',
    timeline: '24 October',
    highlight: true,
    description:
      'The five finalist teams will present their solutions live to the ' +
      'judging panel at the in-person Grand Finale in Cape Town. Following ' +
      'the presentations, the winning teams will be announced and prizes ' +
      'awarded.'
  }
]

export default function HackathonTimeline () {
  return (
    <ol className={styles.timeline}>
      {phases.map((p, i) => (
        <li
          key={p.title}
          className={clsx(styles.item, p.highlight && styles.itemHighlight)}
        >
          <div className={styles.marker} aria-hidden='true'>
            {p.highlight ? '🏆' : i + 1}
          </div>
          <div className={styles.content}>
            <div className={styles.meta}>
              <span className={styles.phase}>{p.phase}</span>
              <span className={styles.date}>{p.timeline}</span>
            </div>
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.description}>{p.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
