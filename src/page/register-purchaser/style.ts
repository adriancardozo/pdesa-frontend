import { StackProps } from '@mui/material';

export type RegisterPurchaserPageStyles = {
  form: StackProps['sx'];
};

export function getStyles(): RegisterPurchaserPageStyles {
  return {
    form: { width: '25ch' },
  };
}
