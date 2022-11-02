import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import Grid from './Grid';
import ProductCard from './ProductCard';

const InfinityList = props => {
    const listRef = useRef(null);
    const perLoad = 6;
    const [data, setData] = useState(props.data.slice(0, perLoad));
    const [load, setLoad] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
      setData(props.data.slice(0, perLoad));
      setIndex(1);
    }, [props.data])
    
    useEffect(() => {
      window.addEventListener('scroll', () => {
        if(window.scrollY + window.innerHeight >= 
            listRef.current.clientHeight + listRef.current.offsetTop + 200){
                setLoad(true);
            }
      }) 
    }, [listRef])

    useEffect(() => {
      const getItems = () => {
        const pages = Math.floor(props.data.length / perLoad);
        const maxIndex = props.data.length % perLoad === 0 ? pages : pages + 1;
        if(load && index <= maxIndex){
            const start = perLoad * index;
            const end = start + perLoad;
            setData(data.concat(props.data.slice(start, end)));
            setIndex(index + 1);
        }
      }
      getItems();
      setLoad(false);
    }, [load, index, data, props.data])
    

    return (
        <div ref={listRef}>
            <Grid
                col={3}
                smCol={1}
                gap={20}
            >
                {
                    data.map((item, index) => (
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
    )
}

InfinityList.propTypes = {
    data: PropTypes.array.isRequired
}

export default InfinityList