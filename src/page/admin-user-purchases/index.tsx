import { Grid2, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import PageContainer from '../../component/page-container';
import { PurchaseResponse } from '../../type/purchase-response';
import { getStyles } from './style';
import Purchase from '../../component/purchase';
import { UserResponse } from '../../type/user-response.type';
import { useNavigate, useParams } from 'react-router';
import { ADMIN_USER_SERVICE } from '../../service/admin-user.service';

const AdminUserPurchasesPage: FC = () => {
  const navigate = useNavigate();
  const { user_id } = useParams();
  const [user, setUser] = useState<UserResponse>();
  const [purchases, setPurchases] = useState<Array<PurchaseResponse>>([]);
  const [styles] = useState(getStyles());

  useEffect(() => {
    ADMIN_USER_SERVICE.user(user_id!)
      .then(({ data }) => setUser(data))
      .catch((e) => console.error(e));
    ADMIN_USER_SERVICE.purchases(user_id!)
      .then(({ data }) => setPurchases(data))
      .catch((e) => console.error(e));
  }, [user_id]);

  return (
    <PageContainer>
      <Grid2 sx={styles.root}>
        <Grid2 sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            Compras: {user?.firstName} {user?.lastName}
          </Typography>
        </Grid2>
        {purchases.map((purchase) => (
          <Purchase
            key={`purchase-${purchase.id}`}
            purchase={purchase}
            onUpdateProduct={() => undefined}
            onClick={() => navigate(`/admin/product/${purchase.product.ml_id}`)}
            disabled
          />
        ))}
      </Grid2>
    </PageContainer>
  );
};

export default AdminUserPurchasesPage;
