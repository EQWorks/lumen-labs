import React, { useState } from 'react'

import { Layout } from '../src'
import { Pagination } from '../src'


export default {
  title: 'Pagination',
  component: Pagination,
}

const exampleItems = [...Array(200).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

export const Normal = () => {
  const [item, setItem] = useState({
    exampleItems: exampleItems,
    pageOfItems: []
  })

  const headerClass = 'bg-primary-200 text-black text-center h-full'
  const contentClass = 'bg-primary-400 text-black text-center h-full w-full'

  const onChangePage = (pageOfItems) => {
    setItem({ ...item, pageOfItems: pageOfItems });
  }

  return (
    <Layout>
      <Layout.Header className={headerClass}>Normal type with default styling</Layout.Header>
      <Layout.Content className={contentClass}>
        {item.pageOfItems.map(item =>
          <div key={item.id}>{item.name}</div>
        )}
      </Layout.Content>
      <Layout.Footer className={headerClass}>
        <Pagination items={item.exampleItems} onChangePage={onChangePage} rowsPerPage={[5,10,20]}/>
      </Layout.Footer>
    </Layout>
  )
}