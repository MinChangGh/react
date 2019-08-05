import React from '_react@15.6.2@react'
class MyLoan extends React.Component{
    constructor() {
        super()
        this.state={
            agument:null
        }
    }

    componentWillMount () {
        this.setState({
            agument:this.props.match.params.agument
        })
    }

    render() {


        return(
            <div>
                <div>路由参数：{this.state.agument}</div>


                1000块贷款

            </div>
        )
    }
}
export default MyLoan;