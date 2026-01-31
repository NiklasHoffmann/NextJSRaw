'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations('theme');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
      aria-label={t('toggle')}
    >
      {theme === 'dark' ? '☀️' : '🌙'}{' '}
      <span className="ml-2">{theme === 'dark' ? t('light') : t('dark')}</span>
    </button>
  );
}
