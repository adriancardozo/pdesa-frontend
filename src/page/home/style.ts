import { Grid2Props, StackProps, TextFieldProps } from '@mui/material';

export type HomePageStyles = {
  form: StackProps['sx'];
  search: TextFieldProps['sx'];
  products: Grid2Props['sx'];
};

export function getStyles(): HomePageStyles {
  return {
    form: { width: '50%' },
    search: { width: '100%' },
    products: { display: 'flex', maxWidth: '50%', flexWrap: 'wrap', justifyContent: 'center' },
  };
}
