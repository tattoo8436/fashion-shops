import React, { useEffect, useState } from 'react';
import { Breadcrumb, Button, Checkbox, Col, Divider, Drawer, Empty, Input, Pagination, Row, Spin } from 'antd';

import Helmet from '../components/Helmet';
import productData from '../assets/fake-data/products';
import category from '../assets/fake-data/category';
import color from '../assets/fake-data/product-color';
import size from '../assets/fake-data/product-size';
import { FilterOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

interface IProduct{
  title: string,
  price: string,
  image01: typeof import("*.jpg"),
  image02: typeof import("*.jpg"),
  categorySlug: string,
  colors: string[],
  slug: string,
  size: string[],
  description: string
}

const Catalog = (): JSX.Element => {
  const productList = productData.getAllProducts();

  const [products, setProducts] = useState<IProduct[]>(productList);

  const optionCategories = category.map((item) => ({
    label: item.display,
    value: item.categorySlug
  }))

  const optionColors = color.map((item) => ({
    label: item.display,
    value: item.color
  }))

  const optionSizes = size.map((item) => ({
    label: item.display,
    value: item.size
  }))

  const [openFilter, setOpenFilter] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [searchTxt, setSearchTxt] = useState('');
  const [loadProducts, setLoadProducts] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadProducts(true);
    }, 500);
  }, [products])
  

  const onCategoriesChange = (e: any) => {
    setCategories(e);
  }

  const onColorsChange = (e: any) => {
    setColors(e);
  }

  const onSizesChange = (e: any) => {
    setSizes(e)
  }

  const updateProducts = () => {
    console.log({ categories }, { colors }, { sizes });
    let temp = productList;
    console.log(temp);
    if (categories.length > 0) {
      temp = temp.filter((e) => categories.includes(e.categorySlug));
    }
    if (colors.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color: any) => colors.includes(color));
        return check !== undefined;
      })
    }
    if (sizes.length > 0) {
      temp = temp.filter(e => {
        const check = e.size.find(size => sizes.includes(size));
        return check !== undefined;
      })
    }
    temp = temp.filter(e => (e.title.toLowerCase()).includes(searchTxt.toLowerCase()))
    console.log(temp);
    setProducts(temp);
  }

  return (
    <div className="container">
      <Helmet title='Sản phẩm'>
        <div className="catalog">
          <Drawer
            open={openFilter}
            onClose={() => setOpenFilter(false)}>
            <div className="catalog__filter">
              <div className="catalog__filter__title">
                Danh mục sản phẩm
              </div>

              <div className="catalog__filter__content">
                <Checkbox.Group
                  options={optionCategories}
                  onChange={onCategoriesChange}
                ></Checkbox.Group>
              </div>

              <div className="catalog__filter__title">
                Màu sắc
              </div>

              <div className="catalog__filter__content">
                <Checkbox.Group
                  options={optionColors}
                  onChange={onColorsChange}
                ></Checkbox.Group>
              </div>

              <div className="catalog__filter__title">
                Kích cỡ
              </div>

              <div className="catalog__filter__content">
                <Checkbox.Group
                  options={optionSizes}
                  onChange={onSizesChange}
                ></Checkbox.Group>
              </div>

              <Button
                type='primary'
                onClick={() => {
                  updateProducts();
                  setOpenFilter(false);
                }}
              >Lọc</Button>

              <Button
                onClick={() => window.location.reload()}
              >Xoá bộ lọc</Button>
            </div>
          </Drawer>

          <div className="catalog__header">
            <div className="catalog__header__route">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Link to='/'>Trang chủ</Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                  <Link to='/catalog'>Sản phẩm</Link>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <Row>
              <Col span={12} offset={6}>
                <div className="catalog__header__search">
                  <Input.Search
                    onChange={(e) => setSearchTxt(e.target.value)}
                    placeholder='Tìm kiếm'
                    allowClear
                    onSearch={() => {
                      updateProducts();
                    }}
                  />
                </div>
              </Col>

              <Col span={4} offset={2}>
                <div className="catalog__header__filter">
                  Bộ lọc
                  <FilterOutlined onClick={() => setOpenFilter(true)} />
                </div>
              </Col>
            </Row>
          </div>
          <div className="catalog__content">
            {products.length === 0 && <Empty description='Không tìm thấy sản phẩm nào' />}

            {
              loadProducts ?
                <Row gutter={[30, 30]}>
                  {
                    products.map((item, index) => (
                      <Col xs={8} xl={4} key={index}>
                        <ProductCard
                          img={item.image01}
                          name={item.title}
                          price={Number(item.price)}
                          slug={item.slug}
                        />
                      </Col>
                    ))
                  }
                </Row> : <Spin spinning />}

            <Row>
              <Col>
                <Pagination />
              </Col>
            </Row>

          </div>
        </div>

        <Divider />
      </Helmet>
    </div>
  )
}

export default Catalog