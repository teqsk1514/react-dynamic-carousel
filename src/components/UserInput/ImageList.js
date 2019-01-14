import React, { Component } from 'react'

export default class ImageList extends Component {
    render() {
        let imageArray = [...this.props.images]; //use sperad operatoe to duplicate the prop array
        let imageList = imageArray.reverse().map((image, index) => <p key={index}>{image}</p>);
        return (
            <div>
                <div>
                    <form onSubmit={this.props.addImage}>
                        <label htmlFor="imageUrl"></label>
                        <input
                            required
                            type="text"
                            name="imageUrl"
                            id="imageUrl"
                        />
                        <button >Add the image</button>
                    </form>
                    <div>
                        <h2>Images Added</h2>
                        <div>
                            {imageList}
                        </div>
                    </div>
                    <div>
                        {console.log(this.props.images)}
                    </div>
                </div>
            </div >
        )
    }
}
