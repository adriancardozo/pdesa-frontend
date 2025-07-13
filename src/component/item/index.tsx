import { FC, MouseEventHandler, ReactNode, useState } from 'react';
import { Card, Grid2, Tooltip, Typography } from '@mui/material';
import { getStyles } from './styles';

export type ItemProps = {
  title: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  images?: Array<string>;
  mainContent?: ReactNode;
  children: Array<ReactNode> | ReactNode;
};

const Item: FC<ItemProps> = ({ title, onClick, images, children, mainContent, ...rest }) => {
  const childs = children instanceof Array ? children : [children];
  const [styles] = useState(getStyles());

  const content = () => {
    const imageUrls = images ?? [];
    return mainContent ?? (imageUrls[0] && <Grid2 component="img" src={imageUrls[0]} sx={styles.image} />);
  };

  return (
    <Grid2 sx={styles.root} onClick={onClick} {...rest}>
      <Tooltip title={title}>
        <Grid2 sx={styles.cardGrid}>
          <Card sx={styles.card}>
            <Grid2 sx={styles.content}>{content()}</Grid2>
            <Grid2 sx={styles.item}>
              <Typography variant="h6" sx={styles.title} noWrap>
                {title}
              </Typography>
              <Typography variant="caption" sx={styles.title} noWrap>
                {childs.map((child) => (
                  <>
                    {child}
                    <br />
                  </>
                ))}
              </Typography>
            </Grid2>
          </Card>
        </Grid2>
      </Tooltip>
    </Grid2>
  );
};

export default Item;
