import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'antd';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';

const { Search } = Input;

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => dispatch(setFilter(e.target.value.trim()));

  return (
    <div style={{ marginBottom: 12 }}>
      <label>
        Filter contacts by name:
        <Search
          type="text"
          name="filter"
          placeholder="Search by name"
          size="large"
          value={filter}
          onChange={handleFilterChange}
          disabled={useSelector(selectContacts).length === 0}
        />
      </label>
    </div>
  );
};

export default Filter;
