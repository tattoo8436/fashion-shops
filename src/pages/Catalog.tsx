import React, { useEffect, useState } from 'react';
import { Breadcrumb, Button, Checkbox, Col, Divider, Drawer, Empty, Input, Pagination, Row, Spin } from 'antd';

import Helmet from '../components/Helmet';
import productData from '../assets/fake-data/products';
import { FilterOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { CheckboxValueType } from 'antd/es/checkbox/Group';

interface IProduct {
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

  const [openFilter, setOpenFilter] = useState(false);
  const [categories, setCategories] = useState<CheckboxValueType[]>([]);
  const [colors, setColors] = useState<CheckboxValueType[]>([]);
  const [sizes, setSizes] = useState<CheckboxValueType[]>([]);
  const [searchTxt, setSearchTxt] = useState('');
  const [loadProducts, setLoadProducts] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadProducts(true);
    }, 500);
  }, [products])


  const onCategoriesChange = (e: CheckboxValueType[]) => {
    setCategories(e);
  }

  const onColorsChange = (e: CheckboxValueType[]) => {
    setColors(e);
  }

  const onSizesChange = (e: CheckboxValueType[]) => {
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
      <Helmet title='S???n ph???m'>
        <div className="catalog">
          <Drawer
            open={openFilter}
            onClose={() => setOpenFilter(false)}>
            <div className="catalog__filter">
              <div className="catalog__filter__title">
                Danh m???c s???n ph???m
              </div>

              <div className="catalog__filter__content">
                <Checkbox.Group
                  onChange={onCategoriesChange}
                >
                  <Row>
                    <Col span={12}>
                      <Checkbox value='ao-thun'>??o thun</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value='ao-somi'>??o somi</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value='quan-jean'>Qu???n jean</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </div>

              <div className="catalog__filter__title">
                M??u s???c
              </div>

              <div className="catalog__filter__content">
              <Checkbox.Group
                  onChange={onColorsChange}
                >
                  <Row>
                    <Col span={12}>
                      <Checkbox value='white'>Tr???ng</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value='pink'>H???ng</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value='black'>??en</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value='yellow'>V??ng</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value='orange'>Cam</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value='blue'>Xanh d????ng</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </div>

              <div className="catalog__filter__title">
                K??ch c???
              </div>

              <div className="catalog__filter__content">
              <Checkbox.Group
                  onChange={onSizesChange}
                >
                  <Row>
                    <Col span={12}>
                      <Checkbox value='s'>S</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value='m'>M</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value='l'>L</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value='xl'>XL</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value='xxl'>XXL</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </div>

              <Button
                type='primary'
                onClick={() => {
                  updateProducts();
                  setOpenFilter(false);
                }}
              >L???c</Button>

              <Button
                onClick={() => window.location.reload()}
              >Xo?? b??? l???c</Button>
            </div>
          </Drawer>

          <div className="catalog__header">
            <div className="catalog__header__route">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Link to='/'>Trang ch???</Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                  <Link to='/catalog'>S???n ph???m</Link>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <Row>
              <Col span={12} offset={6}>
                <div className="catalog__header__search">
                  <Input.Search
                    onChange={(e) => setSearchTxt(e.target.value)}
                    placeholder='T??m ki???m'
                    allowClear
                    onSearch={() => {
                      updateProducts();
                    }}
                  />
                </div>
              </Col>

              <Col span={4} offset={2}>
                <div className="catalog__header__filter">
                  B??? l???c
                  <FilterOutlined onClick={() => setOpenFilter(true)} />
                </div>
              </Col>
            </Row>
          </div>
          <div className="catalog__content">
            {products.length === 0 && <Empty description='Kh??ng t??m th???y s???n ph???m n??o' />}

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