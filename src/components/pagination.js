import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import { ArrowLeft, ArrowRight, ArrowUpDown } from '../icons'
import { DropdownAutoCenter } from '..'


const Pagination = ({
  classes = {
    container: '',
    item: '',
    arrow: '',
    pageItem: '',
    currentPageColor: '',
  },
  itemsLength,
  onChangePage,
  onChangeRowsPerPage = () => {},
  initialPage = 1,
  pageSize = 10,
  showPage = true,
  firstLast = true,
  counter = true,
  rowsPerPage,
  hideRowsPerPage = false,
  arrowLeft = null,
  arrowRight = null,
}) => {
  const paginationClasses = Object.freeze({
    container: `pagination__main-container ${classes.container || ''} flex items-center text-xs tracking-md leading-1.33 bg-secondary-50`,
    item: `pagination__item-container ${classes.item || ''} min-w-5 mr-5px py-0.5 flex justify-center text-secondary-400 cursor-pointer rounded-sm 'hover:text-secondary-900'`,
    arrow: `pagination__arrow-container ${classes.arrow || ''} min-h-5 flex justify-center items-center cursor-pointer`,
    pageItem: `pagination__page-item-container ${classes.pageItem || ''}` ,
    currentPageColor: `pagination__current-page-color ${classes.currentPageColor || ''} bg-secondary-200 text-secondary-900`,
  })

  const [pager, setPager] = useState({})
  const [rowsPerPageSize, setRowsPerPageSize] = useState(pageSize)
  const [dropdownData, setDropdownData] = useState([])

  useEffect(() => {
    const _dropdownData = []
    if (rowsPerPage) {
      rowsPerPage.forEach((data) => {
        _dropdownData.push({ title: data })
      })
    } else {
      for (let i = 5; i <= itemsLength; i+= 5) {
        _dropdownData.push({ title: i })
        if (i === 25) break
      }
    }

    setDropdownData(_dropdownData)
  }, [rowsPerPage, pageSize, itemsLength])

  useEffect(() => {
    setPage(undefined, initialPage)
  }, [setPage, initialPage, rowsPerPageSize])

  const setPage = useCallback((e, page) => {
    let _pager = pager

    if (page < 1 || page > _pager.totalPages) {
      return
    }

    _pager = getPagerObject(itemsLength ? itemsLength : 0, page, rowsPerPageSize)
    const pageOfItems = []
    for (let i = _pager.startIndex; i <= _pager.endIndex; i ++) {
      pageOfItems.push({ i: i })
    }

    setPager(_pager)
    onChangePage(e, { pageOfItems, pager: _pager })
  }, [itemsLength, onChangePage, pager, rowsPerPageSize])

  const getPagerObject = (totalItems, currentPage, pageSize) => {
    currentPage = currentPage || 1
    pageSize = pageSize || 10

    let totalPages = Math.ceil(totalItems / pageSize)

    let startPage, endPage
    if (totalPages <= 5) {
      startPage = 1
      endPage = totalPages
    } else {
      if (currentPage <= 3) {
        startPage = 1
        endPage = 5
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4
        endPage = totalPages
      } else {
        startPage = currentPage - 2
        endPage = currentPage + 2
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

  const handleOnChangeRowsPerPage = (e, val) => {
    const _pager = getPagerObject(itemsLength ? itemsLength : 0, initialPage, Number(val.item.title))

    onChangeRowsPerPage(e, { value: val, pager: _pager })
    setRowsPerPageSize(Number(val.item.title))
  }

  return (
    <>
      {pager.pages &&
      <ul className={`pagination ${paginationClasses.container}`}>
        { counter &&
          <li className='min-w-40 px-2'>
            <span>{pager.startIndex + 1} - {pager.endIndex + 1} of {pager.totalItems} items</span>
          </li>
        }

        <li
          className={`mr-5px
            ${paginationClasses.arrow} 
            ${pager.currentPage === 1 ? 'text-secondary-400 --disabled' : 'text-secondary-900'}
          `}
          onClick={(e) => setPage(e, pager.currentPage - 1)}
        >
          {arrowLeft ? arrowLeft : <ArrowLeft size='md'/>}
        </li>
        { firstLast && pager.startPage > 1 &&
          <li className='flex'>
            <div className={`${paginationClasses.item} ${pager.currentPage === pager.totalPages ? '--disabled' : ''}`} onClick={(e) => setPage(e, 1)}>
              1
            </div>
            <span className='min-w-5 mr-5px py-0.5 flex justify-center'>...</span>
          </li>
        }

        { showPage && pager.pages.map((page, index) =>
          <li
            key={index}
            className={`
              ${paginationClasses.item}
              ${paginationClasses.pageItem}
              ${pager.currentPage === page ? paginationClasses.currentPageColor : ''}
            `}
            onClick={(e) => setPage(e, page)}
          >
            {page}
          </li>,
        )}

        { firstLast && (pager.currentPage + 2) < pager.totalPages && pager.totalPages > 5 &&
          <li className='flex'>
            <span className='min-w-5 mr-5px py-0.5 flex justify-center'>...</span>
            <div className={`${paginationClasses.item} ${pager.currentPage === pager.totalPages ? '--disabled' : ''}`} onClick={(e) => setPage(e, pager.totalPages)}>
              {pager.totalPages}
            </div>
          </li>
        }
        <li
          className={`
            ${paginationClasses.arrow} 
            ${pager.currentPage === pager.totalPages ? 'text-secondary-400 --disabled' : 'text-secondary-900'}
          `}
          onClick={(e) => setPage(e, pager.currentPage + 1)}
        >
          {arrowRight ? arrowRight : <ArrowRight size='md'/>}
        </li>
        { !hideRowsPerPage &&
          <li className='min-h-5 pl-5 flex items-center'>
            <span className={'mr-2.5'}>Rows: </span>
            <DropdownAutoCenter
              data={dropdownData}
              onSelect={(e, val) => {
                handleOnChangeRowsPerPage(e, val)
              }}
              value={{ title: pager.pageSize }}
              endIcon={<ArrowUpDown size='sm'/>}
            />
          </li>
        }
      </ul>}
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
  itemsLength: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onChangeRowsPerPage: PropTypes.func,
  initialPage: PropTypes.number,
  pageSize: PropTypes.number,
  showPage: PropTypes.bool,
  firstLast: PropTypes.bool,
  counter: PropTypes.bool,
  rowsPerPage: PropTypes.arrayOf(PropTypes.number),
  hideRowsPerPage: PropTypes.bool,
  arrowLeft: PropTypes.node,
  arrowRight: PropTypes.node,
}

export default Pagination
