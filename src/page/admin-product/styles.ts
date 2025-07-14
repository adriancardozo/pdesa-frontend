import { alpha, CardProps, Grid2Props } from '@mui/material';

export type AdminProductPageStyles = {
  root: Grid2Props['sx'];
  card: CardProps['sx'];
  cardBody: Grid2Props['sx'];
  imageCard: CardProps['sx'];
};

export function getStyles(): AdminProductPageStyles {
  return {
    root: { alignItems: 'center', display: 'flex', flexDirection: 'column' },
    card: {
      margin: '1rem',
      width: '65%',
      backgroundColor: alpha('#000000', 0.02),
      position: 'relative',
    },
    cardBody: { padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' },
    imageCard: {
      height: '100%',
      backgroundColor: alpha('#000000', 0.02),
      position: 'relative',
    },
  };
}
