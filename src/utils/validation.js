import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('name is required'),
  email: Yup.string()
    .email('invalid email address')
    .required('email is required'),
  phoneNumber: Yup.string()
    .matches(
      /^[(]{1}[0-9]{3}[)]{1}[\s]{1}[0-9]{3}[-]{1}[0-9]{4}$/,
      'Invalid number format, please use this format: (123) 456-7890',
    )
    .required('Please enter your phone number'),
  address: Yup.string().required('address is required'),
  zipCode: Yup.number().required('zip code is required'),
});

export default validationSchema;
