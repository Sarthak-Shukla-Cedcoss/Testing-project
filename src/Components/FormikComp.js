import React from "react";
import { buyCake } from '../redux'
import { connect } from "react-redux";
import { Formik, Field, Form } from "formik";

function FormikComp(props) {
  console.log(props);
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

const mapStateToProps = state =>{
  return{
      numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch =>{
  return{
      buyCake: ()=>dispatch(buyCake())
  }
}

export default connect(mapStateToProps , mapDispatchToProps) (FormikComp);
