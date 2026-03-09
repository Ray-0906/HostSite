'use client';
import { useState, useEffect } from 'react';
import styles from './IntelligentStack.module.css';

export default function IntelligentStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInteraction = (index) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? -1 : index);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2>The Intelligent Stack</h2>
          <p>Next-generation infrastructure, simplified.</p>
        </div>

        {/* Card Deck */}
        <div className={styles.deck}>
          {/* Card 1 — AI Designer */}
          <div
            className={`${styles.card} ${activeIndex === 0 ? styles.active : ''}`}
            onClick={() => handleInteraction(0)}
            onMouseEnter={() => !isMobile && setActiveIndex(0)}
          >
            <div className={styles.top}>
              <span className={styles.num}>01</span>
              <span className={styles.tabLabel}>AI Designer</span>
            </div>
            <div className={styles.vLabel}>Builder</div>

            <div className={styles.mask}>
              <h3 className={styles.h3}>Prompt to Product.</h3>
              <p className={styles.p}>
                Describe your vision. Our AI writes the code, designs the layout, and publishes it instantly.
              </p>

              <div className={styles.stage}>
                <div className={styles.window}>
                  <div className={styles.winHeader}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <span>AI Generator</span>
                  </div>
                  <div className={`${styles.winContent} ${styles.winContentWhite}`}>
                    <div className={styles.aiLayout}>
                      <div className={styles.inputGroup}>
                        <div className={styles.fakeInput}>Create a SaaS landing page...</div>
                        <div className={styles.btnAi}>Generate</div>
                      </div>
                      <div className={styles.preview}>
                        <div className={styles.prevNav}>
                          <div style={{ fontWeight: 500, fontSize: '0.7rem' }}>Brand</div>
                        </div>
                        <div className={styles.prevHero}>
                          <div className={styles.prevContent}>
                            <div className={styles.skelTitle}></div>
                            <div className={styles.skelTxt}></div>
                            <div className={styles.skelBtn}></div>
                          </div>
                          <div className={styles.skelImg}></div>
                        </div>
                      </div>
                    </div>
                    <svg className={styles.cursor} viewBox="0 0 24 24" fill="black" stroke="white" strokeWidth="1.5">
                      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Managed Core */}
          <div
            className={`${styles.card} ${activeIndex === 1 ? styles.active : ''}`}
            onClick={() => handleInteraction(1)}
            onMouseEnter={() => !isMobile && setActiveIndex(1)}
          >
            <div className={styles.top}>
              <span className={styles.num}>02</span>
              <span className={styles.tabLabel}>Managed Core</span>
            </div>
            <div className={styles.vLabel}>Security</div>

            <div className={styles.mask}>
              <h3 className={styles.h3}>Proactive Defense.</h3>
              <p className={styles.p}>
                Continuous monitoring detects anomalies and patches vulnerabilities before they affect your site.
              </p>

              <div className={styles.stage}>
                <div className={styles.window}>
                  <div className={styles.winHeader} style={{ background: '#F9FAFB' }}>
                    <div className={styles.dot}></div>
                    <span>Terminal</span>
                  </div>
                  <div className={styles.terminal}>
                    <div className={styles.tRow}><span className={styles.tCmd}>root@host:~$ scan --deep</span></div>
                    <div className={styles.tRow}><span className={styles.tCmd}>Scanning files...</span></div>
                    <div className={`${styles.tRow} ${styles.tAlert}`}>
                      <span>[ALERT] Malware Signature: Mal_X2</span>
                    </div>
                    <div className={`${styles.tRow} ${styles.tFix}`}>
                      <span>[SUCCESS] Patch Applied. Clean.</span>
                    </div>
                    <div className={styles.tBar}></div>
                    <div className={styles.tBadge}>PROTECTED</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 — Elastic Scale */}
          <div
            className={`${styles.card} ${activeIndex === 2 ? styles.active : ''}`}
            onClick={() => handleInteraction(2)}
            onMouseEnter={() => !isMobile && setActiveIndex(2)}
          >
            <div className={styles.top}>
              <span className={styles.num}>03</span>
              <span className={styles.tabLabel}>Elastic Scale</span>
            </div>
            <div className={styles.vLabel}>Scaling</div>

            <div className={styles.mask}>
              <h3 className={styles.h3}>Intelligent Load.</h3>
              <p className={styles.p}>
                Resources expand automatically in real-time, ensuring optimal performance during traffic surges.
              </p>

              <div className={styles.stage}>
                <div className={styles.window}>
                  <div className={styles.winHeader}>
                    <div className={styles.dot}></div>
                    <span>Live Analytics</span>
                  </div>
                  <div className={styles.dash}>
                    <div className={styles.dStat}>
                      <div>
                        <div className={styles.dLabel}>Throughput</div>
                        <div className={styles.dVal}>9,200 req/s</div>
                      </div>
                      <div className={styles.dPill}>Surge</div>
                    </div>
                    <div className={styles.dGraph}>
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className={styles.dCol}></div>
                      ))}
                    </div>
                    <div className={styles.dStat} style={{ borderTop: '1px solid #E5E7EB', paddingTop: 10 }}>
                      <div>
                        <div className={styles.dLabel}>Nodes</div>
                        <div className={styles.dVal} style={{ fontSize: '1rem' }}>4 Active</div>
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#10B981', fontWeight: 700 }}>+ Balancing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
