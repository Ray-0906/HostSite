'use client';
import { useState } from 'react';
import styles from './ComparePlans.module.css';

const plans = ['Mini', 'Advanced', 'Ultimate', 'Zeta Cloud'];

const categories = [
  {
    name: 'Top Features',
    defaultOpen: true,
    features: [
      { name: 'Websites', values: ['1', '20', '50', '50'] },
      { name: 'NVMe Storage', values: ['10 GB', '30 GB', '100 GB', '100 GB'] },
      { name: 'Free Domain', values: [false, true, true, true] },
      { name: 'Free Email Mailboxes', values: ['5', '10', '30', '30'] },
      { name: 'Free SSL', values: [true, true, true, true] },
      { name: 'Daily Backups', values: [false, true, true, true] },
      { name: 'Free Website Migration', values: [true, true, true, true] },
      { name: 'Website Builder', values: [true, true, true, true] },
      { name: 'Managed WordPress', values: [false, true, true, true] },
      { name: 'Complete Site Protection', values: [true, true, true, true] },
      { name: '24/7 Priority Support', values: [true, true, true, true] },
      { name: 'Global Server Location', values: [true, true, true, true] },
    ],
  },
  {
    name: 'cPanel Features',
    features: [
      { name: 'cPanel Included', values: [true, true, true, true] },
      { name: 'Softaculous Installer', values: [true, true, true, true] },
      { name: 'JetBackup Included', values: [false, true, true, true] },
      { name: 'CloudLinux OS', values: [true, true, true, true] },
      { name: 'LiteSpeed Web Server', values: [true, true, true, true] },
    ],
  },
  {
    name: 'Security',
    features: [
      { name: 'Web Application Firewall', values: [true, true, true, true] },
      { name: 'Secure Access Manager', values: [false, true, true, true] },
      { name: 'Anycast Nameservers', values: [false, true, true, true] },
      { name: 'Enhanced DDoS Protection', values: [false, false, true, true] },
    ],
  },
  {
    name: 'Service and Support',
    features: [
      { name: '30-day Money-back Guarantee', values: [true, true, true, true] },
      { name: '24/7/365 Customer Support', values: [true, true, true, true] },
      { name: '99.9% Uptime', values: [true, true, true, true] },
    ],
  },
  {
    name: 'Technical Details',
    features: [
      { name: 'Files & Directories', values: ['100,000', '150,000', '300,000', '400,000'] },
      { name: 'PHP Workers', values: ['2', '5', '10', '15'] },
      { name: 'Monthly Visits', values: ['~25,000', '~100,000', '~400,000', '~800,000'] },
      { name: 'Subdomains', values: ['2', '20', '50', '100'] },
      { name: 'MySQL Connections', values: ['20', '40', '75', '150'] },
      { name: 'Databases', values: ['2', '20', '50', 'Unlimited'] },
      { name: 'FTP Accounts', values: ['1', '10', '50', 'Unlimited'] },
      { name: 'Cronjobs', values: ['2', '5', '10', '20'] },
      { name: 'Multiple PHP Versions', values: [true, true, true, true] },
      { name: 'SSH Access', values: [false, true, true, true] },
      { name: 'DNS Management', values: [true, true, true, true] },
      { name: 'Cache Manager', values: [false, true, true, true] },
      { name: 'Control Panel', values: ['cPanel', 'cPanel', 'cPanel', 'cPanel'] },
      { name: 'RAM', values: ['1 GB', '2 GB', '4 GB', '8 GB'] },
      { name: 'CPU Cores', values: ['1', '2', '4', '6'] },
      { name: 'IO Limit', values: ['512 KB/s', '1024 KB/s', '2048 KB/s', '4096 KB/s'] },
      { name: 'Unmetered Bandwidth', values: [true, true, true, true] },
    ],
  },
];

const prices = ['\u20B959.00', '\u20B9139.00', '\u20B9229.00', '\u20B9499.00'];

function ValueCell({ value }) {
  if (typeof value === 'boolean') {
    return value ? (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#17BD54" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ) : (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    );
  }
  return <span>{value}</span>;
}

export default function ComparePlans() {
  const [openCats, setOpenCats] = useState(
    categories.reduce((acc, cat) => {
      acc[cat.name] = !!cat.defaultOpen;
      return acc;
    }, {})
  );

  const toggle = (name) => {
    setOpenCats((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Compare our plans</h2>
        <p className={styles.sub}>
          See at a glance what each plan costs and what you get for your money.
        </p>

        <div className={styles.tableWrap}>
          <div className={styles.table}>
            {/* Header */}
            <div className={`${styles.row} ${styles.headerRow}`}>
              <div className={styles.labelCol} />
              {plans.map((plan, i) => (
                <div key={plan} className={`${styles.planCol} ${i === 1 ? styles.popularCol : ''}`}>
                  <span className={styles.planName}>{plan}</span>
                  <span className={styles.planPrice}>{prices[i]}/mo</span>
                </div>
              ))}
            </div>

            {/* Categories */}
            {categories.map((cat) => (
              <div key={cat.name} className={styles.category}>
                <button
                  type="button"
                  className={`${styles.catHeader} ${openCats[cat.name] ? styles.catOpen : ''}`}
                  onClick={() => toggle(cat.name)}
                >
                  <span>{cat.name}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.chevron}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {openCats[cat.name] && (
                  <div className={styles.catBody}>
                    {cat.features.map((feat) => (
                      <div key={feat.name} className={styles.row}>
                        <div className={styles.labelCol}>{feat.name}</div>
                        {feat.values.map((val, i) => (
                          <div key={i} className={`${styles.planCol} ${i === 1 ? styles.popularCol : ''}`}>
                            <ValueCell value={val} />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
