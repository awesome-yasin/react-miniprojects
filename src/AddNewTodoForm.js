import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const AddNewTodoForm = ({ onAddTodo, customError }) => {
  // Initialize a form instance with useFormik hook
  const formik = useFormik({
    // Disable validation onChange and onBlur for keeping validation errors less annoying
    validateOnChange: false,
    validateOnBlur: false,
    // Initial form values
    initialValues: {
      todo: '',
    },
    // Form values validation with Yup
    validationSchema: yup
      .object()
      .shape({
        todo: yup.string()
          .min(3, 'Todo text is too short.')
          .max(20, 'Todo text is too long.')
          .required('Todo text is required.')
        }
      ),
    onSubmit: (values, { resetForm }) => {
      onAddTodo(values.todo);

      // Reset the form after submitting successfully
      resetForm();
    },
  })

  // Get an error from formik.errors to show up because I don't like showing all of them at once
  const errorKeys = Object.keys(formik.errors);

  const aFormikError = errorKeys.length > 0 ? formik.errors[errorKeys[0]] : null;

  const error = customError || aFormikError

  return (
    <>
    <form className = "todo-form" onSubmit={formik.handleSubmit}>
      <input
        id="todo"
        name="todo"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.todo}
        autoComplete="off"
        placeholder="What needs to be done?"
      />
      <button className = "buttonzz" type="submit">Add</button>
    </form>
    {error && <span>{error}</span>}
    </>
  )
};

export default React.memo(AddNewTodoForm);