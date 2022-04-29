import { UserModel } from '../../../models/user.model';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

type ProfileFormInputsFromModel = Pick<
  UserModel,
  'name' | 'username' | 'email' | 'phone' | 'website'
  > &
  Pick<UserModel['address'], 'street' | 'zipcode' | 'city'>;

export interface ProfileFormInputs extends ProfileFormInputsFromModel {
  comment: string;
}

export const useProfileForm = () => {
  const {reset, ...useFormProps} = useForm<ProfileFormInputs>();
  const [isEditable, setIsEditable] = useState<boolean>(false);
  
  const toggleIsEditable = () => {
    setIsEditable(value => !value);
  }
  
  const onSubmit = (data: ProfileFormInputs) => {
    console.log(data);
  }
  
  return {
    useFormProps,
    onSubmit,
    toggleIsEditable,
    isEditable
  }
}