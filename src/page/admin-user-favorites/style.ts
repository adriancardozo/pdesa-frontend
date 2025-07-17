import { Grid2Props, TypographyProps } from '@mui/material';

export type AdminUserFavoritesPageStyles = {
  root: Grid2Props['sx'];
  header: Grid2Props['sx'];
  title: TypographyProps['sx'];
};

export function getStyles(): AdminUserFavoritesPageStyles {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      width: '100%',
      justifySelf: 'start',
      flexGrow: 1,
    },
    header: { display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: '100%' },
    title: { margin: '0.5rem', display: 'flex' },
  };
}
