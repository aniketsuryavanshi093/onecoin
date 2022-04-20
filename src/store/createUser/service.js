import axios from "axios";


export function requestCreateUser(props) {
  return axios.request({
    method: "post",
    url: "http://44.240.188.82:3000/api/v1/marketing/create-user",
      data: props
  });
}

export function requestReferalLink(walletAddress) {
  return axios.request({
    method: "get",
    url: `http://44.240.188.82:3000/api/v1/marketing/get-user?walletAddress=${walletAddress}`,
  });
}

export function requestUserData(walletAddress) {
  return axios.request({
    method: "get",
    url: `http://44.240.188.82:3000/api/v1/marketing/get-dashboard?walletAddress=${walletAddress}`,
  });
}

export function requestLogin(props) {
  return axios.request({
    method: "post",
    url: `http://44.240.188.82:3000/api/v1/marketing/login`,
    data: props
  });
}