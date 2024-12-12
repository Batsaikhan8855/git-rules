// src/App.test.jsx

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render the message "Vite + React is working!"', () => {
    render(<App />);
    expect(screen.getByText('Vite + React is working!')).toBeInTheDocument();
  });
});
