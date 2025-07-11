import { FC, useState } from 'react';
import { Card, Grid2, Tooltip, Typography } from '@mui/material';
import { getStyles } from './styles';
import { PurchaseResponse } from '../../type/purchase-response';
import { useNavigate } from 'react-router';

export type PurchaseProps = {
  purchase: PurchaseResponse;
};

const Purchase: FC<PurchaseProps> = ({ purchase, ...rest }) => {
  const navigate = useNavigate();
  const [styles] = useState(getStyles());

  return (
    <Grid2 sx={styles.root} onClick={() => navigate(`/product/${purchase.product.ml_id}`)} {...rest}>
      <Tooltip title={purchase.product.name}>
        <Grid2 sx={styles.cardGrid}>
          <Card sx={styles.card}>
            <Grid2 sx={styles.imageGrid}>
              <Grid2 component="img" src={purchase.product.images[0]} sx={styles.image} />
            </Grid2>
            <Grid2 sx={styles.purchase}>
              <Typography variant="h6" sx={styles.name} noWrap>
                {purchase.product.name}
              </Typography>
              <Typography variant="caption" sx={styles.name} noWrap>
                Precio: $ {purchase.price}
                <br />
                Cantidad: {purchase.amount}
                <br />
                Precio final: <b>$ {purchase.final_price}</b>
              </Typography>
            </Grid2>
          </Card>
        </Grid2>
      </Tooltip>
    </Grid2>
  );
};

export default Purchase;
