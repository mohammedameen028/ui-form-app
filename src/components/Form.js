import React from 'react';
import useForm from "./useForm";
import validate from './FormValidationRules';

const Form = () => {
  const {
    values,
    errors,
    formData,
    handleChange,
    handleSubmit,
    handleReset,
  } = useForm(submit, validate);

 
  function submit() {
    console.log('No errors, submit callback called!', values);
  }
  
  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>
                {formData.map((item) => {
                    return (
                      <div className="field" key={item.id}>
                        <label className="label">{item.label}</label>
                        <div className="control">
                          <input
                            autoComplete="off"
                            className={`input ${errors[item.field] && "is-danger"}`}
                            type={item.type}
                            name={item.field}
                            onChange={handleChange}
                            value={values[item.field]|| ""}
                            required
                          />
                          {errors[item.field] && (
                            <p className="help is-danger">{errors[item.field]}</p>
                          )}
                        </div>
                      </div>
                    );
                })}
                <div className="field is-grouped">
                    <div className="control">
                        <button type="submit" className="button is-info">Submit</button>
                    </div>
                    <div className="control">
                        <button type="reset" onClick={handleReset} className="button is-info is-outlined">Reset</button>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;