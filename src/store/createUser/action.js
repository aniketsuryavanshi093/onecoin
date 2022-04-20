export const SET_WALLET_ADDRESS = "SET_WALLET_ADDRESS";
export const CREATE_USER = "CREATE_USER";
export const USER_SUCCESSUFULLY_CREATED = "USER_SUCCESSUFULLY_CREATED";
export const GET_REFERAL_LINK = "GET_REFERAL_LINK";
export const SET_REFERAL_LINK = "SET_REFERAL_LINK";
export const GET_USER_DETAILS = "GET_USER_DETAILS";
export const SET_USER_DETAILS = "SET_USER_DETAILS";
export const LOGIN_USER = "LOGIN_USER"

export const setWalletAddress = (walletAddress) => ({type : SET_WALLET_ADDRESS, walletAddress})
export const createUser = (payload) => ({type : CREATE_USER, payload})
export const getReferalLink = (payload) => ({type : GET_REFERAL_LINK, payload})
export const setReferalLink = (payload) => ({type : SET_REFERAL_LINK, payload})
export const getUserDetails = (payload) => ({type : GET_USER_DETAILS, payload})
export const setUserDetails = (payload) => ({type : SET_USER_DETAILS, payload})
export const loginUser = (payload) => ({ type : LOGIN_USER, payload})