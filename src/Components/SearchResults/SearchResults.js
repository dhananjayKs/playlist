import React from 'react'
import TrackList from '../TrackList/TrackList'
import './SearchResults.css'
class SearchResults extends React.Component{
    render(){
        return <div className="SearchResults">
        <h2>Results</h2>
        <TrackList searchResults={this.props.searchResults} added={this.props.added} isEdited={this.props.isEdited} add={true}/>
      </div>
    }
}
export default SearchResults
 