import React, { FC } from 'react';
import { UserModel } from '../../../models/user.model';
import { useProfileForm } from './useProfileForm';
import InputBlock from '../../UI/InputBlock/InputBlock';
import InputText from '../../UI/InputText/InputText';
import InputTextarea from '../../UI/InputTextarea/InputTextarea';
import Button from '../../UI/Button/Button';
import './profile-form.scss';

interface ProfileFormProps {
  user: UserModel;
}

const ProfileForm: FC<ProfileFormProps> = ({ user }) => {
  const { useFormProps, onSubmit, toggleIsEditable, isEditable } = useProfileForm(user);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useFormProps;

  return (
    <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
      <header className="profile-form__header">
        <h1>Профиль пользователя</h1>
        <Button type="button" onClick={toggleIsEditable}>
          Редактировать
        </Button>
      </header>
      <fieldset className="profile-form__fieldset">
        <InputBlock label="Name" name="name">
          <InputText
            defaultValue={user.name}
            {...register('name', { required: true })}
            disabled={!isEditable}
            className={errors.name && 'input-text--red'}
          />
        </InputBlock>
        <InputBlock label="Username" name="username">
          <InputText
            defaultValue={user.username}
            {...register('username', { required: true })}
            disabled={!isEditable}
            className={errors.username && 'input-text--red'}
          />
        </InputBlock>
        <InputBlock label="Email" name="email">
          <InputText
            defaultValue={user.email}
            type="email"
            {...register('email', { required: true })}
            disabled={!isEditable}
            className={errors.email && 'input-text--red'}
          />
        </InputBlock>
        <InputBlock label="Street" name="street">
          <InputText
            defaultValue={user.address.street}
            {...register('street', { required: true })}
            disabled={!isEditable}
            className={errors.street && 'input-text--red'}
          />
        </InputBlock>
        <InputBlock label="City" name="city">
          <InputText
            defaultValue={user.address.city}
            {...register('city', { required: true })}
            disabled={!isEditable}
            className={errors.city && 'input-text--red'}
          />
        </InputBlock>
        <InputBlock label="Zipcode" name="zipcode">
          <InputText
            defaultValue={user.address.zipcode}
            {...register('zipcode', { required: true })}
            disabled={!isEditable}
            className={errors.zipcode && 'input-text--red'}
          />
        </InputBlock>
        <InputBlock label="Phone" name="phone">
          <InputText
            defaultValue={user.phone}
            {...register('phone', { required: true })}
            disabled={!isEditable}
            className={errors.phone && 'input-text--red'}
          />
        </InputBlock>
        <InputBlock label="Website" name="website">
          <InputText
            defaultValue={user.website}
            {...register('website', { required: true })}
            disabled={!isEditable}
            className={errors.website && 'input-text--red'}
          />
        </InputBlock>
        <InputBlock label="Comment" name="comment">
          <InputTextarea {...register('comment')} disabled={!isEditable} />
        </InputBlock>
      </fieldset>
      <div className="profile-form__controls">
        <Button className="main-button--green" disabled={!isEditable}>
          Отправить
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
