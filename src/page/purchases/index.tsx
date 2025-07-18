import { Grid2, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import PageContainer from '../../component/page-container';
import { PURCHASE_SERVICE } from '../../service/purchase.service';
import { PurchaseResponse } from '../../type/purchase.response';
import { getStyles } from './style';
import Purchase from '../../component/purchase';
import { ProductModel } from '../../model/product';
import { useNavigate } from 'react-router';

const PurchasesPage: FC = () => {
  const navigate = useNavigate();
  const [purchases, setPurchases] = useState<Array<PurchaseResponse>>([]);
  const [styles] = useState(getStyles());

  useEffect(() => {
    PURCHASE_SERVICE.purchases()
      .then(({ data }) => setPurchases(data))
      .catch((e) => console.error(e));
  }, []);

  const updateProduct = (product: ProductModel) => {
    setPurchases((previous) =>
      previous.map((purchase) =>
        purchase.product.ml_id === product.ml_id ? { ...purchase, product } : purchase,
      ),
    );
  };

  const updatePurchase = (search: PurchaseResponse) => {
    return setPurchases((previous) =>
      previous.map((purchase) => (search.id === purchase.id ? search : purchase)),
    );
  };

  return (
    <PageContainer>
      <Grid2 sx={styles.root}>
        <Grid2 sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            Compras
          </Typography>
        </Grid2>
        {purchases.map((purchase) => (
          <Purchase
            key={`purchase-${purchase.id}`}
            purchase={purchase}
            onUpdateProduct={updateProduct}
            onUpdateReview={updatePurchase}
            onDeleteReview={updatePurchase}
            onClick={() => navigate(`/product/${purchase.product.ml_id}`)}
          />
        ))}
      </Grid2>
    </PageContainer>
  );
};

export default PurchasesPage;
