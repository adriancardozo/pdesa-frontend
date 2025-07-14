import { FC, useState } from 'react';
import { UserResponse } from '../../type/user-response.type';
import { ProductResponse } from '../../type/product-response.type';
import { Card, Grid2, Typography } from '@mui/material';
import { MetricItem as MetricItemType } from '../../type/metric-item.type';
import { getStyles } from './styles';
import MetricItem from '../metric-item';

export type UserMetricCardProps = {
  title: string;
  type: 'user';
  items: Array<MetricItemType<UserResponse>>;
  cardKey: string;
};

export type ProductMetricCardProps = {
  title: string;
  type: 'product';
  items: Array<MetricItemType<ProductResponse>>;
  cardKey: string;
};

export type MetricsCardProps = UserMetricCardProps | ProductMetricCardProps;

const MetricCard: FC<MetricsCardProps> = ({ title, type, items, cardKey }) => {
  const [styles] = useState(getStyles());

  return (
    <Card elevation={5} sx={styles.root}>
      <Grid2 sx={styles.content}>
        <Typography variant="h4" textAlign="start">
          {title}
        </Typography>
        <Grid2 sx={styles.body}>
          <Grid2 sx={styles.mainAmount}>
            <Typography variant="h1">{items[0]?.amount ?? 0}</Typography>
          </Grid2>
          <Grid2 sx={styles.topFive}>
            {[1, 2, 3, 4, 5].map((value, index) => (
              <MetricItem
                key={`item-${cardKey}-${index}-${type === 'user' ? (items[index]?.content?.id ?? '') : (items[index]?.content?.ml_id ?? '')}`}
                position={value}
                item={items[index] as any}
                type={type}
              />
            ))}
          </Grid2>
        </Grid2>
      </Grid2>
    </Card>
  );
};

export default MetricCard;
