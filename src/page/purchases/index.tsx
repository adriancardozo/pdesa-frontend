import { Grid2, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import PageContainer from '../../component/page-container';
import { PURCHASE_SERVICE } from '../../service/purchase.service';
import { PurchaseResponse } from '../../type/purchase-response';
import { getStyles } from './style';
import Purchase from '../../component/purchase';

const PurchasesPage: FC = () => {
  const [purchases, setPurchases] = useState<Array<PurchaseResponse>>([]);
  const [styles] = useState(getStyles());

  useEffect(() => {
    PURCHASE_SERVICE.purchases()
      .then(({ data }) => setPurchases(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <PageContainer>
      <Grid2 sx={styles.root}>
        <Grid2 sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            Compras
          </Typography>
        </Grid2>
        {purchases.map((purchase) => (
          <Purchase key={`purchase-${purchase.id}`} purchase={purchase} />
        ))}
      </Grid2>
    </PageContainer>
  );
};

export default PurchasesPage;
