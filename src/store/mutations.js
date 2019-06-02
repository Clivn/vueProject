import * as types from './types';
export default {
  [types.SHOW_NAV]:(state)=>{
    state.blNav=true;
  },
  [types.HIDE_NAV]:(state)=>{
    state.blNav=false;
  },
  [types.SHOW_FOOT]:(state)=>{
    state.blFoot=true;
  },
  [types.HIDE_FOOT]:(state)=>{
    state.blFoot=false;
  },
  [types.SHOW_LOADING]:(state)=>{
    state.blLoading=true;
  },
  [types.HIDE_LOADING]:(state)=>{
    state.blLoading=false;
  },
}