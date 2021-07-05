import React from 'react'

import { Layout } from '../src'
import Pagination from '../src/components/pagination'


export default {
  title: 'Pagination',
  component: Pagination,
}

export const normal = () => {
  const headerClass = 'bg-primary-200 text-white text-center h-10'
  const contentClass = 'bg-primary-400 text-white text-center h-40 w-full'

  return (
    <Layout>
      <Layout.Header className={headerClass}>Header</Layout.Header>
      <Layout.Content className={contentClass}>Content</Layout.Content>
      <Layout.Footer className={headerClass}>
        <Pagination />
      </Layout.Footer>
    </Layout>
  )
}