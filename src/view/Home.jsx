import React from 'react'

class Home extends React.Component{
    constructor() {
        super()
        this.state={
            title:"陈丽沙的博客"
        }
    }

    render(){
    return <div>{this.state.title}和{this.props.title}</div>
    }
}
export default Home