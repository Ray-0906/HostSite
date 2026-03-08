export const navItems = [
  {
    label: 'Hosting',
    hasDropdown: true,
    dropdownType: 'hosting',
    items: [
      { title: 'Web Hosting', desc: 'Secure, Affordable & Reliable Service', href: '/web-hosting', icon: 'globe' },
      { title: 'WordPress Hosting', desc: 'Optimized for Most Popular CMS', href: '/wordpress-hosting', icon: 'wordpress' },
      { title: 'Cloud Hosting', desc: 'Elevate your Business with Scalable Resources', href: '/cloud-hosting', icon: 'cloud' },
      { title: 'Cpanel Reseller Hosting', desc: 'Perfect for Own White Label Business', href: '/cpanel-reseller-hosting', icon: 'server' },
      { title: 'VPS Hosting', desc: 'For More Power & Your Own Control', href: '/vps-hosting', icon: 'cpu' },
    ],
  },
  {
    label: 'Domain',
    hasDropdown: true,
    dropdownType: 'domain',
    items: [
      { title: 'Domain Name Search', desc: 'Search Your First Domain And Register', href: '/domain', icon: 'search' },
      { title: 'Domain Transfer', desc: 'Already Have A Domain? Transfer To Hostazo', href: '/domain-transfer', icon: 'transfer' },
      { title: 'Migrate Your Website', desc: 'Hassle-free migration, we handle everything.', href: '/migration', icon: 'migrate' },
    ],
  },
  {
    label: 'Web Design',
    href: '/web-design',
    hasDropdown: false,
  },
  {
    label: 'Explore',
    hasDropdown: true,
    dropdownType: 'explore',
    items: [
      { title: 'Pricing', href: '/pricing' },
      { title: 'Blog', href: '/blog' },
      { title: 'Reviews', href: '/reviews' },
      { title: 'Migration', href: '/migration' },
    ],
  },
  {
    label: 'Support',
    hasDropdown: true,
    dropdownType: 'support',
    items: [
      { title: 'Knowledge Base', href: '/knowledge-base' },
      { title: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    label: 'About Us',
    href: '/about-us',
    hasDropdown: false,
  },
];
