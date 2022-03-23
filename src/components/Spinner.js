import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center my-4'>
                <div className="spinner-grow mx-2 text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow mx-2 text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow mx-2 text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow mx-2 text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow mx-2 text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow mx-2 text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow mx-2 text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>

                <div className="spinner-grow mx-2 text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}
