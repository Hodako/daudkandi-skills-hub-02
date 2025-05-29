
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return 'fas fa-sun';
      case 'dark':
        return 'fas fa-moon';
      case 'system':
        return 'fas fa-desktop';
      default:
        return 'fas fa-sun';
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="text-gray-600 hover:text-green-700"
    >
      <i className={`${getIcon()} mr-2`}></i>
      {theme === 'system' ? 'Auto' : theme === 'light' ? 'Light' : 'Dark'}
    </Button>
  );
};

export default ThemeToggle;
