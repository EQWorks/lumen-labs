import React from 'react'

import { Layout } from '../src'


export default {
  title: 'Layout',
  component: Layout,
}

export const Normal = () => {
  const headerClass = 'bg-primary-200 text-white text-center h-10'
  const contentClass = 'bg-primary-400 text-white text-center h-40 w-full'
  const siderClass = 'bg-primary-300 text-white text-center w-48'

  return (
    <>
      <p className='text-blue-300 mt-5 mb-1'>Basic:</p>
      <Layout>
        <Layout.Header className={headerClass}>Header</Layout.Header>
        <Layout.Content className={contentClass}>Content</Layout.Content>
        <Layout.Footer className={headerClass}>Footer</Layout.Footer>
      </Layout>

      <p className='text-blue-300 mt-5 mb-1'>Sider Variation 1:</p>
      <Layout>
        <Layout.Header className={headerClass}>Header</Layout.Header>
        <Layout>
          <Layout.Sider className={siderClass}>Sider</Layout.Sider>
          <Layout.Content className={contentClass}>Content</Layout.Content>
        </Layout>
        <Layout.Footer className={headerClass}>Footer</Layout.Footer>
      </Layout>

      <p className='text-blue-300 mt-5 mb-1'>Sider Variation 2:</p>
      <Layout>
        <Layout.Header className={headerClass}>Header</Layout.Header>
        <Layout>
          <Layout.Content className={contentClass}>Content</Layout.Content>
          <Layout.Sider className={siderClass}>Sider</Layout.Sider>
        </Layout>
        <Layout.Footer className={headerClass}>Footer</Layout.Footer>
      </Layout>

      <p className='text-blue-300 mt-5 mb-1'>Sider Variation 3:</p>
      <Layout>
        <Layout.Sider className={siderClass}>Sider</Layout.Sider>
        <Layout>
          <Layout.Header className={headerClass}>Header</Layout.Header>
          <Layout.Content className={contentClass}>Content</Layout.Content>
          <Layout.Footer className={headerClass}>Footer</Layout.Footer>
        </Layout>
      </Layout>

      <p className='text-blue-300 mt-5 mb-1'>Sider Variation 4:</p>
      <Layout>
        <Layout.Header className={headerClass}>Header</Layout.Header>
        <Layout>
          <Layout.Sider className={siderClass}>Sider</Layout.Sider>
          <Layout>
            <Layout.Content className={contentClass}>Content</Layout.Content>
            <Layout.Footer className={headerClass}>Footer</Layout.Footer>
          </Layout>
        </Layout>
      </Layout>

      <p className='text-blue-300 mt-5 mb-1'>Sider Variation 5:</p>
      <Layout>
        <Layout>
          <Layout.Sider className={siderClass}>Sider</Layout.Sider>
          <Layout>
            <Layout.Header className={headerClass}>Header</Layout.Header>
            <Layout.Content className={contentClass}>Content</Layout.Content>
          </Layout>
        </Layout>
        <Layout.Footer className={headerClass}>Footer</Layout.Footer>
      </Layout>
    </>
  )
}
