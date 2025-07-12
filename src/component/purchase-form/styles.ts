import { StackProps, TextFieldProps } from '@mui/material';

export type PurchaseFormStyles = {
  form: StackProps['sx'];
  amount: TextFieldProps['sx'];
};

export function getStyles(): PurchaseFormStyles {
  return {
    form: { width: '25ch' },
    amount: { '& .MuiInput-input': { textAlign: 'center' } },
  };
}
