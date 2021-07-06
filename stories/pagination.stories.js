import React, { useState } from 'react'

import { Layout } from '../src'
import Pagination from '../src/components/pagination'


export default {
  title: 'Pagination',
  component: Pagination,
}

const exampleItems = [...Array(12).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

export const Normal = () => {
  const [item, setItem] = useState({
    exampleItems: exampleItems,
    pageOfItems: []
  })

  const headerClass = 'bg-primary-200 text-white text-center h-full'
  const contentClass = 'bg-primary-400 text-white text-center h-full w-full'

  const onChangePage = (pageOfItems) => {
    setItem({ ...item, pageOfItems: pageOfItems });
  }

  return (
    <Layout>
      <Layout.Header className={headerClass}>Header</Layout.Header>
      <Layout.Content className={contentClass}>
        {item.pageOfItems.map(item =>
          <div key={item.id}>{item.name}</div>
        )}
      </Layout.Content>
      <Layout.Footer className={headerClass}>
        <Pagination items={item.exampleItems} onChangePage={onChangePage}/>
      </Layout.Footer>
    </Layout>
  )
}