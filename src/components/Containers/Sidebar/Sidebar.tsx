import React from 'react';
import Button from '../../UI/Button/Button';
import { useSidebar } from './useSidebar';

const Sidebar = () => {
  const {handleSortByName, handleSortByCity, isSortedByCity, isSortedByName} = useSidebar();
  
  return (
    <div>
      <div>
        <h2>Сортировка</h2>
        <Button onClick={handleSortByCity} disabled={isSortedByCity}>По городу</Button>
        <Button onClick={handleSortByName} disabled={isSortedByName}>По имени</Button>
      </div>
    </div>
  );
};

export default Sidebar;