import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'


const Pagination = ({items, onChangePage, initialPage, pageSize}) => {
  const paginationClasses = Object.freeze({
    item: 'mx-2',
  })

  const [pager, setPager] = useState({})

  const setPage = (page) => {
    let _pager = pager;

    if (page < 1 || page > _pager.totalPages) {
        return;
    }

    _pager = getPagerObject(items.length, page, pageSize);

    let pageOfItems = items.slice(_pager.startIndex, _pager.endIndex + 1);

    setPager(_pager);
    onChangePage(pageOfItems);
  }

  const getPagerObject = (totalItems, currentPage, pageSize) => {
    currentPage = currentPage || 1;
    pageSize = pageSize || 10;

    let totalPages = Math.ceil(totalItems / pageSize);

    let startPage, endPage;
    if (totalPages <= 10) {
        startPage = 1;
        endPage = totalPages;
    } else {
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        } else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        } else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
    }

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    let pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  useEffect(() => {
    setPage((items && items.length) && initialPage)
  }, [items])

  return (
    <>
    {pager.pages &&     
      <ul className="pagination flex">
        <li className={`${paginationClasses.item} ${pager.currentPage === 1 ? 'disabled' : ''}`}>
          <a onClick={() => setPage(1)}>First</a>
        </li>
        <li className={`${paginationClasses.item} ${pager.currentPage === 1 ? 'disabled' : ''}`}>
          <a onClick={() => setPage(pager.currentPage - 1)}>Previous</a>
        </li>
        {pager.pages.map((page, index) =>
          <li key={index} className={`${paginationClasses.item} ${pager.currentPage === page ? 'bg-red-500' : ''}`}>
            <a onClick={() => setPage(page)}>{page}</a>
          </li>
        )}
        <li className={`${paginationClasses.item} ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
          <a onClick={() => setPage(pager.currentPage + 1)}>Next</a>
        </li>
        <li className={`${paginationClasses.item} ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
          <a onClick={() => setPage(pager.totalPages)}>Last</a>
        </li>
      </ul>
      }
    </>
  )
}

Pagination.propTypes = {
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  pageSize: PropTypes.number
}
Pagination.defaultProps = {
  initialPage: 1,
  pageSize: 10
}

export default Pagination
