import { FC, MouseEventHandler, useEffect, useState } from 'react';
import PageContainer from '../../component/page-container';
import { Button, Card, Grid2, Stack, TextField, Typography } from '@mui/material';
import { getStyles } from './styles';
import { useNavigate, useParams } from 'react-router';
import { PRODUCT_SERVICE } from '../../service/product.service';
import FavoriteButton from '../../component/favorite-button';
import { ProductModel } from '../../model/product';
import { PURCHASE_SERVICE } from '../../service/purchase.service';

const ProductPage: FC = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number>(1);
  const [product, setProduct] = useState<ProductModel>();
  const [purchased, setPurchased] = useState<boolean>(false);
  const [purchasing, setPurchasing] = useState<boolean>(false);
  const { ml_id } = useParams<string>();
  const [styles] = useState(getStyles());

  useEffect(() => {
    PRODUCT_SERVICE.product(ml_id!).then(({ data }) => setProduct(data));
  }, [ml_id]);

  const purchase: MouseEventHandler<HTMLButtonElement> = () => {
    setPurchasing(true);
    PURCHASE_SERVICE.purchase(ml_id!, amount)
      .then(() => {
        setPurchased(true);
        setTimeout(() => {
          setPurchased(false);
          navigate('/purchase');
        }, 2000);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setAmount(1);
        setPurchasing(false);
      });
  };

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
            <Stack component="form" sx={styles.form} spacing={2} noValidate autoComplete="off">
              <TextField
                label="Cantidad"
                variant="standard"
                value={amount}
                type="number"
                sx={styles.amount}
                slotProps={{ htmlInput: { min: 1 } }}
                onChange={(e) => setAmount(+e.target.value)}
              />
              {purchasing ? (
                <Button variant="contained" color="primary" disabled>
                  Comprando
                </Button>
              ) : purchased ? (
                <Button variant="contained" color="success">
                  Comprado
                </Button>
              ) : (
                <Button variant="contained" color="primary" onClick={purchase}>
                  Comprar
                </Button>
              )}
            </Stack>
          </Grid2>
        </Card>
      </Grid2>
    </PageContainer>
  );
};

export default ProductPage;
