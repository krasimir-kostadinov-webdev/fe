import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import React, { ChangeEvent, FormEvent, SyntheticEvent, useState } from "react";
import * as yup from "yup";

const validationSchema = yup.object().shape({
   email: yup.string().required().email(),
   password: yup.string().required().max(5),
});

interface MyFormValues {
   email: string;
   password: string;
}

const initialValues: MyFormValues = {
   email: "",
   password: "",
};

const Register: React.FC = () => {
   const handleSubmit = (
      values: MyFormValues,
      actions: FormikHelpers<MyFormValues>
   ) => {
      actions.resetForm();
   };

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={handleSubmit}
      >
         <Form>
            <Field id="email" name="email" placeholder="Enter email" />
            <ErrorMessage
               name="email"
               component="div"
               className="field-error"
            />
            <br />
            <Field id="password" name="password" placeholder="Enter password" />
            <ErrorMessage
               name="password"
               component="div"
               className="field-error"
            />
            <button type="submit">Submit</button>
         </Form>
      </Formik>
   );
};

export default Register;
