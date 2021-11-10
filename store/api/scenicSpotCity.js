import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetAuthorizationHeader } from '../../utils/authorization'
import { emptyFunc, emptyAsyncAction } from './index'

const EntityLimit = 50

const actions = {
  fetchScenicSpot: 'global/fetchScenicSpot',
  fetchAdditionalScenicSpot: 'global/fetchAdditionalScenicSpot',
}

export const fetchScenicSpot = createAsyncThunk(actions.fetchScenicSpot, async () => {})
export const fetchAdditionalScenicSpot = createAsyncThunk(actions.fetchAdditionalScenicSpot, async () => {})

export const apiSpotCity = () => {

  let _url = ''
  let _city = ''
  let _gotPage = 0
  let _pageLimit = EntityLimit
  let _lastEntityCounts = EntityLimit
  let _isLoading = false
  
  const fetchFactory = (url, action = actions.fetchScenicSpot, resolve = emptyFunc, reject = emptyFunc) => {
    return createAsyncThunk(action, async (city, { rejectWithValue }) => {
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
  
  const set = ({ city }) => {
    _reset()
    _city = city
  }

  const _reset = () => {
    _url = ''
    _city = ''
    _gotPage = 0
    _pageLimit = EntityLimit
    _lastEntityCounts = EntityLimit
  }

  const get = () => {
    if (_city && !_isLoading && hasMore()) {
      _isLoading = true
      const skip = _gotPage * _pageLimit
      const querySkip = skip === 0 ? '' : `&$skip=${ skip }`
      const action = _gotPage === 0 ? actions.fetchScenicSpot : actions.fetchAdditionalScenicSpot
      const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${_city}?$top=${EntityLimit}${querySkip}&$format=JSON`
      return fetchFactory(url, action,
        (data) => {
          _lastEntityCounts = data.length
          _gotPage += 1
          _isLoading = false
        },
        (response, error) => {
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
