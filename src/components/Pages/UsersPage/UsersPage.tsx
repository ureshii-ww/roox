import React from 'react';
import UsersList from '../../Containers/UsersList/UsersList';
import './users-page.scss';

const UsersPage = () => {
  return (
    <div className="users-page">
      <h1 className="users-page__title">Список пользователей</h1>
      <UsersList />
    </div>
  );
};

export default UsersPage;