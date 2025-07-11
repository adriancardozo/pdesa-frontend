import { alpha, CardProps, Grid2Props, StackProps, TextFieldProps } from '@mui/material';

export type ProductPageStyles = {
  root: Grid2Props['sx'];
  card: CardProps['sx'];
  cardBody: Grid2Props['sx'];
  imageCard: CardProps['sx'];
  image: Grid2Props['sx'];
  iconButtonGrid: Grid2Props['sx'];
  imageGrid: Grid2Props['sx'];
  form: StackProps['sx'];
  amount: TextFieldProps['sx'];
};

export function getStyles(): ProductPageStyles {
  return {
    root: { alignItems: 'center', display: 'flex', flexDirection: 'column' },
    card: {
      margin: '1rem',
      width: '80%',
      backgroundColor: alpha('#000000', 0.02),
      position: 'relative',
    },
    cardBody: { padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' },
    imageCard: {
      height: '100%',
      backgroundColor: alpha('#000000', 0.02),
      position: 'relative',
    },
    imageGrid: { display: 'flex' },
    image: { width: '100%' },
    iconButtonGrid: {
      position: 'absolute',
      bottom: '0rem',
      right: '0rem',
    },
    form: { width: '25ch' },
    amount: { '& .MuiInput-input': { textAlign: 'center' } },
  };
}
