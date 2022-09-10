import React from 'react';

const Pagination = ({changePage, itemsPerPage, total}) => {

    if(total){


    }else{

        total = 0;

    }
        
    let pages = Math.round(total / itemsPerPage);
    
    if(pages * itemsPerPage < total) pages++;


    const range = [...Array(pages).keys()];
    
    
    return(
        
        <>
            {
                range.map(page => (

                    <div onClick={()=> changePage(page+1)} key={page+1}>{page+1}</div>

                    )

                )
            }
        </>

    )
    
    
}

export default Pagination;