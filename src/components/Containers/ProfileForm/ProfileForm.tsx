import React, { FC } from 'react';
import { UserModel } from '../../../models/user.model';
import { useProfileForm } from './useProfileForm';
import InputBlock from '../../UI/InputBlock/InputBlock';
import InputText from '../../UI/InputText/InputText';
import InputTextarea from '../../UI/InputTextarea/InputTextarea';
import Button from '../../UI/Button/Button';

interface ProfileFormProps {
  user: UserModel;
}

const ProfileForm: FC<ProfileFormProps> = ({ user }) => {
  const { useFormProps, onSubmit, toggleIsEditable, isEditable } = useProfileForm();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useFormProps;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1>Профиль пользователя</h1>
        <Button type="button" onClick={toggleIsEditable}>
          Редактировать
        </Button>
      </div>
      <fieldset>
        <InputBlock label="Name" name="name">
          <InputText
            defaultValue={user.name}
            {...register('name', { required: true })}
            disabled={!isEditable}
          />
        </InputBlock>
        <InputBlock label="Username" name="username">
          <InputText
            defaultValue={user.username}
            {...register('username', { required: true })}
            disabled={!isEditable}
          />
        </InputBlock>
        <InputBlock label="Email" name="email">
          <InputText
            defaultValue={user.email}
            type="email"
            {...register('email', { required: true })}
            disabled={!isEditable}
          />
        </InputBlock>
        <InputBlock label="Street" name="street">
          <InputText
            defaultValue={user.address.street}
            {...register('street', { required: true })}
            disabled={!isEditable}
          />
        </InputBlock>
        <InputBlock label="City" name="city">
          <InputText
            defaultValue={user.address.city}
            {...register('city', { required: true })}
            disabled={!isEditable}
          />
        </InputBlock>
        <InputBlock label="Zipcode" name="zipcode">
          <InputText
            defaultValue={user.address.zipcode}
            {...register('zipcode', { required: true })}
            disabled={!isEditable}
          />
        </InputBlock>
        <InputBlock label="Phone" name="phone">
          <InputText
            defaultValue={user.phone}
            {...register('phone', { required: true })}
            disabled={!isEditable}
          />
        </InputBlock>
        <InputBlock label="Website" name="website">
          <InputText
            defaultValue={user.website}
            {...register('website', { required: true })}
            disabled={!isEditable}
          />
        </InputBlock>
        <InputBlock label="comment" name="comment">
          <InputTextarea {...register('comment')} disabled={!isEditable} />
        </InputBlock>
      </fieldset>
      <div>
        <Button disabled={!isEditable}>Отправить</Button>
      </div>
    </form>
  );
};

export default ProfileForm;
