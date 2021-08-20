import React, { useState } from 'react'

import { Layout } from '../src'
import { Pagination } from '../src'


export default {
  title: 'Pagination',
  component: Pagination,
}

const exampleData = [...Array(200).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }))

export const Normal = () => {
  const [data, setData] = useState({
    exampleData: exampleData,
    pageOfItems: [],
  })

  const headerClass = 'bg-primary-200 text-black text-center h-full'
  const contentClass = 'bg-primary-400 text-black text-center h-full w-full'

  const onChangePage = (pageOfItems) => {
    setData({ ...data, pageOfItems: pageOfItems })
  }

  return (
    <Layout>
      <Layout.Header className={headerClass}>Normal type with default styling</Layout.Header>
      <Layout.Content className={contentClass}>
        {data.pageOfItems.map(item =>
          <div key={item.id}>{item.name}</div>,
        )}
      </Layout.Content>
      <Layout.Footer className={headerClass}>
        <Pagination items={data.exampleData} onChangePage={onChangePage} rowsPerPage={[10,20,30,40,50]}/>
        <div className="w-full h-40 bg-blue-50"></div>
      </Layout.Footer>
    </Layout>
  )
}

export const NoAttachments = () => {
  const [data, setData] = useState({
    exampleData: exampleData,
    pageOfItems: [],
  })

  const headerClass = 'bg-primary-200 text-black text-center h-full'
  const contentClass = 'bg-primary-400 text-black text-center h-full w-full'

  const onChangePage = (pageOfItems) => {
    setData({ ...data, pageOfItems: pageOfItems })
  }

  return (
    <Layout>
      <Layout.Header className={headerClass}>with no pages, first & last, rows per page attachments</Layout.Header>
      <Layout.Content className={contentClass}>
        {data.pageOfItems.map(item =>
          <div key={item.id}>{item.name}</div>,
        )}
      </Layout.Content>
      <Layout.Footer className={headerClass}>
        <Pagination items={data.exampleData} onChangePage={onChangePage} showPage={false} firstLast={false} counter={false}/>
      </Layout.Footer>
    </Layout>
  )
}
