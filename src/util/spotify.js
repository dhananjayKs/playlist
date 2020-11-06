const fetch=require('node-fetch')

const spotify={
    token:'',
    playlistId:'',
    getAccessToken(){
        if (this.token!=="" ){
            return this.token
        }else{
            
            try{
                window.location.assign('https://accounts.spotify.com/authorize?client_id=9432121cc3964ae79fa00a2b0a4f3ebd&response_type=token&scope=user-read-email%20playlist-read-private%20user-read-private%20playlist-modify-public%20user-read-private%20playlist-modify-private&redirect_uri=http://dha-spotify-app.surge.sh')
                
            }catch(e){
                return e
            }
        }
    },
    async search(token,query){
        let modquery=encodeURI(query)
        try{
            let response=await fetch(`https://api.spotify.com/v1/search?q=${modquery}&type=track&limit=10`,{
                method:'GET',
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            if(response.ok){
                let data=await response.json()
                return data
                
            }
            throw new Error("query not fullfilled")
        }catch(e){
            console.log(e)
            return e
        }
    },
    async getUserData(token){
        try{ 
            let response=await fetch('https://api.spotify.com/v1/me',{
                method:'GET',
                headers:{
                    'Authorization': `Bearer ${token}`,
                    
                }
            })
            if(response.ok){
                let data=await response.json()
                console.log('user data')
                return data
            }
            
        }catch(e){ 
            console.log(e)
            
        }

    },
    async editPlaylist(token,userId,trackUris){
        let data=await this.getPlaylists(token)
        let playlists=data.items
        
        let jamming={}  
        for(let i=0;i<playlists.length;i++){
            if(playlists[i].name==='Jamming'){
                jamming=playlists[i]
                this.playlistId=jamming.id
            }
        } 
        if(this.playlistId===''){
            let jamming=await this.createPlaylist(token,userId)
            this.playlistId=jamming.id
        }
        trackUris=encodeURI(trackUris)
        let upload=await fetch(`https://api.spotify.com/v1/playlists/${this.playlistId}/tracks?uris=${trackUris}`,{
            method:'POST',
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        if(upload.ok){
            console.log('uploaded playlist')
        }
        return upload.ok

    },
    async createPlaylist(token,userId){
        try{
            let response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,{
                method:'POST',
                headers:{
                    
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body:JSON.stringify({
                    name: "Jamming",
                    description: "Playlist created with Jamming Api",
                    public: true
                  })
            })
            if(response.ok){
                console.log('playlist Created')
                let data=await response.json()
                return data
            }
            throw new Error(response.statusText)
        }catch(e){
            console.log(e)
        }
    },
    async getPlaylists(token){
        try{
            let response = await fetch(`https://api.spotify.com/v1/me/playlists`,{
                method:'GET',
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                
            })
            if(response.ok){
                console.log('playlist found')
                let data=await response.json()
                return data
            }
            
        }catch(e){
            console.log(e)
        }
    }
    
}
/*
async function test(){
    
    console.log(await spotify.search('BQCRI2x4yu4Af3NGY0hpWRkDDbIqFShwp7UUkSk1mxEAQQPOUagjao3Z96SWtk0GC9C6ZZtrVN98dRTamy1yW4gxFAzN_YGDUbOuzxs3tzs_xWM16J95A4OXr4CibuU7R1LUl2sJomWaETwiAggKOZdioNLSeA4U_EKnuaIsklVj2FK3ao_7wNSwlO74nAQePqae-ODdIEcj0PFePdvQcJVRR8HcgjVjmqrYxf_agmA5Ft_kLNhU','water'))
    
}
test()
*/


export default spotify
