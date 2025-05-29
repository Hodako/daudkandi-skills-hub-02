
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { actualTheme } = useTheme();

  const getIcon = () => {
    return actualTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="text-gray-600 hover:text-green-700"
    >
      <i className={`${getIcon()} mr-2`}></i>
      {actualTheme === 'dark' ? 'Dark' : 'Light'}
    </Button>
  );
};

export default ThemeToggle;
