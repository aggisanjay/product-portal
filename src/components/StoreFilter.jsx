

import React from "react";
import { Input } from "antd";

const { Search } = Input;

const StoreFilter = ({ filter, setFilter }) => {
  return (
    <Search 
      placeholder="Filter by Store"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      allowClear
      enterButton
      size="large"
    />
  );
};

export default StoreFilter;

