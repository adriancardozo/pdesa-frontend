import { Grid2Props, StackProps } from '@mui/material';

export type LoginPageStyles = {
  root: Grid2Props['sx'];
  form: StackProps['sx'];
};

export function getStyles(): LoginPageStyles {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
    },
    form: { width: '25ch' },
  };
}
