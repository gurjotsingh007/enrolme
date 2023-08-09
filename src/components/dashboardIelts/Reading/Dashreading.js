import {React,useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import DashboardNav from '../../dashboardNavbar/DashboardNav'
import Axios from "axios"
import Ieltscard from '../../ielts/Ieltscard';
import "../../spinner/spinner.css"
import ReactPaginate from 'react-paginate';
import "./Dashreading.css"


function Dashreading() {

  const [modules,Setmodules] = useState([]);

  const [currentItems,SetcurrentItems] = useState([]);
  const [pageCount,SetpageCount] = useState(0);
  const [itemOffset, SetitemOffset]  = useState(0);
  const itemsPerPage = 6;

  useEffect(()=>{
    Axios.get(`${process.env.REACT_APP_STRAPI_API}/api/readings`).then((response)=>{
      Setmodules(response.data.data)
      // console.log(response.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  useEffect(()=>{
      const endOffset = itemOffset + itemsPerPage;
      SetcurrentItems(modules.slice(itemOffset,endOffset));
      SetpageCount(Math.ceil(modules.length/itemsPerPage));
    
  },[itemOffset,itemsPerPage,modules]);

  const handlePageClick = (event) =>{
    const newOffset = (event.selected * itemsPerPage) % modules.length;
    SetitemOffset(newOffset);
  }


  return (
    <div>
      <div className="container row">
        {currentItems.length == 0?<span class="loader"></span> : currentItems.map((module)=>{
          return <Ieltscard title="Reading" url={`/dashreading/${module.id}`} img="https://cdn-icons-png.flaticon.com/512/2436/2436636.png" />
        })}
        
        <ReactPaginate

          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={6}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        
       />

      </div>

      
    </div>
  )
}

export default Dashreading