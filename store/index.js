import {configureStore, createSlice} from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';

import { parseEntitiesToIdArrayAndEntitiesDictionary } from '../utils/dataHelper'
import { fetchScenicSpot, fetchAdditionalScenicSpot } from './api'

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    device: {
      width: 0,
      height: 0,
      isMobile: false,
      isTablet: false,
      isDesktop: false,
    },
    searchText: '',
    ids: [],
    entities: {},
    popupInfo: null,
    status: 'idle',
    error: '',
  },
  reducers: {
    setDevice(state, action) {
      const { width, height } = action.payload
      state.device.width = width
      state.device.height = height
      state.device.isMobile = width < 650
      state.device.isTablet = width >= 650 && width < 720
      state.device.isDesktop = width >= 720
    },
    setStatusRendered(state, action) {
      state.status = 'rendered'
    },
    setSearchText(state, action) {
      state.searchText = action.payload
    },
    emptySearchText(state, aciton) {
      state.searchText = ''
    },
    emptyEntities(state, aciton) {
      state.entities = {}
    },
    setPopupInfo(state, action) {
      state.popupInfo = action.payload
    },
    emptyPopupInfo(state, action) {
      state.popupInfo = null
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchScenicSpot.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchScenicSpot.fulfilled, (state, action) => {
        state.status = 'loaded'
        const { entities, ids } = parseEntitiesToIdArrayAndEntitiesDictionary(action.payload)
        state.entities = entities
        state.ids = ids
      })
      .addCase(fetchScenicSpot.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchAdditionalScenicSpot.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchAdditionalScenicSpot.fulfilled, (state, action) => {
        state.status = 'additions_loaded'
        const { entities, ids } = parseEntitiesToIdArrayAndEntitiesDictionary(action.payload)
        state.entities = { ...state.entities, ...entities }
        state.ids = state.ids.concat(ids)
      })
      .addCase(fetchAdditionalScenicSpot.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

const makeStore = () =>
  configureStore({
    reducer: {
      [globalSlice.name]: globalSlice.reducer,
    },
  });

export const {
  setDevice,
  setStatusRendered,
  setSearchText,
  emptySearchText,
  emptyEntities,
  setPopupInfo,
  emptyPopupInfo
} = globalSlice.actions

export const wrapper = createWrapper(makeStore);

export const selectGlobal = (id) => (state) => state?.[globalSlice.name]?.[id];
