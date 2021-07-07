import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { ChevronLeft, ChevronRight } from '../../icons'

import './pagination.css'


const Pagination = ({ classes, items, onChangePage, initialPage, pageSize, showPage, firstLast, rowsPerPage }) => {
  const paginationClasses = Object.freeze({
    container: `${classes.container ? classes.container : 'flex justify-center items-center bg-primary-500'}`,
    item: `${classes.item ? classes.item : 'px-2 cursor-pointer hover:bg-primary-700 hover:text-white'}`,
    arrow: `${classes.arrow ? classes.arrow : 'rounded-full'}`,
    pageItem: `${classes.pageItem ? classes.pageItem : 'w-7 flex justify-center'}` ,
    currentPageColor: `${classes.currentPageColor ? classes.currentPageColor : 'bg-red-500'}`,
  })

  const [pager, setPager] = useState({})
  const [rowsPerPageSize, setRowsPerPageSize] = useState(rowsPerPage ? rowsPerPage[0] : pageSize)

  const setPage = (page) => {
    let _pager = pager

    if (page < 1 || page > _pager.totalPages) {
      return
    }

    _pager = getPagerObject(items.length, page, rowsPerPageSize)

    let pageOfItems = items.slice(_pager.startIndex, _pager.endIndex + 1)

    setPager(_pager)
    onChangePage(pageOfItems)
  }

  const getPagerObject = (totalItems, currentPage, pageSize) => {

    currentPage = currentPage || 1
    pageSize = pageSize || 10
    
    let totalPages = Math.ceil(totalItems / pageSize)

    let startPage, endPage
    if (totalPages <= 10) {
      startPage = 1
      endPage = totalPages
    } else {
      if (currentPage <= 6) {
        startPage = 1
        endPage = 10
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9
        endPage = totalPages
      } else {
        startPage = currentPage - 5
        endPage = currentPage + 4
      }
    }

    let startIndex = (currentPage - 1) * pageSize
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)

    let pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i)

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    }
  }

  useEffect(() => {
    setPage((items && items.length) && initialPage)
  }, [items, rowsPerPageSize])

  return (
    <>
      {pager.pages &&     
      <ul className={`pagination ${paginationClasses.container}`}>
        { rowsPerPage && 
          <li className={'px-2'}>
            <span className={'mx-2'}>rows per page: </span>
            <select className={'rows-selection pr-4'} name="rowsPerPage" id="rowsPerPage" onChange={e => setRowsPerPageSize(parseInt(e.target.value))}>
              {rowsPerPage.map((data, index) => {
                return(
                  <option key={index} value={data}>{data}</option>
                )
              })}
            </select> 
          </li>
        }
        { firstLast &&
          <li className={`${paginationClasses.item} ${pager.currentPage === 1 ? 'disabled' : ''}`}>
            <a onClick={() => setPage(1)}>First</a>
          </li>
        }
        <li 
          className={`
            ${paginationClasses.item} 
            ${pager.currentPage === 1 ? 'disabled' : ''}
          `}
        >
          <a onClick={() => setPage(pager.currentPage - 1)}><ChevronLeft /></a>
        </li>
        {showPage && pager.pages.map((page, index) =>
          <li 
            key={index} 
            className={`
              ${paginationClasses.item}
              ${paginationClasses.arrow}
              ${paginationClasses.pageItem}
              ${pager.currentPage === page ? paginationClasses.currentPageColor : ''}
            `}
          >
            <a onClick={() => setPage(page)}>{page}</a>
          </li>,
        )}
        <li 
          className={`
            ${paginationClasses.item}
            ${paginationClasses.arrow} 
            ${pager.currentPage === pager.totalPages ? 'disabled' : ''}
          `}
        >
          <a onClick={() => setPage(pager.currentPage + 1)}><ChevronRight /></a>
        </li>
        {firstLast && 
          <li className={`${paginationClasses.item} ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
            <a onClick={() => setPage(pager.totalPages)}>Last</a>
          </li>
        }
      </ul>
      }
    </>
  )
}

Pagination.propTypes = {
  classes: PropTypes.exact({
    container: PropTypes.string,
    item: PropTypes.string,
    arrow: PropTypes.string,
    pageItem: PropTypes.string,
    currentPageColor: PropTypes.string,
  }),
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  pageSize: PropTypes.number,
  showPage: PropTypes.bool,
  firstLast: PropTypes.bool,
  rowsPerPage: PropTypes.arrayOf(PropTypes.number),
}

Pagination.defaultProps = {
  classes: PropTypes.exact({
    container: '',
    item: '',
    arrow: '',
    pageItem: '',
    currentPageColor: '',
  }),
  initialPage: 1,
  pageSize: 10,
  showPage: true,
  firstLast: true,
}

export default Pagination
