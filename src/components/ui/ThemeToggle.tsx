'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations('theme');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => {
        const root = document.documentElement;
        root.classList.add('theme-transition');
        window.requestAnimationFrame(() => {
          const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
          setTheme(nextTheme);
        });
        window.setTimeout(() => {
          root.classList.remove('theme-transition');
        }, 1000);
      }}
      className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
      aria-label={t('toggle')}
    >
      <span className="ml-2">
        {resolvedTheme === 'dark' ? t('light') : t('dark')}
      </span>
    </button>
  );
}
