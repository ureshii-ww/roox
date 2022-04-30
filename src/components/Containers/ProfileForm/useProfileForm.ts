import { UserModel } from '../../../models/user.model';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

type ProfileFormInputsFromModel = Pick<
  UserModel,
  'name' | 'username' | 'email' | 'phone' | 'website'
> &
  Pick<UserModel['address'], 'street' | 'zipcode' | 'city'>;

export interface ProfileFormInputs extends ProfileFormInputsFromModel {
  comment: string;
}

export const useProfileForm = (user: UserModel) => {
  const { reset, ...useFormProps } = useForm<ProfileFormInputs>();
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const toggleIsEditable = () => {
    setIsEditable(value => !value);
  };

  const onSubmit = (data: ProfileFormInputs) => {
    console.log(data);
  };

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        username: user.username,
        email: user.email,
        website: user.website,
        phone: user.phone,
        comment: '',
        city: user.address.city,
        zipcode: user.address.zipcode,
        street: user.address.street,
      });
    }
  }, [user, reset]);

  return {
    useFormProps,
    onSubmit,
    toggleIsEditable,
    isEditable,
  };
};
