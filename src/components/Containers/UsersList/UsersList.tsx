import React from 'react';
import { useUsersList } from './useUsersList';
import UserCard from '../../UI/UserCard/UserCard';
import './users-list.scss';
import Loader from '../../UI/Loader/Loader';

const UsersList = () => {
  const { usersList, isLoading } = useUsersList();

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {usersList && usersList.length > 0 ? (
        <ul className="users-list">
          {usersList.map(user => (
            <UserCard
              key={user.id}
              name={user.name}
              address={user.address}
              company={user.company}
              id={user.id}
            />
          ))}
        </ul>
      ) : (
        <div>No users</div>
      )}
    </>
  );
};

export default UsersList;
