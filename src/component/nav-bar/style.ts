import { TypographyProps } from '@mui/material';
import { IconButtonProps } from '@mui/material';

export type NavBarStyles = {
  title: TypographyProps['sx'];
  iconButton: IconButtonProps['sx'];
};

export function getStyles(): NavBarStyles {
  return {
    title: { flexGrow: 1 },
    iconButton: {
      ':focus-visible': { outline: 'none' },
      ':focus': { outline: 'none' },
    },
  };
}
