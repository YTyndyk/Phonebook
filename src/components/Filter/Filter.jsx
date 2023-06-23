import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilterValue } from 'redux/filterSlice';
import css from '../GlobalStyles.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(setFilterValue(e.target.value.trim()));
  };

  return (
    <label htmlFor="" className={css.labelFilter}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Find contacts by name"
        placeholder="search"
        required
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};

export default Filter;
