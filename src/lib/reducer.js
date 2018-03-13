import { actionTypes } from './actions';

// Supongamos que estos son los productos que recibimos de nuestra API JSON
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$1699.99', stocked: true, name: 'Nexus 7'},
];

const INIT_STATE = {
  originalProducts: PRODUCTS,
  // La de productos
  filteredProducts: PRODUCTS,
  // El texto de búsqueda que ingresa el usuario
  filterText: '',
  // El valor del checkbox
  inStockOnly: false
}

export default (state = INIT_STATE, action) => {
  switch(action.type) {
    case actionTypes.FILTER_TEXT_CHANGED:
      state = {
        ...state,
        filterText: action.text
      }
      break;

    case actionTypes.IN_STOCK_ONLY_CHANGED:
      state = {
        ...state,
        inStockOnly: action.value
      }
      break;

    default:
      return state;
  }

  if(
    action.type === actionTypes.FILTER_TEXT_CHANGED ||
    action.type === actionTypes.IN_STOCK_ONLY_CHANGED
  ) {
    const filteredProducts = state.originalProducts.filter(p => {
      const filterText = 
      (action.type === actionTypes.FILTER_TEXT_CHANGED?
        action.text:
        state.filterText).trim()

      const inStockOnly = 
      action.type === actionTypes.IN_STOCK_ONLY_CHANGED?
      action.value:
      state.inStockOnly

      return(
        (inStockOnly?p.stocked:true) &&
        p.name.match(new RegExp(filterText, 'ig'))
      )
    })

    state = {
      ...state,
      filteredProducts
    }
  }

  return state;
}