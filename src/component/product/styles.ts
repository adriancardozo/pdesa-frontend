import { CardProps, Grid2Props, TypographyProps } from '@mui/material';

export type ProductStyles = {
  root: Grid2Props['sx'];
  card: CardProps['sx'];
  name: TypographyProps['sx'];
  imageGrid: Grid2Props['sx'];
  image: Grid2Props['sx'];
  iconButtonGrid: Grid2Props['sx'];
};

export function getStyles(): ProductStyles {
  return {
    root: { position: 'relative' },
    card: {
      width: '8.5rem',
      height: '10.5rem',
      margin: '0.5rem',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      ':hover': { boxShadow: 'rgba(0,0,0,0.5) 0px 4px 12px 0px' },
    },
    name: { height: '33%', padding: '0.75rem' },
    imageGrid: {
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    image: { width: '100%' },
    iconButtonGrid: {
      position: 'absolute',
      bottom: '1rem',
      right: '1rem',
    },
  };
}
