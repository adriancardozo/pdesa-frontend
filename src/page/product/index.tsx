import { FC, useEffect, useState } from 'react';
import PageContainer from '../../component/page-container';
import { Card, Grid2, Typography } from '@mui/material';
import { getStyles } from './styles';
import { useParams } from 'react-router';
import { PRODUCT_SERVICE } from '../../service/product.service';
import FavoriteButton from '../../component/favorite-button';
import { ProductModel } from '../../model/product';
import PurchaseForm from '../../component/purchase-form';

const ProductPage: FC = () => {
  const [product, setProduct] = useState<ProductModel>();
  const { ml_id } = useParams<string>();
  const [styles] = useState(getStyles());

  useEffect(() => {
    PRODUCT_SERVICE.product(ml_id!).then(({ data }) => setProduct(data));
  }, [ml_id]);

  return (
    <PageContainer>
      <Grid2 sx={styles.root}>
        <Card sx={styles.card}>
          <Card sx={styles.imageCard}>
            <Grid2 sx={styles.imageGrid}>
              <Grid2 component="img" src={product?.images[0]} sx={styles.image} />
              <Grid2 sx={styles.iconButtonGrid}>
                {product && (
                  <FavoriteButton product={product} onUpdate={(product) => setProduct(product)} />
                )}
              </Grid2>
            </Grid2>
          </Card>
          <Grid2 sx={styles.cardBody}>
            <Typography variant="h4">{product?.name}</Typography>
            <Typography variant="body1">{product?.description}</Typography>
            <PurchaseForm ml_id={ml_id!} />
          </Grid2>
        </Card>
      </Grid2>
    </PageContainer>
  );
};

export default ProductPage;
