import { StackProps } from '@mui/material';

export type AdminUserRegisterPageStyles = {
  form: StackProps['sx'];
};

export function getStyles(): AdminUserRegisterPageStyles {
  return {
    form: { width: '25ch' },
  };
}
