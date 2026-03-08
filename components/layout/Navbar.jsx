'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { navItems } from '@/data/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  // Prefetch all nav routes once the browser is idle so first-click is instant
  useEffect(() => {
    const id = requestIdleCallback(() => {
      navItems.forEach((item) => {
        if (item.href) router.prefetch(item.href);
        item.items?.forEach((sub) => {
          if (sub.href) router.prefetch(sub.href);
        });
      });
      router.prefetch('/contact-us');
    });
    return () => cancelIdleCallback(id);
  }, []); // once on mount

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} ref={navRef}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/Hostazo-Dark-Photoroom.png" alt="Hostazo" width={150} height={38} priority />
        </Link>

        <div className={styles.desktopNav}>
          {navItems.map((item) => (
            <div
              key={item.label}
              className={styles.navItemWrap}
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
            >
              {item.hasDropdown ? (
                <button
                  type="button"
                  className={`${styles.navItem} ${activeDropdown === item.label ? styles.active : ''}`}
                  onClick={() => toggleDropdown(item.label)}
                >
                  {item.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" className={styles.chevron}>
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </button>
              ) : (
                <Link href={item.href || '/'} className={styles.navItem}>
                  {item.label}
                </Link>
              )}

              {item.hasDropdown && activeDropdown === item.label && (
                <div className={`${styles.dropdown} ${item.dropdownType === 'hosting' || item.dropdownType === 'domain' ? styles.megaDropdown : styles.simpleDropdown}`}>
                  <div className={styles.dropdownInner}>
                    {item.dropdownType === 'hosting' && (
                      <>
                        <p className={styles.dropdownLabel}>Reliable Hosting Services</p>
                        <div className={styles.dropdownGrid}>
                          {item.items.map((sub) => (
                            <Link key={sub.title} href={sub.href} className={styles.dropdownItem}>
                              <div className={styles.dropdownIcon}>
                                <HostingIcon type={sub.icon} />
                              </div>
                              <div>
                                <span className={styles.dropdownTitle}>{sub.title}</span>
                                <span className={styles.dropdownDesc}>{sub.desc}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                    {item.dropdownType === 'domain' && (
                      <>
                        <p className={styles.dropdownLabel}>Domain</p>
                        <div className={styles.domainGrid}>
                          <div className={styles.domainLinks}>
                            {item.items.map((sub) => (
                              <Link key={sub.title} href={sub.href} className={styles.dropdownItem}>
                                <div className={styles.dropdownIcon}>
                                  <HostingIcon type={sub.icon} />
                                </div>
                                <div>
                                  <span className={styles.dropdownTitle}>{sub.title}</span>
                                  <span className={styles.dropdownDesc}>{sub.desc}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className={styles.wpOffer}>
                            <span className={styles.offerBadge}>WordPress Hosting Offer</span>
                            <h4>Reliable Managed WordPress Hosting</h4>
                            <p>Fast, secure, and always supportive hosting with excellent uptime.</p>
                            <Link href="/wordpress-hosting" className={styles.offerBtn}>See Pricing →</Link>
                          </div>
                        </div>
                      </>
                    )}
                    {(item.dropdownType === 'explore' || item.dropdownType === 'support') && (
                      <div className={styles.simpleList}>
                        {item.items.map((sub) => (
                          <Link key={sub.title} href={sub.href} className={styles.simpleItem}>
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Link href="/contact-us" className={styles.loginBtn}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>
          </svg>
          Log In
        </Link>

        <button type="button" className={styles.hamburger} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span className={`${styles.hamLine} ${mobileOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamLine} ${mobileOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamLine} ${mobileOpen ? styles.open : ''}`}></span>
        </button>
      </nav>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => (
            <div key={item.label} className={styles.mobileItem}>
              {item.hasDropdown ? (
                <>
                  <button type="button" className={styles.mobileLink} onClick={() => toggleDropdown(item.label)}>
                    {item.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" className={`${styles.chevron} ${activeDropdown === item.label ? styles.rotated : ''}`}>
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </button>
                  {activeDropdown === item.label && (
                    <div className={styles.mobileSubMenu}>
                      {item.items.map((sub) => (
                        <Link key={sub.title} href={sub.href} className={styles.mobileSubLink}>
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href || '/'} className={styles.mobileLink}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link href="/contact-us" className={styles.mobileLoginBtn}>Log In</Link>
        </div>
      )}
    </header>
  );
}

function HostingIcon({ type }) {
  const icons = {
    globe: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6F56DA" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    wordpress: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6F56DA" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l1.5 6L12 12l2.5 6L16 12"/></svg>,
    cloud: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6F56DA" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
    server: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6F56DA" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
    cpu: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6F56DA" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>,
    search: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6F56DA" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
    transfer: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6F56DA" strokeWidth="2"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>,
    migrate: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6F56DA" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
  };
  return icons[type] || icons.globe;
}
