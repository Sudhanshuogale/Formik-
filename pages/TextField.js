import { ErrorMessage, useField } from 'formik';
import styles from 'styles/btn.module.css';


export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.btn1} >
      <label htmlFor={field.name}>&nbsp;&nbsp;&nbsp;&nbsp;{label}</label><br></br>
      <input
        className={`${meta.touched && meta.error && 'is-invalid'} ${styles.btn2}`}
        {...field} {...props}/>
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}