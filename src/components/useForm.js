import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
	const formData = [
		{
			id: 1,
			type: "string",
			required: true,
			field: "name",
			label: "Name",
			value: "Momism"
		},
		{
			id: 2,
			type: "number",
			required: true,
			field: "age",
			label: "Age",
			value: 1
		},
		{
			id: 3,
			type: "email",
			required: true,
			field: "email",
			label: "Email",
			value: "test@gmail.com"
		}
	]

	const transformFormData = formData.reduce((acc, cur) => {
    return {...acc, [cur.field]:cur.value}
	}, {})

  const [values, setValues] = useState(transformFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(prevState => ({ ...prevState, [event.target.name]: event.target.value}))
  };

  const handleReset = (event) => {
    event.persist();
    setValues({});
  }

  return {
    handleChange,
    handleSubmit,
    handleReset,
    values,
    errors,
		formData
  }
};

export default useForm;