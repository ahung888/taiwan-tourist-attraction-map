import {configureStore, createSlice} from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';

import { parseEntitiesToIdArrayAndEntitiesDictionary } from '../utils/dataHelper'
import { fetchScenicSpot, fetchAdditionalScenicSpot } from './api'
// import { fetchScenicSpot, fetchAdditionalScenicSpot } from './api/scenicSpotCity'

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

    ids: [],
    entities: {},
    currentEntity: null,
    previousEntity: null,
    nextEntity: null,

    popupInfo: null,
    searchText: '',
    splashMessage: null,

    // api
    status: 'idle',
    error: '',

    // ui
    showItemPage: false,
    showItemListPage: false,
    showSearchPage: false,
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
    emptySplashMessage(state, aciton) {
      state.splashMessage = null
    },
    
    setCurrentEntity(state, action) {
      state.currentEntity = action.payload

      const currId = action.payload.ID
      const currIdx = state.ids.indexOf(currId)
      
      if (currIdx === -1) return
      const [ prevId ] = state.ids.slice(currIdx-1, currIdx)
      const [ nextId ] = state.ids.slice(currIdx+1, currIdx+2)

      state.previousEntity = state.entities?.[prevId]
      state.nextEntity = state.entities?.[nextId]
    },
    moveToPreviousEntity(state, action) {
      const currId = state.currentEntity.ID
      const currIdx = state.ids.indexOf(currId)
      
      if (currIdx === -1 || currIdx === 0) return
      const [ prevId ] = state.ids.slice(currIdx-1, currIdx)

      if (prevId === undefined) return
      const [ prev2Id ] = state.ids.slice(currIdx-2, currIdx-1)

      state.previousEntity = state.entities?.[prev2Id]
      state.currentEntity = state.entities?.[prevId]
      state.nextEntity = state.currentEntity
    },
    moveToNextEntity(state, action) {
      const currId = state.currentEntity.ID
      const currIdx = state.ids.indexOf(currId)
      
      if (currIdx === -1) return
      const [ nextId ] = state.ids.slice(currIdx+1, currIdx+2)

      if (nextId === undefined) return
      const [ next2Id ] = state.ids.slice(currIdx+2, currIdx+3)

      state.previousEntity = state.currentEntity
      state.currentEntity = state.entities?.[nextId]
      state.nextEntity = state.entities?.[next2Id]
    },
    emptyEntities(state, aciton) {
      state.entities = {}
      state.currentEntity = null
      state.previousEntity = null
      state.nextEntity = null
    },

    setPopupInfo(state, action) {
      state.popupInfo = action.payload
    },
    emptyPopupInfo(state, action) {
      state.popupInfo = null
    },

    setShowItemPage(state, action) {
      state.showItemPage = action.payload
    },
    setShowItemListPage(state, action) {
      state.showItemListPage = action.payload
    },
    setShowSearchPage(state, action) {
      state.showSearchPage = action.payload
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
        state.popupInfo = null
      })
      .addCase(fetchScenicSpot.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message

        if (action.payload === 'search not found') {
          state.splashMessage = '查無資料'
        }
      })
      .addCase(fetchAdditionalScenicSpot.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchAdditionalScenicSpot.fulfilled, (state, action) => {
        state.status = 'additions_loaded'
        const { entities, ids } = parseEntitiesToIdArrayAndEntitiesDictionary(action.payload)
        state.entities = { ...state.entities, ...entities }
        state.ids = state.ids.concat(ids)

        if (state.currentEntity && ids.length > 0) {
          state.nextEntity = entities[ids[0]]
        }
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
  emptySplashMessage,
  setCurrentEntity,
  emptyEntities,
  setPopupInfo,
  emptyPopupInfo,
  setShowItemPage,
  setShowItemListPage,
  setShowSearchPage,
  moveToPreviousEntity,
  moveToNextEntity
} = globalSlice.actions

export const wrapper = createWrapper(makeStore);

export const selectGlobal = (id) => (state) => state?.[globalSlice.name]?.[id];