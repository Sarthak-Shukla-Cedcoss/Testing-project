import React from 'react'
import { buyCake, buyIceCream } from '../redux'
import { connect } from 'react-redux'
function CakeContainer( props) {
    console.log(props)
  return (
    <div>
<h4>Number of cakes ---  {props.numOfCakes}</h4>
        <button onClick={props.buyCake}>Buy cakes</button>
        <br/>
        <br/>
        <h2>Number of icecream ----  {props.numOfIceCream}</h2>
        <button onClick={props.buyIceCream}>Buy icecream</button>
    </div>
  )
}


const mapStateToProps = state =>{
    return{
        numOfCakes: state.cake.numOfCakes,
        numOfIceCream: state.icecream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake: ()=>dispatch(buyCake()),
        buyIceCream: ()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps , mapDispatchToProps) (CakeContainer)