import { IconButtonProps } from '@mui/material';

export type BackButtonStyles = {
  back: IconButtonProps['sx'];
};

export function getStyles(): BackButtonStyles {
  return {
    back: { color: 'white', ':focus-visible': { outline: 'none' }, ':focus': { outline: 'none' } },
  };
}
