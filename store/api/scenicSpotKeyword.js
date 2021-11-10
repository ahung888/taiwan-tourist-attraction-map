import { createContext } from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetAuthorizationHeader } from '../../utils/authorization'

const EntityLimit = 50
const emptyFunc = () => {}
const emptyAsyncAction =  () => () => () => {}

const actions = {
  fetchScenicSpot: 'global/fetchScenicSpot',
  fetchAdditionalScenicSpot: 'global/fetchAdditionalScenicSpot',
}

export const ApiContext = createContext()

export const fetchScenicSpot = createAsyncThunk(actions.fetchScenicSpot, async () => {})
export const fetchAdditionalScenicSpot = createAsyncThunk(actions.fetchAdditionalScenicSpot, async () => {})

export const apiSpotKeyword = () => {

  let _url = ''
  let _keyword = ''
  let _gotPage = 0
  let _pageLimit = EntityLimit
  let _lastEntityCounts = EntityLimit
  let _isLoading = false
  
  const fetchFactory = (url, action = actions.fetchScenicSpot, resolve = emptyFunc, reject = emptyFunc) => {
    return createAsyncThunk(action, async (keyword, { rejectWithValue }) => {
      const response = await fetch(url, { headers: GetAuthorizationHeader() })
      const data = await response.json()

      if (Array.isArray(data) && data.length > 0 && data[0].ID !== undefined) {
        resolve(data)
        return data
      }
      if (typeof data === 'object' && data.message !== undefined) {
        reject(data, data.message)
        return rejectWithValue(data.message)
      }
    
      reject(data)
      return rejectWithValue('something went wrong')
    })
  }
  
  const set = ({ keyword }) => {
    _reset()
    _keyword = keyword
  }

  const _reset = () => {
    _url = ''
    _keyword = ''
    _gotPage = 0
    _pageLimit = EntityLimit
    _lastEntityCounts = EntityLimit
  }

  const get = () => {
    if (_keyword && !_isLoading && hasMore()) {
      _isLoading = true
      const skip = _gotPage * _pageLimit
      const querySkip = skip === 0 ? '' : `&$skip=${ skip }`
      const action = _gotPage === 0 ? actions.fetchScenicSpot : actions.fetchAdditionalScenicSpot
      const filter = `contains(Keyword%2C%20'${_keyword}')%20or%20contains(Name%2C%20'${_keyword}')`
      const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=${filter}&$top=${EntityLimit}${querySkip}&$format=JSON`
      return fetchFactory(url, action, (data) => {
        _lastEntityCounts = data.length
        _gotPage += 1
        _isLoading = false
      }, (response, error) => {
        _lastEntityCounts = 0
        _isLoading = false
      })
    }
    return emptyAsyncAction
  }

  const hasMore = () => _lastEntityCounts === EntityLimit

  return {
    set,
    get,
    hasMore
  }
}