import { Chip, Grid2 } from '@mui/material';
import { MouseEventHandler, ReactNode, useState } from 'react';
import ActionText from '../action-text';
import { getStyles } from './styles';
import { MetricItem as MetricItemType } from '../../type/metric-item.type';
import { UserResponse } from '../../type/user-response.type';
import { ProductResponse } from '../../type/product-response.type';
import { useNavigate } from 'react-router';

export type UserMetricItemProps = {
  position: number;
  item?: MetricItemType<UserResponse>;
  type: 'user';
};

export type ProductMetricItemProps = {
  position: number;
  item?: MetricItemType<ProductResponse>;
  type: 'product';
};

export type MetricItemProps = UserMetricItemProps | ProductMetricItemProps;

const MetricItem = ({ position, item, type }: MetricItemProps): ReactNode => {
  const [styles] = useState(getStyles());
  const navigate = useNavigate();

  const title = () => {
    return type === 'user' ? `${item!.content.firstName} ${item!.content.lastName}` : item!.content.name;
  };

  const click: MouseEventHandler<HTMLDivElement> = () => {
    if (type === 'user') {
      navigate(`/admin/user/${item!.content.id}/purchase`);
    } else {
      navigate(`/admin/product/${item!.content.ml_id}`);
    }
  };

  return (
    <Grid2 sx={styles.root}>
      <Grid2 sx={styles.label}>
        {position}° <Chip label={item?.amount ?? 0} color="secondary" sx={styles.number} />
      </Grid2>
      <Grid2 sx={styles.content}>{item && <ActionText title={title()} onClick={click} />}</Grid2>
    </Grid2>
  );
};

export default MetricItem;
