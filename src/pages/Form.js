import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { urlFor, client } from '../client';
import * as yup from "yup";


export const Form = () => {

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const schema = yup.object().shape({
      name: yup.string().required('Name is required'),
      email: yup.string().email().required('email is required'),
      message: yup.string().required('message is required'),
      // password: yup.string().min(6).required(),
      // confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
    });


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data)
        
        const { name, email, message } = data;

        const contact = {
          _type: 'contact',
          name: name,
          email: email,
          message: message,
        };

        client
          .create(contact)
          .then(() => {
            setLoading(false);
            setIsFormSubmitted(true);
          })
          .catch((err) => console.log(err));
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Enter your name'
          {...register('name')}
        />
        <p>{errors.name?.message}</p>
        <input
          type='email'
          placeholder='Enter your email'
          {...register('email')}
        />
        <p>{errors.email?.message}</p>
        <textarea {...register('message')} cols='30' rows='10'></textarea>
        {/* <input
          type='password'
          placeholder='Enter your password'
          {...register('password')}
        />
        <p>{errors.password?.message}</p>
        <input
          type='password'
          placeholder='Confirm your password'
          {...register('confirmPassword')}
        /> */}
        <p>{errors.confirmPassword?.message}</p>
        <button type='submit'>Submit</button>
      </form>
    );
}