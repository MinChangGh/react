import React from '_react@15.6.2@react'
import TopBar from './topBar/topBar'
import { Row, Col } from 'antd';


class Init extends React.Component{
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <TopBar></TopBar>


            </div>
        )
    }
}

export default Init;