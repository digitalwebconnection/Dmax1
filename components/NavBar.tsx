'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/',         label: 'Home'     },
{ href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/about',    label: 'About'    },   // ← fixed route
    { href: '/contact',  label: 'Contact'  },
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 16 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* animated logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wider text-green-600"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1.2 }}
          >
            Dmax&nbsp;Solar
          </motion.span>
        </Link>

        {/* desktop links */}
        <ul className="hidden gap-8 lg:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="font-medium text-gray-700 hover:text-green-600 transition"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* mobile hamburger */}
        <button
          className="block lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </nav>

      {/* mobile panel */}
      {open && (
        <ul className="space-y-4 bg-white px-6 pb-6 lg:hidden">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block rounded-md py-2 text-lg font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </motion.header>
  );
}
