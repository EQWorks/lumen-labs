import React from 'react'

import { Layout } from '../src'


export default {
  title: 'Layout',
  component: Layout,
}

const { Header, Sider, Footer, Content } = Layout
export const LayoutBase = () => {
  return (
    <Layout>
      <Sider className='border border-red-300'>Sider Outside</Sider>
      <Layout>
        <Header className='border border-red-300'>Header</Header>
        <Layout>
          <Sider className='border border-primary-300 w-32'>Sider</Sider>
          <Layout>
            <Content className='border border-red-300 h-80 w-full'>Content</Content>
            <Footer className='border border-red-300'>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  )
}
