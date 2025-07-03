import { Grid2Props, StackProps } from '@mui/material';

export type RegisterPurchaserPageStyles = {
  root: Grid2Props['sx'];
  form: StackProps['sx'];
};

export function getStyles(): RegisterPurchaserPageStyles {
  return {
    root: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
    form: { width: '25ch' },
  };
}
