
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
    constructor() {
        super();
        this.state = {
            likes: 0,
            dislikes: 0,
            handleLike: () => {
                this.setState((prevState) => ({
                    likes: prevState.likes + 1
                }));
            },
            handleDislike: () => {
                this.setState((prevState) => ({
                    dislikes: prevState.dislikes + 1
                }));
            }
        }
    }
    render() {
        return (
            <>
                <div className='content-rating'>
                    <p>
                        Technology has dramatically reshaped how we live, work, and interact.
                        From the rise of remote work to the proliferation of smart devices,
                        convenience has never been more accessible. Yet, some argue that this
                        rapid digital transformation may be eroding genuine human connection
                        and increasing reliance on machines. As we navigate the future, striking
                        a balance between innovation and intentional living becomes increasingly
                        important.
                    </p>

                    <div className='rating-buttons'>

                        <button className="like-button"  onClick={this.state.handleLike}>
                            Like ({this.state.likes})
                        </button>

                        <button className="dislike-button" onClick={this.state.handleDislike}>
                            Dislike ({this.state.dislikes})
                        </button>

                    </div>
                </div>
            </>
        );
    }
}

export default ContentRating;
