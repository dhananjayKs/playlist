import React from 'react'
import './SearchBar.css'
import spotify from './../../util/spotify'
class SearchBar extends React.Component{
  constructor(props){
    super(props)
    this.state={
      query:""
    }
    this.setQuery=this.setQuery.bind(this)
    this.search=this.search.bind(this)
  }
  
    async search(e){
      if(this.state.query!==''){
        let data=await spotify.search(this.props.token,this.state.query)
        console.log(data)
        this.props.search(data)
      }
      
    }
    setQuery(e){
      this.setState({query:e.target.value})
    }
    render(){
        return <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.setQuery}/>
        <button className="SearchButton" onClick={this.search}>SEARCH</button>
      </div>
    }
}
export default SearchBar
