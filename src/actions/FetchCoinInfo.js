import {apiURL, API_KEY} from '../utils/Constants'
import axios from 'axios'

export default function FetchCoinInfo () {
    return(dispatch) => {
        dispatch({type: 'FETCH_COIN_INFO'})
        return axios.get(`${apiURL}/v1/cryptocurrency/listings/latest?sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=USD&CMC_PRO_API_KEY=${API_KEY}`).then(res => {
            dispatch({type: 'FETCH_COIN_INFO_SUCCESS', payload: res.data})
        }).catch(err => {
            dispatch({type: 'FETCH_COIN_INFO_ERROR', payload: err.data})
        })
    }
}