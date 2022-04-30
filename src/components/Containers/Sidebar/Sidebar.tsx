import React from 'react';
import Button from '../../UI/Button/Button';
import { useSidebar } from './useSidebar';
import './sidebar.scss';

const Sidebar = () => {
  const { handleSortByName, handleSortByCity, isSortedByCity, isSortedByName } = useSidebar();

  return (
    <div className="sidebar">
      <div className="sidebar__controls">
        <h2 className="sidebar__title">Сортировка</h2>
        <Button className="sidebar__button" onClick={handleSortByCity} disabled={isSortedByCity}>
          По городу
        </Button>
        <Button className="sidebar__button" onClick={handleSortByName} disabled={isSortedByName}>
          По имени
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;