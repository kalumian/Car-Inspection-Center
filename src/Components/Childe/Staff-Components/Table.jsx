// Import From Lib
import {useState , useEffect , useContext} from 'react'

function Table({ Contents, title , users}) {

  return (
    <>
      <hr className="mt-5" />
      <h2 className="text-center mt-3 fs-4">{title}</h2>
      <table className="table table-striped table-hover text-center rtl my-4 w-75">
        <Contents users={users}/>
      </table>
    </>
  );
}

export default Table;
