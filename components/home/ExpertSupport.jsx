'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ExpertSupport.module.css';

const chatMessages = [
  {
    sender: 'user',
    text: "I want to get started Hostazo's web hosting.",
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=45&h=45',
  },
  {
    sender: 'agent',
    text: 'No problem at all! I can walk you through the process step-by-step. What are your website requirements?',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=45&h=45',
  },
  {
    sender: 'user',
    text: 'I want to create a e-commerce website for my local shop!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=45&h=45',
  },
  {
    sender: 'agent',
    text: 'Perfect! You should proceed with our convenient wordpress hosting which will fulfill all of your needs.',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=45&h=45',
  },
];

export default function ExpertSupport() {
  return (
    <section className={styles.section}>
      {/* Left — Text */}
      <div className={styles.textColumn}>
        <h2 className={styles.heading}>
          Expert Support: We&apos;re Always Here to Help Your Business Grow
        </h2>
        <ul className={styles.pointsList}>
          <li>
            <span className={styles.checkmark}>✓</span>
            <p>
              Access our dedicated{' '}
              <Link href="/contact-us" className={styles.link}>
                support team
              </Link>{' '}
              24/7 via live chat and email for prompt assistance.
            </p>
          </li>
          <li>
            <span className={styles.checkmark}>✓</span>
            <p>
              Experience rapid response times with most issues resolved within minutes, not hours.
            </p>
          </li>
          <li>
            <span className={styles.checkmark}>✓</span>
            <p>
              Our agents provide clear and concise communication in over 8 languages, ensuring
              you&apos;re always understood.
            </p>
          </li>
        </ul>
      </div>

      {/* Right — Chat visual */}
      <div className={styles.visualColumn}>
        <div className={styles.bgRect} />
        <div className={styles.bgCircle} />
        <div className={styles.bgSquare} />

        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <span className={styles.chatStatus}>Online Now</span>
            <button className={styles.chatCloseBtn} aria-label="Close">
              ✕
            </button>
          </div>
          <div className={styles.chatMessages}>
            {chatMessages.map((msg, i) => (
              <div key={i} className={styles.chatMessage}>
                {msg.sender === 'user' && (
                  <Image
                    src={msg.avatar}
                    alt="User"
                    width={45}
                    height={45}
                    className={styles.chatAvatar}
                    unoptimized
                  />
                )}
                <div
                  className={`${styles.chatBubble} ${
                    msg.sender === 'agent' ? styles.chatBubbleSent : ''
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === 'agent' && (
                  <Image
                    src={msg.avatar}
                    alt="Agent"
                    width={45}
                    height={45}
                    className={`${styles.chatAvatar} ${styles.chatAvatarRight}`}
                    unoptimized
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
