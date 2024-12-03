import React from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Categories from '../components/Categories';
import Sort, { sortList } from '../components/Sort';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

function Home() {
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
  const IsMounted = React.useRef(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const isSearch = React.useRef(false);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchPizzas = () => {
    setIsLoading(true);
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}sortProperty ` : '';
    axios
      .get(
        `https://67360abe5995834c8a952b8f.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((error) => console.error('error:', error));
    window.scrollTo(0, 0);
  };

//if parameters were changed and was first render  1
  React.useEffect(() => {
    if (IsMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    IsMounted.current = true;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);


  //if parameters were changed and was first render 3
  React.useEffect(() => {
    window.scroll(0, 0);
    if (!isSearch.current) {
      fetchPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  //if there was first render - check URL parameters and save in redux 2
  React.useEffect(() => {
    if (window.Location.search) {
      const params = qs.parse(window.Location.search.substring(1));
      const sort = sortList.find((obj) => obj === params.sortProperty);
      dispatch(setFilters({ ...params, sort }));
    }
    isSearch.current = false;
  }, []);

  
  const pizzas =
    Array.isArray(items) &&
    items.map((obj) => {
      return <PizzaBlock key={obj.id} {...obj} />;
    });
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">All pizza</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination value={currentPage} onChangePage={onChangePage} />
    </div>
  );
}
export default Home;
