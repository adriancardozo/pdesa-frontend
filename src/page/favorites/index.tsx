import { Grid2, Typography } from '@mui/material';
import { FC, useState } from 'react';
import PageContainer from '../../component/page-container';
import { getStyles } from './style';

const FavoritesPage: FC = () => {
  const [styles] = useState(getStyles());

  return (
    <PageContainer>
      <Grid2 sx={styles.root}>
        <Grid2 sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            Favoritos
          </Typography>
        </Grid2>
      </Grid2>
    </PageContainer>
  );
};

export default FavoritesPage;
