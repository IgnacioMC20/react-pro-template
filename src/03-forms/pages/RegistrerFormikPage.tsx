import {  MyTextInput } from "../components";
import { Form, Formik } from "formik";
import * as Yup from 'yup';


export const RegistrerFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik initialValues={{
        firstName: 'Ignacio',
        email: '',
        password1: '',
        password2: '',
      }} onSubmit={(values) => {
        console.log(values);
      }} validationSchema={Yup.object({
        firstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
        password1: Yup.string().required('Requerido'),
        password2: Yup.string().oneOf([Yup.ref('password1')], 'Las constrase;as no son iguales').required('Requerido'),
        email: Yup.string().email('Email es requerido').required('Requerido'),
      })}
      >
        {
          // objeto de formik
          formik => (
            <Form>
              <MyTextInput label='First Name' name='firstName' placeholder='Ignacio' />
              <MyTextInput label='Email' name='email' placeholder='jm10cuyun@gmail.com' type='email' />
              <MyTextInput label='Password' name='password1' placeholder='Password' />
              <MyTextInput label='Repeat Password' name='password2' placeholder='Repeat Password' />

              <button type='submit'>Enviar</button>
              <button onClick={formik.handleReset}>Reset</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
