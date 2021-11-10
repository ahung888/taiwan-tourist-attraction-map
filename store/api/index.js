import { createContext } from 'react'
export {
  apiSpotCity,
  fetchScenicSpot,
  fetchAdditionalScenicSpot
} from './scenicSpotCity'

import { apiSpotCity } from './scenicSpotCity'
import { apiSpotKeyword } from './scenicSpotKeyword'

export const ApiContext = createContext()

export const API_TYPES = Object.freeze({
  spotCity: 1,
  spotKeyword: 2,
})

export const createApi = () => {
  
  let _type = null

  const apis = {
    [API_TYPES.spotCity]: apiSpotCity(),
    [API_TYPES.spotKeyword]: apiSpotKeyword(),
  }

  const set = (type = API_TYPES.spotCity, options = {}) => {
    _type = type
    if (_type in apis) {
      return apis[_type].set(options)
    }
  }
  
  const get = () => {
    if (_type in apis) {
      return apis[_type].get()
    }
  }
  
  const hasMore = () => {
    if (_type in apis) {
      return apis[_type].hasMore()
    }
  }
  
  return {
    set,
    get,
    hasMore
  }
}

export const emptyFunc = () => {}
export const emptyAsyncAction =  () => () => () => {}