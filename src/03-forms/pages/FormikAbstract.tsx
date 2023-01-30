import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';

export const FormikAbstract = () => {

    return (
        <div>
            <h1>Formik Abstract Tutorial</h1>

            <Formik initialValues={{
                firstName: 'Ignacio',
                lastName: '',
                email: '',
                terms: false,
                jobType: '',
            }} onSubmit={(values) => {
                console.log(values);
            }} validationSchema={Yup.object({
                firstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
                lastName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
                email: Yup.string().email('Email es requerido').required('Requerido'),
                terms: Yup.boolean().oneOf([true], 'should accept terms and conditions'),
                jobType: Yup.string().notOneOf(['it-junior'], 'can\'t select IT Junior').required(),
            })}
            >
                {
                    // objeto de formik
                    formik => (
                        <Form>
                            <MyTextInput label='First Name' name='firstName' placeholder='Ignacio' />
                            <MyTextInput label='Last Name' name='lastName' placeholder='Martínez' />
                            <MyTextInput label='Email' name='email' placeholder='jm10cuyun@gmail.com' type='email' />
                            <MySelect label={'Job Type'} name={'jobType'}>
                                <option value="">Pick Something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-junior">IT Junior</option>
                            </MySelect>
                            <ErrorMessage name='jobType' component='span' />

                            <MyCheckbox label='Terms & conditions' name='terms' />

                            <button type='submit'>Enviar</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
