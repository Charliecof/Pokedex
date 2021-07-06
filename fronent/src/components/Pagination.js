import React,{useState,useEffect} from 'react';

function Pagination({handleNext,handlePrevious,limit,buttonSize}) {
    const [current,setCurrent] = useState(1);
    const[numbers,setNumbers] = useState([]);

    useEffect(()=>{
        const aux = [...numbers];
        if(aux.length==0){
            for (let i = 1; i <= buttonSize; i++)
                aux.push(i);
            setNumbers([...aux]);
        }else if(current!=1) {
            aux[0] = current-1;
            aux[1] = current;
            aux[2] = current+1;
            setNumbers([...aux]);
        }
    },[current]);

    const nextClick = ()=>{
        if (current<limit)
            setCurrent(current+1);
    }
    const previousClick = ()=>{
        if (current!=1)
            setCurrent(current-1);
    }

    return (
       <nav className="pagination is-centered" role="navigation" aria-label="pagination">
           <a className="pagination-previous" onClick={previousClick}>Previous</a>
           <a className="pagination-next" onClick={nextClick}>Next</a>
           <ul className="pagination-list">

               <li><a className={current==1 ? "pagination-link is-current" : "pagination-link"}>1</a></li>
               <li><span className="pagination-ellipsis">&hellip;</span></li>
               <li><a className="pagination-link">{numbers[0]==1 ? "2": numbers[0]}</a></li>
               <li><a className="pagination-link">{numbers[1]}</a></li>
               <li><a className="pagination-link">4</a></li>
               <li><span className="pagination-ellipsis">&hellip;</span></li>
               <li><a className="pagination-link">{limit}</a></li>
           </ul>
       </nav>
    );
}

export default Pagination;