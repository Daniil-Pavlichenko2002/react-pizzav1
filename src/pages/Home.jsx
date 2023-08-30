import React, { useCallback, useEffect } from 'react'
import Categories from '../components/Categories'
import SortPopup from '../components/SortPopup'
import PizzaBlock from '../components/PizzaBlock/index'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from "../redux/actions/pizzas";
import PizzaLoadingBlock from '../components/PizzaBlock/PizzaLoadingBlock'
import { addPizzaToCart } from '../redux/actions/cart'


const categoryNames = [
  "Мясные",
  "Вегетерианские",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  {name: "популярности", type: 'rating', order: 'desc'}, 
  {name: "цене", type: 'price', order: 'desc'}, 
  {name: "алфавиту", type: 'name', order: 'asc'}
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const cartItems = useSelector(({ cart }) => cart.items);
  const {category, sortBy} = useSelector(({ filters }) => filters);


  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [dispatch, category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);

  const onSelectSortType = useCallback((obj) => {
    dispatch(setSortBy(obj))
  }, [dispatch])

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj))
  }
  return (
    <div className="container">
    <div className="content__top">
      <Categories  
        activeCategory={category} 
        onClickCategory={onSelectCategory} 
        items={categoryNames}
      />
      <SortPopup 
        activeSortType={sortBy.type} 
        onClickSortType={onSelectSortType} 
        items={sortItems}/>
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
        {isLoaded ? 
          items.map((obj) => (
          <PizzaBlock 
            onClickAddPizza={handleAddPizzaToCart} 
            // dispatch={dispatch} 
            addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
            key={obj.id} 
            {...obj} />)) :
          Array(10).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)
        }
    </div>
  </div>
  )
}

export default Home