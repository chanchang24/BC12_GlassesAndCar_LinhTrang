import React, { Component } from 'react'
import Glasses from './Glasses'
import GlassesHeading from './GlassesHeading'

export default class GlassesApp extends Component {
    render() {
        return (
            <div>
                <GlassesHeading/>
                <Glasses/>
            </div>
        )
    }
}
