import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'
function CakeContainer( props) {
  return (
    <div>
        <h4>Number of cakes ---  {props.numOfCakes}</h4>
        <button onClick={props.buyCake}>Buy cakes</button>
    </div>
  )
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

export default connect(mapStateToProps , mapDispatchToProps) (CakeContainer)