import { CardProps, Grid2Props, TypographyProps } from '@mui/material';

export type ItemStyles = {
  root: Grid2Props['sx'];
  card: CardProps['sx'];
  cardGrid: Grid2Props['sx'];
  title: TypographyProps['sx'];
  image: Grid2Props['sx'];
  item: Grid2Props['sx'];
  content: Grid2Props['sx'];
};

export function getStyles(): ItemStyles {
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
    title: { height: '33%', paddingInline: '0.75rem' },
    image: { width: '10rem' },
    item: { textAlign: 'start', display: 'flex', flexDirection: 'column' },
    content: { overflow: 'hidden', display: 'flex' },
  };
}
