import React, { Component } from 'react'

 class CountC extends Component {
    constructor(props){
        super(props)
        console.log("hi")
    }
    static getDerivedStateFromProps=(nextProps,prevState)=>
    {
        console.log("get derived")
        return null
    }
    componentDidMount(){
        console.log("im mounting")
    }
    componentDidUpdate(){
        console.log("update")
    }
    state={count:0 ,
    student:{id:1,name:"ahmed"},
test:this.props.propName};

    incriment=()=>{
         this.setState({count:this.state.count+1} );
         this.setState({student:{...this.state.student,name:"mohsen"}} );
    }
    deccriment=()=>{
         this.setState({count:this.state.count-1} );
         this.setState({student:{...this.state.student,name:"ahmed"}} );
    }
  render() {
    console.log(this.state)
    return (
      <>
        <button onClick={this.incriment}>incriment</button> 
        <p>{this.state.count}</p>
        <p>{this.state.student.name}</p>
        <button onClick={this.deccriment}>deccriment</button> 
        {
    [ ... Array(this.state.count)].map((item,
        index)=>{
        
        return <Cell count={index} key={index} />;
        })
}
      </>
    )
  }
}
class Cell extends Component {
    constructor(props) {
        super(props);
    }
    componentWillUnmount() {
        console.log("Component Unmouned");
    }
    render(){
        return <h3>Count:{this.props.count}</h3>
    }
}
export default CountC;