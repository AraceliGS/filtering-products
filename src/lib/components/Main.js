import React from 'react';
import PropTypes from 'prop-types';
import FilterableProductTable from '../FilterableProductTable/components';

const Main = ({products}) => {
  
  return (
    <FilterableProductTable products={products}/>
  )
}

Main.proptypes = {
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default Main;