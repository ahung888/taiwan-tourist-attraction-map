import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetAuthorizationHeader } from '../utils/authorization'

const EntityLimit = 30

export const fetchScenicSpot = createAsyncThunk('global/fetchScenicSpot', async (city, { rejectWithValue }) => {
  const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$top=${EntityLimit}&$format=JSON`
  const response = await fetch(url, { headers: GetAuthorizationHeader() })
  const data = await response.json()

  if (Array.isArray(data) && data.length > 0 && data[0].ID !== undefined) {
    return data
  }
  if (typeof data === 'object' && data.message !== undefined) {
    return rejectWithValue(data.message)
  }

  return rejectWithValue('something went wrong')
})

export const fetchScenicSpotByKeyword = createAsyncThunk('global/fetchScenicSpot', async (keyword, { rejectWithValue }) => {
  const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(Keyword%2C%20'${keyword}')&$top=${EntityLimit}&$format=JSON`
  const response = await fetch(url, { headers: GetAuthorizationHeader() })
  const data = await response.json()

  if (Array.isArray(data) && data.length > 0 && data[0].ID !== undefined) {
    return data
  }
  if (typeof data === 'object' && data.message !== undefined) {
    return rejectWithValue(data.message)
  }

  return rejectWithValue('something went wrong')
})

