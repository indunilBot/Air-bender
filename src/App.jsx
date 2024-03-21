import "./App.css";
import Page from "./Pages/Page";


import * as Sentry from "@sentry/react"

function App() {

 

  return (
    <>
      
      <Page />
    </>
  );
}

export default Sentry.withProfiler(App);
