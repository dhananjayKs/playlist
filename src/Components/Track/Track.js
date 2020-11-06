import React from 'react'
import './../Track/Track.css'
class Track extends React.Component{
    renderAction(){
      if(!this.props.add){
        return '-'
      }else{
        return "+"
      }
    }
    isEdited(index){
      this.props.isEdited(index)
    }
    render(){
      
        return <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artists[0].name} | {this.props.track.album.name}</p>
        </div>
        <button className="Track-action" onClick={this.isEdited.bind(this,this.props.index)}>{this.renderAction()}</button>
      </div>
    }
}
export default Track
