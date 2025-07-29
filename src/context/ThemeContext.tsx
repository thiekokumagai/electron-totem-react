import { createContext, useContext, useState } from 'react';
import { Tema, MenuItem } from '../types';
import { fetchTheme, fetchMenu } from '../api';

interface ThemeContextProps {
  theme: Tema;
  menu: MenuItem[];
  temaAtual: string | null;
  isDark: boolean;
  aplicarTema: (tema: string, dark?: boolean) => Promise<void>;
  toggleDarkMode: () => Promise<void>;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Tema>({ background: '#fff', color: '#000' });
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [temaAtual, setTemaAtual] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);

  const aplicarTema = async (tema: string, dark = false) => {
    const t = await fetchTheme(tema, dark);
    const m = await fetchMenu(tema);
    setTheme(t);
    setMenu(m);
    setTemaAtual(tema);
    setIsDark(dark);
  };

  const toggleDarkMode = async () => {
    if (!temaAtual) return;
    const newDark = !isDark;
    const t = await fetchTheme(temaAtual, newDark);
    setTheme(t);
    setIsDark(newDark);
  };

  return (
    <ThemeContext.Provider value={{ theme, menu, temaAtual, isDark, aplicarTema, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme deve estar dentro de ThemeProvider');
  return context;
};
