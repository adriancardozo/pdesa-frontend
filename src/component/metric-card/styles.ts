import { CardProps, Grid2Props } from '@mui/material';

export type MetricCardStyles = {
  root: CardProps['sx'];
  content: Grid2Props['sx'];
  body: Grid2Props['sx'];
  mainAmount: Grid2Props['sx'];
  topFive: Grid2Props['sx'];
};

export function getStyles(): MetricCardStyles {
  return {
    root: {
      width: '40%',
      height: '18rem',
      margin: '0.5rem',
      padding: '0.5rem',
      color: 'white',
      backgroundColor: '#1976d2',
    },
    content: { display: 'flex', flexDirection: 'column', height: '100%' },
    body: { display: 'flex', flexDirection: 'row', height: '100%' },
    mainAmount: { flex: '0.5 1 0', alignItems: 'center', justifyContent: 'center', display: 'flex' },
    topFive: { display: 'flex', flexDirection: 'column', flex: '1 1 0' },
  };
}
