import React from "react";

import { Formik, Field, Form } from "formik";

function FormikComp(props) {
  return (
    <Formik
      initialValues={{
      }}
      onSubmit={(values)=>console.log(values)}
    >
      { ({values})=>(
        <Form>
        <label htmlFor="firstName">First Name </label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <div>
          {values.firstName}
        </div>
        <button type="submit">Submit</button>
      </Form>
      )}

      
      
    </Formik>
  );
}

export default FormikComp;
