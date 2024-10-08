import React, { useContext } from 'react'
import { pageContext } from '../Context/PageContext'
import { modeContext } from '../Context/ModeContext'

const Pagination = () => {
    const {pageNum,setPageNum} = useContext(pageContext)
    const {mode} = useContext(modeContext)

    const handelPrev =()=>{
      if(pageNum > 1 ) setPageNum(pageNum - 1)
    }

    const handelNext =()=>{
      if(pageNum < 20) setPageNum(pageNum + 1)
    }
  return (
    <div className="d-flex justify-content-center pt-4">
          <button className={`btn ${mode === "light" ? "btn-dark":"btn-light" }`} onClick={handelPrev}>
            Prev
          </button>
          <span className={`mx-4 my-auto ${mode === "light" ? "text-dark":"text-light"}`}>{pageNum}</span>
          <button className={`btn ${mode === "light" ? "btn-dark":"btn-light" }`} onClick={handelNext}>
            Next
          </button>
        </div>
  )
}

export default Pagination