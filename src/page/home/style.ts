import { Grid2Props, StackProps, TextFieldProps } from '@mui/material';

export type HomePageStyles = {
  root: Grid2Props['sx'];
  form: StackProps['sx'];
  search: TextFieldProps['sx'];
  products: Grid2Props['sx'];
};

export function getStyles(): HomePageStyles {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
    },
    form: { width: '50%' },
    search: { width: '100%' },
    products: { display: 'flex', maxWidth: '50%', flexWrap: 'wrap', justifyContent: 'center' },
  };
}
