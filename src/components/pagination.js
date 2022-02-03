import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { ArrowLeft, ArrowRight, ArrowUpDown } from '../icons'
import { DropdownAutoCenter } from '..'


const Pagination = ({ classes, items, onChangePage, initialPage, pageSize, showPage, firstLast, counter, rowsPerPage }) => {
  const paginationClasses = Object.freeze({
    container: `flex items-center text-xs tracking-md leading-1.33 bg-secondary-50
      ${classes.container && classes.container}`,
    item: `min-w-5 mr-5px py-0.5 flex justify-center text-secondary-400 cursor-pointer rounded-sm 'hover:text-secondary-900'
      ${classes.item && classes.item}`,
    arrow: `min-h-5 flex justify-center items-center cursor-pointer ${classes.arrow && classes.arrow}`,
    pageItem: `${classes.pageItem && classes.pageItem}` ,
    currentPageColor: `bg-secondary-200 text-secondary-900 ${classes.currentPageColor && classes.currentPageColor}`,
  })

  const [pager, setPager] = useState({})
  const [rowsPerPageSize, setRowsPerPageSize] = useState(pageSize)
  const [dropdownData, setDropdownData] = useState([])

  useEffect(() => {
    if (rowsPerPage) {
      const _dropdownData = []
      rowsPerPage.forEach((data) => {
        _dropdownData.push({ title: data })
      })
  
      setDropdownData(_dropdownData)
    }
  }, [rowsPerPage])

  const setPage = (page) => {
    let _pager = pager

    if (page < 1 || page > _pager.totalPages) {
      return
    }

    _pager = getPagerObject(items.length, page, rowsPerPageSize)

    let pageOfItems = items.slice(_pager.startIndex, _pager.endIndex + 1)

    setPager(_pager)
    onChangePage(pageOfItems, _pager)
  }

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

  useEffect(() => {
    setPage((items && items.length) && initialPage)
  }, [setPage, items, rowsPerPageSize, initialPage])

  return (
    <>
      {pager.pages &&     
      <ul className={`pagination ${paginationClasses.container}`}>
        { rowsPerPageSize !== pager.totalItems && <>
          { counter && 
            <li className='min-w-40 px-2'>
              <span>{pager.startIndex + 1} - {pager.endIndex + 1} of {pager.totalItems} items</span>
            </li>
          }

          <li 
            className={`mr-5px
              ${paginationClasses.arrow} 
              ${pager.currentPage === 1 ? 'text-secondary-400 disabled' : 'text-secondary-900'}
            `}
          >
            <ArrowLeft size='md' onClick={() => setPage(pager.currentPage - 1)}/>
          </li>
          { firstLast && pager.startPage > 1 &&
            <li className='flex'>
              <div className={`${paginationClasses.item} ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`} onClick={() => setPage(1)}>
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
              onClick={() => setPage(page)}
            >
              {page}
            </li>,
          )}
          
          { firstLast && (pager.currentPage + 2) < pager.totalPages && pager.totalPages > 5 && 
            <li className='flex'>
              <span className='min-w-5 mr-5px py-0.5 flex justify-center'>...</span>
              <div className={`${paginationClasses.item} ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`} onClick={() => setPage(pager.totalPages)}>
                {pager.totalPages}
              </div>
            </li>
          }
          <li 
            className={`
              ${paginationClasses.arrow} 
              ${pager.currentPage === pager.totalPages ? 'text-secondary-400 disabled' : 'text-secondary-900'}
            `}
          >
            <ArrowRight size='md' onClick={() => setPage(pager.currentPage + 1)}/>
          </li>
        </>}

        { rowsPerPage && 
          <li className='min-h-5 pl-5 flex items-center'>
            <span className={'mr-2.5'}>Rows: </span>
            <DropdownAutoCenter 
              data={dropdownData} 
              onSelect={(_, val) => {
                setRowsPerPageSize(Number(val.item.title))
              }} 
              value={{ title: pageSize }}
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
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  pageSize: PropTypes.number,
  showPage: PropTypes.bool,
  firstLast: PropTypes.bool,
  counter: PropTypes.bool,
  rowsPerPage: PropTypes.arrayOf(PropTypes.number),
}

Pagination.defaultProps = {
  classes: {
    container: '',
    item: '',
    arrow: '',
    pageItem: '',
    currentPageColor: '',
  },
  initialPage: 1,
  pageSize: 10,
  showPage: true,
  firstLast: true,
  counter: true,
}

export default Pagination
