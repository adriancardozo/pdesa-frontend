import { CardProps, Grid2Props, TypographyProps } from '@mui/material';

export type PurchaseStyles = {
  root: Grid2Props['sx'];
  card: CardProps['sx'];
  cardGrid: Grid2Props['sx'];
  name: TypographyProps['sx'];
  image: Grid2Props['sx'];
  purchase: Grid2Props['sx'];
  imageGrid: Grid2Props['sx'];
};

export function getStyles(): PurchaseStyles {
  return {
    root: { position: 'relative', width: '100%' },
    card: {
      width: '100%',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      ':hover': { boxShadow: 'rgba(0,0,0,0.5) 0px 4px 12px 0px' },
    },
    cardGrid: { padding: '0.5rem' },
    name: { height: '33%', paddingInline: '0.75rem' },
    image: { width: '10rem' },
    purchase: { textAlign: 'start', display: 'flex', flexDirection: 'column' },
    imageGrid: { overflow: 'hidden' },
  };
}
