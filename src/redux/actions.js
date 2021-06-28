import axios from 'axios'

// export const getPeople = () => {
//     return (dispatch) => {
//         axios("https://swapi.dev/api/people/")
//             .then(res => {
//                     console.log({type: "GET_PEOPLES", payload: res.data.results})
//                     return dispatch({type: "GET_PEOPLES", payload: res.data.results})
//                 }
//             )
//     }
// }
//
//
// export const getPlanets = () => {
//     return (dispatch) => {
//         axios("https://swapi.dev/api/planets/")
//             .then(res => {
//                     console.log({type: "GET_PLANETS", payload: res.data.results})
//                     return dispatch({type: "GET_PLANETS", payload: res.data.results})
//                 }
//             )
//     }
// }


//
// axios(`https://api.twitch.tv/helix/videos?user_id=${id}`,{
//     headers: {
//         Authorization: process.env.AUTH_TOKEN,
//         ['client-id']: process.env.CLIENT_ID
//     }
// })

// AUTH_TOKEN= 'Bearer 63mparyu6zwdoglu9gewjz9qtgrboq'
// CLIENT_ID='zyiqmjb2xhhvjcp3ms58zixiocs6rw'

export const getChannels = (channelName) => {
    return (dispatch) => {
        //
        axios(`https://api.twitch.tv/helix/users?login=${channelName}`, {
            headers: {
                Authorization: 'Bearer 63mparyu6zwdoglu9gewjz9qtgrboq',
                ['client-id']: 'zyiqmjb2xhhvjcp3ms58zixiocs6rw'
            }
        }).then(res => {
                return dispatch({type: "GET_CHANNEL", payload: res.data.data[0]})
            })
    }}

export const getVideos = (id) => {
    return (dispatch) => {
        //
        axios(`https://api.twitch.tv/helix/videos?user_id=${id}`, {
            headers: {
                Authorization: 'Bearer 63mparyu6zwdoglu9gewjz9qtgrboq',
                ['client-id']: 'zyiqmjb2xhhvjcp3ms58zixiocs6rw'
            }
        }).then(res => {
            return dispatch({type: "GET_VIDEO", payload: res.data.data})
        })
    }}