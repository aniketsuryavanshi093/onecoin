import {
  USER_SUCCESSUFULLY_CREATED,
  SET_REFERAL_LINK,
  SET_WALLET_ADDRESS,
  SET_USER_DETAILS,
  LOGIN_USER
} from "./action";

const initialState = {
  userSuccessfullyCreated: null,
  walletAddress: null,
  userDetails: null,
};

export const createUser = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_SUCCESSUFULLY_CREATED:
      return {
        ...state,
        userSuccessfullyCreated: payload.status,
      };
      case LOGIN_USER:
        return{
          ...state,
          userSuccessfullyCreated: payload.status
        }
    case SET_REFERAL_LINK:
      return {
        ...state,
        referalLink: payload.referralCode,
      };
    case SET_WALLET_ADDRESS:
      return {
        ...state,
        walletAddress: payload,
      };
    case SET_USER_DETAILS:
      return {
        ...state,
        userDetails: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
