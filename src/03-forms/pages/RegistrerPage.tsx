import { FormEvent } from "react"
import { useForm } from "../hooks/useForm";

export const RegistrerPage = () => {

  const {
    // campos
    name, email, password1, password2, formData,

    // funciones
    onChange, resetForm, isValidEmail,
  } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });
  // const { name, email, password1, password2} = formData;




  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={(event) => onSubmit(event)}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => onChange(e)} name="name" className={`${name.trim().length <= 0 && 'has-error'}`} />
        { name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input type="email" placeholder="Email" value={email} onChange={(e) => onChange(e)} name="email" className={`${!isValidEmail(email) && 'has-error'}`} />
        { !isValidEmail(email) && <span>Este campo es necesario</span>}

        <input type="password" placeholder="Password" value={password1} onChange={(e) => onChange(e)} name="password1" />
        <input type="password" placeholder="Repeat Password" value={password2} onChange={(e) => onChange(e)} name="password2" />
        <button>Create</button>
        <button onClick={resetForm}>Reset</button>
      </form>
    </div>
  )
}
