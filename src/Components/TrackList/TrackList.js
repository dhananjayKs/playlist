import React from 'react'
import Track from './../Track/Track'
import './TrackList.css'
class TrackList extends React.Component{
    render(){
        //console.log(this.props.searchResults)
        let trackl=this.props.searchResults.tracks.items
        //console.log(trackl)
        return <div className="TrackList">
        <div>{trackl.map((track,index)=>{
            return !(this.props.added[index]) && <Track track={track} key={track.id} added={this.props.added[index]} index={index} isEdited={this.props.isEdited} add={this.props.add}/>
        })
            
            
        }</div>
    </div>
    }
}
export default TrackList
 