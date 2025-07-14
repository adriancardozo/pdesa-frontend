import { FC, MouseEventHandler, useState } from 'react';
import { Card, Grid2, Tooltip, Typography } from '@mui/material';
import { getStyles } from './styles';

export type ActionTextProps = {
  title: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const ActionText: FC<ActionTextProps> = ({ title, onClick, ...rest }) => {
  const [styles] = useState(getStyles());

  return (
    <Grid2 sx={styles.root} onClick={onClick} {...rest}>
      <Tooltip title={title}>
        <Grid2 sx={styles.cardGrid}>
          <Card sx={styles.card}>
            <Grid2 sx={styles.user}>
              <Typography variant="h6" sx={styles.name} noWrap>
                {title}
              </Typography>
            </Grid2>
          </Card>
        </Grid2>
      </Tooltip>
    </Grid2>
  );
};

export default ActionText;
