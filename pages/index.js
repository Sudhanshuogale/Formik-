import styles from 'styles/btn.module.css';
// import "..styles/globals.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { TextField } from './TextField';

export default function Home() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })

  return (
    <>
      <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}>

      {formik => (
        <div className={styles.button}>
          <h1>Sign Up</h1>
          <Form>
            <TextField className={styles.btn} label="First Name" name="firstName" type="text" />
            <TextField className={styles.btn} label="Last Name" name="lastName" type="text" />
            <TextField className={styles.btn} label="Email" name="email" type="email" />
            <TextField className={styles.btn} label="Password" name="password" type="password" />
            <TextField className={styles.btn} label="Confirm Password" name="confirmPassword" type="password" />
            <button className={styles.btn} type="submit">Signup</button>
          </Form>
        </div>
      )}
    </Formik>
    </>
  )
}
