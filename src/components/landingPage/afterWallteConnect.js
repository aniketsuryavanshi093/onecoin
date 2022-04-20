import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faFile } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import { referalLink, userDetails } from "../../store/createUser/selector";
import { useDispatch, useSelector } from "react-redux";
import {
  getReferalLink,
  createUser,
  getUserDetails,
  loginUser,
} from "../../store/createUser/action";
import { userCreatedSuccessufully } from "../../store/createUser/selector";
import { useWeb3React } from "@web3-react/core";
import "../../views/landingPage/landingPage.scss";

function AfterWallteConnect() {
  //Initial
  const dispatch = useDispatch();
  const { account, library, chainId } = useWeb3React();
  const wallet = localStorage.getItem('connectedWallet');

  //Redux State
  const link = useSelector(referalLink);
  const data = useSelector(userCreatedSuccessufully);
  console.log("🚀 ~ file: afterWallteConnect.js ~ line 26 ~ AfterWallteConnect ~ data", data)
  const userDetail = useSelector(userDetails);
  const [dashboardValues, setDashboardValues] = useState([]);

  //Component LifeCycle
  useEffect(() => {
    if (account !== undefined) {
      dispatch(loginUser({
        walletAddress: "124sasd42321dwqde122123df3551tp",
        walletName: wallet,
        chainId: chainId,
    }));
    }
  }, [account, chainId]);

  useEffect(() => {
    if (account) {
      dispatch(getReferalLink(account));
    }
  }, [account]);

  useEffect(() => {
    if (account) {
      dispatch(getUserDetails(account));
    }
  }, [account]);

  useEffect(() => {
    if (userDetail) {
      setDashboardValues([
        { text: "NFT earned", value: userDetail?.userEarnedNft },
        { text: "No. of invites", value: userDetail?.userInvitesCount },
        { text: "Total addresses registered", value: userDetail?.usersCount },
      ]);
    }
  }, [userDetail]);

  //Function
  const copyToClipboard = () => {
    {
      navigator.clipboard.writeText(`${link}`);
    }
  };

  return (
    <div className="grid flex-col p-6">
      <div className="flex ml-auto justify-between relative">
        <div className="py-2 dropdown w-auto bg-transprent hover:text-opacity-50 text-white font-semibold border border-gray-400 rounded shadow sm:text-xl lg:tetx-4xl xl:text-4xl mr-12 cursor-pointer">
          <span className="py-2 px-4">Send Invite</span>
          <div
            className="dropdown-content cursor-pointer"
            onClick={() => copyToClipboard()}
          >
            <p className="sm:text-xl lg:text-4xl xl:text-4xl mt-2 text-indigo-900 text-center">
              Copy Link
            </p>
          </div>
        </div>
        <FontAwesomeIcon icon={faCircleUser} size="3x" />
      </div>

      <span className="block text-center text-xl lg:text-5xl sm:text-4xl mt-8 mb-20 sm:mb-60">
        One game initiative
      </span>
      <div className="flex justify-between w-11/12 xl:w-4/6 lg:w-5/6 2xl:w-1/2 justify-self-center">
        {dashboardValues.map((i) => {
          return <NftContainer text={i.text} value={i.value} key={i.text}/>;
        })}
      </div>
    </div>
  );
}

export default AfterWallteConnect;

const NftContainer = ({ text, value }) => {
  return (
    <div className="text-sm sm:text-lg md:text-2xl lg:text-3xl 2xl:texl-5xl 2xl:p-6 lg:p-4 flex flex-col border-2 p-2 sm:p-2">
      <span className="text-center 2xl:text-red">{text}</span>
      <span className="text-center">
        {value}
      </span>
    </div>
  );
};
