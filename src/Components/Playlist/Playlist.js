import React from 'react'
import TrackList from '../TrackList/TrackList'
import './Playlist.css'
class Playlist extends React.Component{
    constructor(props){
      super(props);
      this.upload=this.upload.bind(this)
    }
    upload(){
      this.props.upload()
    }
    render(){
        return <div className="Playlist">
        <input value={'New Playlist'}/>
        <TrackList searchResults={this.props.playlist} added={this.props.added} isEdited={this.props.isEdited} add={false}/>
        <button className="Playlist-save" onClick={this.upload}>SAVE TO SPOTIFY</button>
      </div>
    }
}
export default Playlist