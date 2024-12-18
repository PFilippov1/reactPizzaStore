import React from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Categories from '../components/Categories';
import Sort, { sortList } from '../components/Sort';
import Pagination from '../components/Pagination';
import { fetchPizzas, selectPizzaData } from '../redux/slices/pizzaSlice';
import { selectFilter } from '../redux/slices/filterSlice';

const Home: React.FC = () => {
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzaData);
  const IsMounted = React.useRef(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = React.useRef(false);

  const onChangeCategory = (idx: number) => {
    dispatch(setCategoryId(idx));
  };
  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    // const search = searchValue ? `&search=${searchValue}sortProperty ` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    //TODO
    dispatch(
      //@ts-ignore
      fetchPizzas({ sortBy, order, category, search, currentPage })
    );

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
    getPizzas();
    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  //if there was first render - check URL parameters and save in redux 2
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find((obj) => obj === params.sortProperty);
      dispatch(setFilters({ ...params, sort }));
    }
    isSearch.current = false;
  }, []);

  const pizzas =
    Array.isArray(items) &&
    items.map((obj:any) => {
      return (
        // <Link key={obj.id} to={`/pizza/${obj.id}`}>
        //   <PizzaBlock {...obj} />
        // </Link>
        <PizzaBlock key={obj.id} {...obj} />
      );
    });
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">All pizza</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>An error occurred</h2>
          <p>It was not possible to get pizza. Please try to repeat the attempt later.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};
export default Home;
