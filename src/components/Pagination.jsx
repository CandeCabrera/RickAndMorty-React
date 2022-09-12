import React from 'react';
import { useState } from 'react';

const Pagination = ({changePage, currentPage, itemsPerPage, array = []}) => {

    const [bgBtn, setBgBtn] = useState(true)


    const total = array.length;
        
    let pages = Math.round(total / itemsPerPage);
    
    if(pages * itemsPerPage < total) pages++;

    const range = [...Array(pages).keys()];

    const first = range.at(0) + 1;

    const last = range.at(-1) + 1;

    console.log(currentPage);
    
    return(
        
        <>  

            {total > 0 && 

            <>
        
            {
                currentPage > first && <div onClick={()=> changePage(currentPage-1)} key="back" className='arrowLeft arrow'><i className="fa-solid fa-arrow-left"></i></div>
            }


            {
            
                (last <= 6) ? (
                    range.map(page => (

                        <div style={{background:  currentPage === page+1 ? "#02e602" : "#55167d"}}  onClick={()=> {changePage(page+1) 
                            }}>{page+1}</div>

                        )

                    

                    )
                ) 
                
                : 

                (

                currentPage <= 3 ? 
                
                (
                    <>
                        <div style={{background:  currentPage === 1 && "#02e602"}}  onClick={()=> {changePage(1)
                        }} >1</div>
                        <div style={{background:  currentPage === 2 && "#02e602"}}  onClick={()=> {changePage(2)
                        }} >2</div>
                        <div style={{background:  currentPage === 3 && "#02e602"}}  onClick={()=> {changePage(3)
                       }} >3</div>
                        <span>...</span>
                        <div style={{background:  currentPage === last && "#02e602"}} onClick={()=> {changePage(last)}} >{last}</div>
                    </>
                ) 
                
                : 

                (
                
                (currentPage > 3 && currentPage <= (last-3)) ?
                
                    (
                        <>
                            <div onClick={()=> changePage(first)} >{first}</div>
                            <span>...</span>
                            <div onClick={()=> changePage(currentPage-1)} >{currentPage-1}</div>
                            <div style={{background:"#02e602"}} onClick={()=> changePage(currentPage)} >{currentPage}</div>
                            <div onClick={()=> changePage(currentPage+1)} >{currentPage+1}</div>
                            <span>...</span>
                            <div onClick={()=> changePage(last)} >{last}</div>
                        </>
                    )

                    : 

                    (
                        <>
                            <div style={{background:  currentPage === first && "#02e602"}} onClick={()=> changePage(first)} >{first}</div>
                            <span>...</span>
                            <div style={{background:  currentPage === range.at(-2) && "#02e602"}} onClick={()=> changePage(last-2)} >{last-2}</div>
                            <div style={{background:  currentPage === range.at(-1) && "#02e602"}} onClick={()=> changePage(last-1)} >{last-1}</div>
                            <div style={{background:  currentPage === last && "#02e602"}} onClick={()=> changePage(last)} >{last}</div>
                        </>
                    )

                )

                )

            }


            {
                currentPage < last && <div onClick={()=> changePage(currentPage+1)} key="end" className='arrowRight arrow'><i className="fa-solid fa-arrow-right"></i></div>
            }
            </>

        }
        </>

    )
    
    
}

export default Pagination;