import { alpha, CardProps, Grid2Props, IconButtonProps, RatingProps, Theme } from '@mui/material';

export type ReviewFormStyles = {
  root: CardProps['sx'];
  content: Grid2Props['sx'];
  review: Grid2Props['sx'];
  rate: RatingProps['sx'];
  button: IconButtonProps['sx'];
};

export function getStyles(theme: Theme): ReviewFormStyles {
  return {
    root: {
      backgroundColor: alpha(theme.palette.primary.main, 0.38),
      padding: '0.5rem',
      margin: '0.5rem',
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      maxWidth: '15rem',
      width: '15rem',
    },
    review: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '15rem',
      width: '15rem',
    },
    rate: { '& .MuiSvgIcon-root': { fill: theme.palette.primary.main } },
    button: { ':focus-visible': { outline: 'none' }, ':focus': { outline: 'none' } },
  };
}
