import React from "react"

import TableTransaction from "../src/components/Table/Index"
import Total from "./components/Total/Index"
import { Edit } from "./Functions/FetchAPi"

import FetchShareApiProvider from "./context/FetchShareApi"
function App() {

  return (

    <>

        <FetchShareApiProvider>
          <Total />
        <TableTransaction />
        </FetchShareApiProvider>
    </>




  )
}

export default App
