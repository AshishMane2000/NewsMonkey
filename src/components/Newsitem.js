import React, { Component } from 'react'

export class Newsitem extends Component {

    render() {
        let { title, imageurl, url, description, date, author, publisher } = this.props;
        return (
            <div >
                <div className="card shadow "  >
                    <span className="badge bg-danger py-2">{publisher}</span>

                    <img className="card-img-top img-fluid" src={imageurl ? imageurl : "https://i-invdn-com.investing.com/news/moved_LYNXMPEI0U0NT_L.jpg"} alt="nothing to show" />
                    <div className="card-body bg-light  ">
                        <h5 className="card-title">{title ? title.slice(0, 45) : ""}....  </h5>

                        <p className="card-text">{description ? description.slice(0, 145) : ""}. . .  .</p>
                        <p className="card-text">By-{author} On-{new Date(date).toGMTString()}</p>

                        <div className='text-center'><a href={url} className="btn btn-sm px-3 rounded-pill btn-dark">Read More</a></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem