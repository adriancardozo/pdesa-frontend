import { Button, Grid2, Stack, TextField, Typography } from '@mui/material';
import { FC, MouseEventHandler, useCallback, useEffect, useState } from 'react';
import { PRODUCT_SERVICE } from '../../service/product.service';
import Product from '../../component/product';
import { ProductModel } from '../../model/product';
import { getStyles } from './style';
import { useLocation, useNavigate, useSearchParams } from 'react-router';
import PageContainer from '../../component/page-container';

const HomePage: FC = () => {
  const location = useLocation();
  const [query] = useSearchParams();
  const navigate = useNavigate();
  const [styles] = useState(getStyles());
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState<Array<ProductModel>>([]);

  const search = useCallback((text: string) => {
    if (text) {
      PRODUCT_SERVICE.search(text)
        .then(({ data }) => setProducts(data))
        .catch((error) => console.error(error));
    }
  }, []);

  const results: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (searchText) navigate(`/results?q=${searchText}`);
  };

  useEffect(() => {
    if (location.pathname === '/results') {
      const text = query.get('q') ?? '';
      setSearchText(text);
      setProducts([]);
      search(text);
    }
    if (location.pathname === '/home') {
      setSearchText('');
      setProducts([]);
    }
  }, [location.pathname, location.search, query, search]);

  return (
    <PageContainer>
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
        <Button variant="contained" type="submit" onClick={results} data-testid="product-search-submit">
          Buscar
        </Button>
      </Stack>
      <Grid2 sx={styles.products}>
        {products.map((product) => (
          <Product data-testid="product" key={`product-${product.ml_id}`} {...{ product, setProducts }} />
        ))}
      </Grid2>
    </PageContainer>
  );
};

export default HomePage;
