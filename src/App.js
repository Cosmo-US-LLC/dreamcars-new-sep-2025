import React, { useState } from "react";

import Layout from './layout';
import i18n from 'i18next';
import { ToastContainer } from 'react-toastify';

import Parse from 'parse';
// Initialize Parse
Parse.initialize("myAppId");
Parse.masterKey = "myMasterKey";
Parse.serverURL = 'https://64.227.103.227/parse';

function App() {


  const [open, setOpen] = useState(false);
  const handelClick = (lang) => {
    i18n.changeLanguage(lang);
  }
  const handleClose = (test, e) => {

    if (e) {
      if (e.target.innerText === "More Info") {
        setOpen(true)
        return
      }
      else
        setOpen(false)
    }
    else setOpen(test)
  }

  return (
    <div className="">
      <ToastContainer />
      <Layout handelClick={handelClick} handleClose={handleClose} open={open} />
    </div>
  );
}

export default App;
