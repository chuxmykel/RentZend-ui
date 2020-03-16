import React, { useState } from 'react';
import { useFormik } from 'formik';
import { TextField, Card, IconButton, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import validationSchema from '../../../utils/validation';

const useStyles = makeStyles(() => ({
  input: {
    display: 'none',
  },
}));

const ApplicationForm = () => {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
      zipCode: '',
    },
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleFileChange = async e => {
    e.persist();
    const fileName = e.target.files[0].name;
    // const formData = new FormData();
    // formData.append('image', e.target.files[0]);
    setFile(fileName);
  };

  return (
    <Card className="application-form-card" raised>
      <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          variant="outlined"
          label="full name"
          required
          size="small"
          fullWidth
          margin="normal"
        />
        {touched.name && errors.name ? (
          <Typography variant="subtitle2" color="error">
            {errors.name}
          </Typography>
        ) : null}

        <TextField
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          variant="outlined"
          label="email"
          required
          size="small"
          fullWidth
          margin="normal"
        />
        {touched.email && errors.email ? (
          <Typography variant="subtitle2" color="error">
            {errors.email}
          </Typography>
        ) : null}

        <TextField
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phoneNumber}
          variant="outlined"
          label="phone number"
          required
          size="small"
          fullWidth
          margin="normal"
        />
        {touched.phoneNumber && errors.phoneNumber ? (
          <Typography variant="subtitle2" color="error">
            {errors.phoneNumber}
          </Typography>
        ) : null}

        <TextField
          id="zipCode"
          name="zipCode"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.zipCode}
          variant="outlined"
          label="zipCode"
          required
          size="small"
          fullWidth
          margin="normal"
        />
        {touched.zipCode && errors.zipCode ? (
          <Typography variant="subtitle2" color="error">
            {errors.zipCode}
          </Typography>
        ) : null}

        <input
          accept="image/*"
          className={classes.input}
          id="passport"
          name="passport"
          type="file"
          onChange={handleFileChange}
        />

        <label htmlFor="passport">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
            <Typography style={{ marginLeft: '10px' }}>
              {file ? `${file}` : 'Click to upload passport photograph'}
            </Typography>
          </IconButton>
        </label>

        <TextField
          id="address"
          name="address"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.address}
          variant="outlined"
          label="address"
          required
          size="small"
          fullWidth
          margin="normal"
          multiline
          rows="4"
        />
        {touched.address && errors.address ? (
          <Typography variant="subtitle2" color="error">
            {errors.address}
          </Typography>
        ) : null}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          style={{
            marginTop: '20px',
          }}
        >
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default ApplicationForm;
