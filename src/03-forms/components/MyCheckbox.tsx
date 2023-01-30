import { useField } from "formik"

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password'
    placeholder?: string;
    [x: string]: any
}

export const MyCheckbox = ({ label, ...props }: Props) => {

    const [field, meta] = useField({ ...props, type: 'checkbox' });

    return (
        <>
            <label htmlFor={props.id || props.name}>
                {label}
                <input type={'checkbox'} {...field} {...props} />

            </label>
            {
                meta.touched && meta.error && (
                    <span className="error"> {meta.error} </span>
                )
            }
        </>
    )
}
