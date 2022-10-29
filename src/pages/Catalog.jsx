import React, { useCallback, useEffect, useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Helmet from '../components/Helmet';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import productData from '../assets/fake-data/products';
import category from '../assets/fake-data/category';
import colors from '../assets/fake-data/product-color';
import size from '../assets/fake-data/product-size';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';

const Catalog = () => {
  const initFilter = {
    category: [],
    color: [],
    size: []
  }
  const productList = productData.getAllProducts();

  const [products, setProducts] = useState(productList);
  const [filter, setFilter] = useState(initFilter);
  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case 'CATEGORY':
          setFilter({ ...filter, category: [...filter.category, item.categorySlug] });
          break;
        case 'COLOR':
          setFilter({ ...filter, color: [...filter.color, item.color] });
          break;
        case 'SIZE':
          setFilter({ ...filter, size: [...filter.size, item.size] });
          break;
      }
    } else {
      switch (type) {
        case 'CATEGORY':
          const newCategory = filter.category.filter(e => e !== item.categorySlug);
          setFilter({ ...filter, category: newCategory });
          break;
        case 'COLOR':
          const newColor = filter.color.filter(e => e !== item.color);
          setFilter({ ...filter, color: newColor });
          break;
        case 'SIZE':
          const newSize = filter.size.filter(e => e !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
      }
    }
  }
  const clearFilter = () => setFilter(initFilter);
  const updateProducts = useCallback(
    () => {
      let temp = productList;
      if(filter.category.length > 0){
        temp = temp.filter(e => filter.category.includes(e.categorySlug));
        
      }
      if(filter.color.length > 0){
        temp = temp.filter(e => {
          const check = e.colors.find(color => filter.color.includes(color));
          return check !== undefined;
        })
      }
      if(filter.size.length > 0){
        temp = temp.filter(e => {
          const check = e.size.find(size => filter.size.includes(size));
          return check !== undefined;
        })
      }
      setProducts(temp);
    },
    [filter, productList],
  )

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  return (
    <>
      <Header />
      <div className="container">
        <div className="main">
          <Helmet title='Sản phẩm'>
            <div className="catalog">
              <div className="catalog__filter">
                <div className="catalog__filter__widget">
                  <div className="catalog__filter__widget__title">
                    Danh mục sản phẩm
                  </div>

                  <div className="catalog__filter__widget__content">
                    {
                      category.map((item, index) => (
                        <div className='catalog__filter__widget__content__item' key={index}>
                          <Checkbox
                            label={item.display}
                            onChange={(input) => filterSelect('CATEGORY', input.checked, item)}
                            checked={filter.category.includes(item.categorySlug)}
                          ></Checkbox>
                        </div>
                      ))
                    }
                  </div>
                </div>

                <div className="catalog__filter__widget">
                  <div className="catalog__filter__widget__title">
                    Màu sắc
                  </div>

                  <div className="catalog__filter__widget__content">
                    {
                      colors.map((item, index) => (
                        <div className='catalog__filter__widget__content__item' key={index}>
                          <Checkbox
                            label={item.display}
                            onChange={(input) => filterSelect('COLOR', input.checked, item)}
                            checked={filter.color.includes(item.color)}
                          ></Checkbox>
                        </div>
                      ))
                    }
                  </div>
                </div>

                <div className="catalog__filter__widget">
                  <div className="catalog__filter__widget__title">
                    Kích cỡ
                  </div>

                  <div className="catalog__filter__widget__content">
                    {
                      size.map((item, index) => (
                        <div className='catalog__filter__widget__content__item' key={index}>
                          <Checkbox
                            label={item.display}
                            onChange={(input) => filterSelect('SIZE', input.checked, item)}
                            checked={filter.size.includes(item.size)}
                          ></Checkbox>
                        </div>
                      ))
                    }
                  </div>
                </div>

                <div className="catalog__filter__widget">
                  <div className="catalog__filter__widget__content">
                    <Button size='sm' animate={true} onClick={clearFilter}>Xoá bộ lọc</Button>
                  </div>
                </div>
              </div>
              <div className="catalog__content">
                <Grid
                  col={3}
                  smCol={1}
                  gap={20}
                >
                  {
                    products.map((item, index) => (
                      <ProductCard
                        key={index}
                        img={item.image01}
                        name={item.title}
                        price={Number(item.price)}
                        slug={item.slug}
                      />
                    ))
                  }
                </Grid>
              </div>
            </div>
          </Helmet>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Catalog