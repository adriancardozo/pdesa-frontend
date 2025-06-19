import { Button, Grid2, Stack, TextField, Typography } from '@mui/material';
import { FC, MouseEventHandler, useState } from 'react';
import { PRODUCT_SERVICE } from '../../service/product.service';
import Product from '../../component/product';
import { ProductModel } from '../../model/product';
import { getStyles } from './style';
import { useNavigate } from 'react-router';

const HomePage: FC = () => {
  const navigate = useNavigate();
  const [styles] = useState(getStyles());
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState<Array<ProductModel>>([]);

  const search: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (searchText) {
      PRODUCT_SERVICE.search(searchText)
        .then(({ data }) => {
          setProducts(data);
          navigate(`/results?q=${searchText}`);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <Grid2 sx={styles.root}>
      <Typography variant="h3" color="textSecondary">
        Buscar un producto
      </Typography>
      <Stack component="form" sx={styles.form} spacing={2} noValidate autoComplete="off" direction="row">
        <TextField
          label="Buscar productos"
          variant="filled"
          sx={styles.search}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          data-testid="product-search-input"
        />
        <Button variant="contained" type="submit" onClick={search} data-testid="product-search-submit">
          Buscar
        </Button>
      </Stack>
      <Grid2 sx={styles.products}>
        {products.map((product) => (
          <Product data-testid="product" key={`product-${product.ml_id}`} {...{ product, setProducts }} />
        ))}
      </Grid2>
    </Grid2>
  );
};

export default HomePage;
