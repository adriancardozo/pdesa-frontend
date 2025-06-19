import { IconButtonProps } from '@mui/material';

export type FavoriteButtonStyles = {
  iconButton: IconButtonProps['sx'];
};

export function getStyles(): FavoriteButtonStyles {
  return {
    iconButton: {
      ':focus-visible': { outline: 'none' },
      ':focus': { outline: 'none' },
    },
  };
}
