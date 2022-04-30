import React, { FC } from 'react';
import { UserModel } from '../../../models/user.model';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../../routes/route-names';
import './user-card.scss'

type UserCardProps = Pick<UserModel, 'name' | 'id'> &
  Pick<UserModel, 'address'> &
  Pick<UserModel, 'company'>;

const UserCard: FC<UserCardProps> = ({ name, id, address, company  }) => {
  return (
    <li className="user-card">
      <div className="user-card__info">
        <div className="user-card__line">
          <span className="user-card__legend">Фио: </span>
          <span className="user-card__value">{name}</span>
        </div>
        <div className="user-card__line">
          <span className="user-card__legend">Город: </span>
          <span className="user-card__value">{address.city}</span>
        </div>
        <div className="user-card__line">
          <span className="user-card__legend">Компания: </span>
          <span className="user-card__value">{company.name}</span>
        </div>
      </div>
      <div className="user-card__controls">
        <Link to={`${RouteNames.ProfileBase}/${id}`}>Подробнее</Link>
      </div>
    </li>
  );
};

export default UserCard;
