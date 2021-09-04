import { Component } from "react";


class ImagesDisplay extends Component {

    render(){
        return(
            <div>
                {console.log(this.props.images)}
                {
                    this.props.images.map((img,index)=> 
                    <img src={img.imgURL} alt=""/>
                    
                    
                    )
                }
            </div>
        )
    }
}

export default ImagesDisplay;