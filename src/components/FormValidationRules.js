export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'Name is required';
  } else if (values.name.length > 20) {
    errors.name = 'Name is invalid';
  }
  if (!values.age) {
    errors.age = 'Age is required';
  } else if (isNaN(values.age)){
    errors.age = 'Age is invalid';
  }
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  return errors;
};