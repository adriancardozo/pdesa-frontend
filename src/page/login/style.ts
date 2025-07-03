import { StackProps } from '@mui/material';

export type LoginPageStyles = {
  form: StackProps['sx'];
};

export function getStyles(): LoginPageStyles {
  return {
    form: { width: '25ch' },
  };
}
