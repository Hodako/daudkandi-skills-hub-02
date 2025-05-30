
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { actualTheme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition-all duration-300 hover:scale-110"
      onClick={toggleTheme}
    >
      <div className="relative mr-2 transition-transform duration-500 ease-in-out">
        {actualTheme === 'dark' ? (
          <Moon className="h-4 w-4 rotate-0 scale-100 transition-all duration-500" />
        ) : (
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-500 animate-pulse" />
        )}
      </div>
      <span className="transition-opacity duration-300">
        {actualTheme === 'dark' ? 'Dark' : 'Light'}
      </span>
    </Button>
  );
};

export default ThemeToggle;
