import { Grid2Props } from '@mui/material';

export type PageContainerStyles = {
  root: Grid2Props['sx'];
};

export function getStyles(): PageContainerStyles {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
    },
  };
}
