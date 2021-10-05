import {  createActions, createReducer } from 'reduxsauce';

export const {types, Creators} = createActions({
    nomeDaAction: ['parametros que a action recebe'],
 
});

const nomeDaAction = (state = INITIAL_STATE, action) => {

}

export default createReducer(INITIAL_STATE, {
    [types.NOME_DA_ACTION] : nome_do_reducer, 
    [types.NOME_DA_ACTION] : add, 
    [types.NOME_DA_ACTION] : add, 
})