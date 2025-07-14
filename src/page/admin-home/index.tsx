import { FC, useEffect, useState } from 'react';
import PageContainer from '../../component/page-container';
import { Grid2, Typography } from '@mui/material';
import { getStyles } from './style';
import MetricCard from '../../component/metric-card';
import { UserResponse } from '../../type/user-response.type';
import { ProductResponse } from '../../type/product-response.type';
import { ADMIN_METRICS_SERVICE } from '../../service/admin-metrics.service';
import { MetricItem } from '../../type/metric-item.type';

const AdminHomePage: FC = () => {
  const [purchasers, setPurchasers] = useState<Array<MetricItem<UserResponse>>>([]);
  const [favorited, setFavorited] = useState<Array<MetricItem<ProductResponse>>>([]);
  const [purchased, setPurchased] = useState<Array<MetricItem<ProductResponse>>>([]);
  const [styles] = useState(getStyles());

  useEffect(() => {
    ADMIN_METRICS_SERVICE.top5Purchasers().then(({ data }) => setPurchasers(data));
    ADMIN_METRICS_SERVICE.top5Favorited().then(({ data }) => setFavorited(data));
    ADMIN_METRICS_SERVICE.top5Purchased().then(({ data }) => setPurchased(data));
  }, []);

  return (
    <PageContainer>
      <Grid2 sx={styles.root}>
        <Grid2 sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            Métricas
          </Typography>
        </Grid2>
        <Grid2 sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
          <Grid2 sx={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
            <MetricCard title="Más compradores" items={purchasers} type="user" cardKey="purchaser" />
            <MetricCard title="Mas guardados" items={favorited} type="product" cardKey="favorited" />
          </Grid2>
          <MetricCard title="Más comprados" items={purchased} type="product" cardKey="purchased" />
        </Grid2>
      </Grid2>
    </PageContainer>
  );
};

export default AdminHomePage;
