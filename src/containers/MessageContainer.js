import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from './../components/Message';

class MessageContainer extends Component {
    render() {
        var {message} = this.props; 
        return (
            <Message message={message}/>
        );
    }
}

//Kiểm tra dữ liệu hợp lệ
MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}

// Kết nối với STORE
const mapStateToProps = state => {
    return {
        message: state.message
    }
}


export default connect(mapStateToProps, null)(MessageContainer);
