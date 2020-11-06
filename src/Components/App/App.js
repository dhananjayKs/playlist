import React from 'react'

import './App.css';
import SearchBar from './../SearchBar/SearchBar'
import SearchResults from './../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist';
import spotify from './../../util/spotify'
class App extends React.Component{
    constructor(props){
      super(props);
      this.state={
        searchResults:
        {
          tracks: {
            href: 'https://api.spotify.com/v1/search?query=sunflower&type=track&offset=0&limit=2',
            items: [ 
              
            {
              album: {
                album_type: 'compilation',
                artists: [ [Object] ],
                available_markets: [
                  'AD', 'AE', 'AL', 'AR', 'AT', 'AU', 'BA', 'BE', 'BG',
                  'BH', 'BO', 'BR', 'BY', 'CA', 'CH', 'CL', 'CO', 'CR',
                  'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG',
                  'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HR',
                  'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO', 'JP',
                  'KW', 'KZ', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC',
                  'MD', 'ME', 'MK', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO',
                  'NZ', 'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY',
                  'QA', 'RO', 'RS', 'RU', 'SA', 'SE', 'SG', 'SI', 'SK',
                  'SV', 'TH', 'TN', 'TR', 'TW', 'UA', 'US', 'UY', 'VN',
                  'XK', 'ZA'
                ],
                external_urls: {
                  spotify: 'https://open.spotify.com/album/35s58BRTGAEWztPo9WqCIs'
                },
                href: 'https://api.spotify.com/v1/albums/35s58BRTGAEWztPo9WqCIs',
                id: '35s58BRTGAEWztPo9WqCIs',
                images: [ [Object], [Object], [Object] ],
                name: 'Spider-Man: Into the Spider-Verse (Soundtrack From & Inspired by the Motion Picture)',
                release_date: '2018-12-14',
                release_date_precision: 'day',
                total_tracks: 13,
                type: 'album',
                uri: 'spotify:album:35s58BRTGAEWztPo9WqCIs'
              },
              artists: [
                {
                  external_urls: [Object],
                  href: 'https://api.spotify.com/v1/artists/246dkjvS1zLTtiykXe5h60',
                  id: '246dkjvS1zLTtiykXe5h60',
                  name: 'Post Malone',
                  type: 'artist',
                  uri: 'spotify:artist:246dkjvS1zLTtiykXe5h60'
                },
                {
                  external_urls: [Object],
                  href: 'https://api.spotify.com/v1/artists/1zNqQNIdeOUZHb8zbZRFMX',
                  id: '1zNqQNIdeOUZHb8zbZRFMX',
                  name: 'Swae Lee',
                  type: 'artist',
                  uri: 'spotify:artist:1zNqQNIdeOUZHb8zbZRFMX'
                }
              ],
              available_markets: [
                'AD', 'AE', 'AL', 'AR', 'AT', 'AU', 'BA', 'BE', 'BG',
                'BH', 'BO', 'BR', 'BY', 'CA', 'CH', 'CL', 'CO', 'CR',
                'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG',
                'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HR',
                'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO', 'JP',
                'KW', 'KZ', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC',
                'MD', 'ME', 'MK', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO',
                'NZ', 'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY',
                'QA', 'RO', 'RS', 'RU', 'SA', 'SE', 'SG', 'SI', 'SK',
                'SV', 'TH', 'TN', 'TR', 'TW', 'UA', 'US', 'UY', 'VN',
                'XK', 'ZA'
              ],
              disc_number: 1,
              duration_ms: 158040,
              explicit: false,
              external_ids: { isrc: 'USUM71814888' },
              external_urls: { spotify: 'https://open.spotify.com/track/3KkXRkHbMCARz0aVfEt68P' },
              href: 'https://api.spotify.com/v1/tracks/3KkXRkHbMCARz0aVfEt68P',
              id: '3KkXRkHbMCARz0aVfEt68P',
              is_local: false,
              name: 'Sunflower - Spider-Man: Into the Spider-Verse',
              popularity: 84,
              preview_url: null,
              track_number: 2,
              type: 'track',
              uri: 'spotify:track:3KkXRkHbMCARz0aVfEt68P'
            } ],
            limit: 2,
            next: 'https://api.spotify.com/v1/search?query=sunflower&type=track&offset=2&limit=2',
            offset: 0,
            previous: null,
            total: 11407
          }
        },
        playlist:
        {
          tracks: {
            href: 'https://api.spotify.com/v1/search?query=sunflower&type=track&offset=0&limit=2',
            items: [ 
              
              {
                album: {
                  album_type: 'compilation',
                  artists: [ [Object] ],
                  available_markets: [
                    'AD', 'AE', 'AL', 'AR', 'AT', 'AU', 'BA', 'BE', 'BG',
                    'BH', 'BO', 'BR', 'BY', 'CA', 'CH', 'CL', 'CO', 'CR',
                    'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG',
                    'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HR',
                    'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO', 'JP',
                    'KW', 'KZ', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC',
                    'MD', 'ME', 'MK', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO',
                    'NZ', 'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY',
                    'QA', 'RO', 'RS', 'RU', 'SA', 'SE', 'SG', 'SI', 'SK',
                    'SV', 'TH', 'TN', 'TR', 'TW', 'UA', 'US', 'UY', 'VN',
                    'XK', 'ZA'
                  ],
                  external_urls: {
                    spotify: 'https://open.spotify.com/album/35s58BRTGAEWztPo9WqCIs'
                  },
                  href: 'https://api.spotify.com/v1/albums/35s58BRTGAEWztPo9WqCIs',
                  id: '35s58BRTGAEWztPo9WqCIs',
                  images: [ [Object], [Object], [Object] ],
                  name: 'Spider-Man: Into the Spider-Verse (Soundtrack From & Inspired by the Motion Picture)',
                  release_date: '2018-12-14',
                  release_date_precision: 'day',
                  total_tracks: 13,
                  type: 'album',
                  uri: 'spotify:album:35s58BRTGAEWztPo9WqCIs'
                },
                artists: [
                  {
                    external_urls: [Object],
                    href: 'https://api.spotify.com/v1/artists/246dkjvS1zLTtiykXe5h60',
                    id: '246dkjvS1zLTtiykXe5h60',
                    name: 'Post Malone',
                    type: 'artist',
                    uri: 'spotify:artist:246dkjvS1zLTtiykXe5h60'
                  },
                  {
                    external_urls: [Object],
                    href: 'https://api.spotify.com/v1/artists/1zNqQNIdeOUZHb8zbZRFMX',
                    id: '1zNqQNIdeOUZHb8zbZRFMX',
                    name: 'Swae Lee',
                    type: 'artist',
                    uri: 'spotify:artist:1zNqQNIdeOUZHb8zbZRFMX'
                  }
                ],
                available_markets: [
                  'AD', 'AE', 'AL', 'AR', 'AT', 'AU', 'BA', 'BE', 'BG',
                  'BH', 'BO', 'BR', 'BY', 'CA', 'CH', 'CL', 'CO', 'CR',
                  'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG',
                  'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HR',
                  'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO', 'JP',
                  'KW', 'KZ', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC',
                  'MD', 'ME', 'MK', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO',
                  'NZ', 'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY',
                  'QA', 'RO', 'RS', 'RU', 'SA', 'SE', 'SG', 'SI', 'SK',
                  'SV', 'TH', 'TN', 'TR', 'TW', 'UA', 'US', 'UY', 'VN',
                  'XK', 'ZA'
                ],
                disc_number: 1,
                duration_ms: 158040,
                explicit: false,
                external_ids: { isrc: 'USUM71814888' },
                external_urls: { spotify: 'https://open.spotify.com/track/3KkXRkHbMCARz0aVfEt68P' },
                href: 'https://api.spotify.com/v1/tracks/3KkXRkHbMCARz0aVfEt68P',
                id: '3KkXRkHbMCARz0aVfEt68P',
                is_local: false,
                name: 'Sunflower - Spider-Man: Into the Spider-Verse',
                popularity: 84,
                preview_url: null,
                track_number: 2,
                type: 'track',
                uri: 'spotify:track:3KkXRkHbMCARz0aVfEt68P'
              } ],
            limit: 2,
            next: 'https://api.spotify.com/v1/search?query=sunflower&type=track&offset=2&limit=2',
            offset: 0,
            previous: null,
            total: 11407
          }
        },
        userData:{
          display_name: 'user',
          external_urls: {
            spotify: 'https://open.spotify.com/user/'
          },
          followers: { href: null, total: 0 },
          href: 'https://api.spotify.com/v1/users/',
          id: 'vb389ryw4n2nmtm4gkhwxzkxx',
          images: [],
          type: 'user',
          uri: 'spotify:user:'
        },
        accessToken:'',
        added:[false,false,false,false,false,false,false,false,false,false],
        added1:[false,false,false,false,false,false,false,false,false,false],
        trackUris:''
      }
      this.search=this.search.bind(this);
      this.isAdded=this.isAdded.bind(this);
      this.isRemoved=this.isRemoved.bind(this)
      this.uploadPlaylist=this.uploadPlaylist.bind(this)
    }
    componentDidMount(){
      let url=window.location.href
      let accessToken0=(url.split('access_token='))
      let accessToken
      if(accessToken0.length>1){
        accessToken=accessToken0[1].split('&token_type=')[0]
      }else{
        this.login()
      }
      console.log(accessToken)
      spotify.token=this.state.accessToken
      this.setState({accessToken:accessToken})
      this.getUserData(accessToken)
    }
    login(){
      spotify.getAccessToken()
      
    }
    search(array){
      this.setState({searchResults:array,added:[false,false,false,false,false,false,false,false,false,false]})
    }
    isRemoved(index){
      console.log('removed')
      console.log(this.state.playlist)
      let playlist1=this.state.playlist
      playlist1.tracks.items.splice(index,1)
      console.log(playlist1)
      this.setState({
        playlist:playlist1
      })
    }
    isAdded(index){
      console.log('playlist')
      console.log(this.state.playlist)
      let arr=this.state.added
      let playlist1=this.state.playlist
      console.log('playlist 11111111')
      
      playlist1.tracks.items.push(this.state.searchResults.tracks.items[index])
      console.log(playlist1)
      arr[index]=!arr[index]
      this.setState({
        added:arr,
        playlist:playlist1
      })
    }
    async getUserData(token){
      let data = await spotify.getUserData(token)
      console.log(data)
      this.setState({
        userData:data
      })
    }
    async uploadPlaylist(){
      let Uris=''
      for(let i=0;i<this.state.playlist.tracks.items.length;i++){
        
        if(i===0){
          Uris=`${this.state.playlist.tracks.items[0].uri},`
        }else if(i===this.state.playlist.tracks.items.length-1){
          Uris=Uris+this.state.playlist.tracks.items[i].uri
        }else{
          Uris=Uris+this.state.playlist.tracks.items[i].uri+','
        }
      }
      let done=await spotify.editPlaylist(this.state.accessToken,this.state.userData.id,Uris);
      console.log(done);
      let defaultPlaylist={
        tracks: {
          href: 'https://api.spotify.com/v1/search?query=sunflower&type=track&offset=0&limit=2',
          items: [ 
            
            {
              album: {
                album_type: 'compilation',
                artists: [ [Object] ],
                available_markets: [
                  'AD', 'AE', 'AL', 'AR', 'AT', 'AU', 'BA', 'BE', 'BG',
                  'BH', 'BO', 'BR', 'BY', 'CA', 'CH', 'CL', 'CO', 'CR',
                  'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG',
                  'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HR',
                  'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO', 'JP',
                  'KW', 'KZ', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC',
                  'MD', 'ME', 'MK', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO',
                  'NZ', 'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY',
                  'QA', 'RO', 'RS', 'RU', 'SA', 'SE', 'SG', 'SI', 'SK',
                  'SV', 'TH', 'TN', 'TR', 'TW', 'UA', 'US', 'UY', 'VN',
                  'XK', 'ZA'
                ],
                external_urls: {
                  spotify: 'https://open.spotify.com/album/35s58BRTGAEWztPo9WqCIs'
                },
                href: 'https://api.spotify.com/v1/albums/35s58BRTGAEWztPo9WqCIs',
                id: '35s58BRTGAEWztPo9WqCIs',
                images: [ [Object], [Object], [Object] ],
                name: 'Spider-Man: Into the Spider-Verse (Soundtrack From & Inspired by the Motion Picture)',
                release_date: '2018-12-14',
                release_date_precision: 'day',
                total_tracks: 13,
                type: 'album',
                uri: 'spotify:album:35s58BRTGAEWztPo9WqCIs'
              },
              artists: [
                {
                  external_urls: [Object],
                  href: 'https://api.spotify.com/v1/artists/246dkjvS1zLTtiykXe5h60',
                  id: '246dkjvS1zLTtiykXe5h60',
                  name: 'Post Malone',
                  type: 'artist',
                  uri: 'spotify:artist:246dkjvS1zLTtiykXe5h60'
                },
                {
                  external_urls: [Object],
                  href: 'https://api.spotify.com/v1/artists/1zNqQNIdeOUZHb8zbZRFMX',
                  id: '1zNqQNIdeOUZHb8zbZRFMX',
                  name: 'Swae Lee',
                  type: 'artist',
                  uri: 'spotify:artist:1zNqQNIdeOUZHb8zbZRFMX'
                }
              ],
              available_markets: [
                'AD', 'AE', 'AL', 'AR', 'AT', 'AU', 'BA', 'BE', 'BG',
                'BH', 'BO', 'BR', 'BY', 'CA', 'CH', 'CL', 'CO', 'CR',
                'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG',
                'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HR',
                'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO', 'JP',
                'KW', 'KZ', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC',
                'MD', 'ME', 'MK', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO',
                'NZ', 'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY',
                'QA', 'RO', 'RS', 'RU', 'SA', 'SE', 'SG', 'SI', 'SK',
                'SV', 'TH', 'TN', 'TR', 'TW', 'UA', 'US', 'UY', 'VN',
                'XK', 'ZA'
              ],
              disc_number: 1,
              duration_ms: 158040,
              explicit: false,
              external_ids: { isrc: 'USUM71814888' },
              external_urls: { spotify: 'https://open.spotify.com/track/3KkXRkHbMCARz0aVfEt68P' },
              href: 'https://api.spotify.com/v1/tracks/3KkXRkHbMCARz0aVfEt68P',
              id: '3KkXRkHbMCARz0aVfEt68P',
              is_local: false,
              name: 'Sunflower - Spider-Man: Into the Spider-Verse',
              popularity: 84,
              preview_url: null,
              track_number: 2,
              type: 'track',
              uri: 'spotify:track:3KkXRkHbMCARz0aVfEt68P'
            } ],
          limit: 2,
          next: 'https://api.spotify.com/v1/search?query=sunflower&type=track&offset=2&limit=2',
          offset: 0,
          previous: null,
          total: 11407
        }
      }
      this.setState({playlist:defaultPlaylist})
    }
    render(){
        return <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <h1>Welcome {this.state.userData.display_name}</h1>
            <div className="App">
              <SearchBar token={this.state.accessToken} search={this.search}/>
              <div className="App-playlist">
                <SearchResults searchResults={this.state.searchResults} added={this.state.added} isEdited={this.isAdded}/>
                <Playlist playlist={this.state.playlist} added={this.state.added1} isEdited={this.isRemoved} upload={this.uploadPlaylist} />
              </div>
            </div>
          </div>
    }
}

export default App;
