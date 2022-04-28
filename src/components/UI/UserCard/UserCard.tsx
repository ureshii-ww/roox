import React, { FC } from 'react';
import { UserModel } from '../../../models/user.model';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../../routes/route-names';

type UserCardProps = Pick<UserModel, 'name' | 'id'> &
  Pick<UserModel, 'address'> &
  Pick<UserModel, 'company'>;

const UserCard: FC<UserCardProps> = ({ name, id, address, company  }) => {
  return (
    <div>
      <div>
        <div>
          <span>Фио:</span>
          <span>{name}</span>
        </div>
        <div>
          <span>Город</span>
          <span>{address.city}</span>
        </div>
        <div>
          <span>Компания</span>
          <span>{company.name}</span>
        </div>
      </div>
      <div>
        <Link to={`${RouteNames.ProfileBase}/${id}`}>Подробнее</Link>
      </div>
    </div>
  );
};

export default UserCard;
