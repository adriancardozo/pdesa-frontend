import { Grid2Props } from '@mui/material';
import { Property } from 'csstype';

export type ProductImageStyles = {
  root: Grid2Props['sx'];
  image: Grid2Props['sx'];
  imageGrid: Grid2Props['sx'];
  favoriteGrid: Grid2Props['sx'];
};

export function getStyles(width?: Property.Width<string | number> | undefined): ProductImageStyles {
  return {
    root: { position: 'relative', display: 'flex', width },
    image: { width: 'inherit' },
    imageGrid: {
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    favoriteGrid: { position: 'absolute', right: 0, bottom: 0 },
  };
}
