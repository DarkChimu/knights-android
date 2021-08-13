import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

class Delayed extends React.Component {

    constructor(props) {
        super(props)
        this.state = {hidden : true}
        this._isMounted = false
    }

    async componentDidMount() {
        this._isMounted = true
        setTimeout(() => {
            this._isMounted && this.setState({hidden: false})
        }, this.props.waitBeforeShow)
    }

    async componentWillUnmount() {
        this._isMounted = false
     }

    render() {
        return this.state.hidden ? <Text></Text> : this.props.children
    }
}

Delayed.propTypes = {
  waitBeforeShow: PropTypes.number.isRequired
}

export default Delayed