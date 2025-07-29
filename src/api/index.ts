import { Tema, MenuItem } from '../types';

export const fetchTheme = async (tema: string, dark = false): Promise<Tema> => {
  const temas: Record<string, { light: Tema; dark: Tema }> = {
    detran: {
      light: { background: '#ffe0e0', color: '#900' },
      dark: { background: '#2a0000', color: '#ffbaba' },
    },
    inovvati: {
      light: { background: '#e0f7ff', color: '#005577' },
      dark: { background: '#001f2b', color: '#b8eaff' },
    },
    sefaz: {
      light: { background: '#f0fff0', color: '#064f00' },
      dark: { background: '#002a00', color: '#aefba0' },
    },
  };

  return dark ? temas[tema].dark : temas[tema].light;
};

export const fetchMenu = async (tema: string): Promise<MenuItem[]> => {
  switch (tema) {
    case 'detran':
      return [
        { id: 1, nome: 'Dashboard DETRAN' },
        { id: 2, nome: 'Agendamentos' },
        { id: 3, nome: 'Multas' },
      ];

    case 'inovvati':
      return [
        { id: 1, nome: 'Dashboard Inovvati' },
        { id: 2, nome: 'Projetos' },
        { id: 3, nome: 'Relatórios' },
        { id: 4, nome: 'Configurações' },
      ];

    case 'sefaz':
      return [
        { id: 1, nome: 'Dashboard SEFAZ' },
        { id: 2, nome: 'Tributos' },
        { id: 3, nome: 'Notas Fiscais' },
      ];

    default:
      return [
        { id: 1, nome: `Dashboard ${tema}` },
        { id: 2, nome: `Relatórios ${tema}` },
      ];
  }
};
