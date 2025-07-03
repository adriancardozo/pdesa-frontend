import { Grid2Props, TypographyProps, IconButtonProps } from '@mui/material';

export type NavBarStyles = {
  title: TypographyProps['sx'];
  iconButton: IconButtonProps['sx'];
  user: Grid2Props['sx'];
  users: Grid2Props['sx'];
};

export function getStyles(): NavBarStyles {
  return {
    title: { flexGrow: 1 },
    iconButton: {
      ':focus-visible': { outline: 'none' },
      ':focus': { outline: 'none' },
    },
    user: { position: 'absolute', right: '1.5rem', display: 'flex', alignItems: 'center' },
    users: { margin: '0.5rem' },
  };
}
