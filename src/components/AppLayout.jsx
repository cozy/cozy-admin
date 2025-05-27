import React from 'react'
import { Outlet } from 'react-router-dom'

import { BarComponent, BarCenter, BarLeft } from 'cozy-bar'
import { useClient } from 'cozy-client'
import AppTitle from 'cozy-ui/transpiled/react/AppTitle'
import BarTitle from 'cozy-ui/transpiled/react/BarTitle'
import { Layout, Main, Content } from 'cozy-ui/transpiled/react/Layout'
import Alerter from 'cozy-ui/transpiled/react/deprecated/Alerter'
import useBreakpoints from 'cozy-ui/transpiled/react/providers/Breakpoints'
import { useI18n } from 'cozy-ui/transpiled/react/providers/I18n'

import Sidebar from '@/components/Sidebar'

const AppLayout = () => {
  const { t } = useI18n()
  const { isMobile } = useBreakpoints()
  const client = useClient()

  return (
    <Layout>
      <BarComponent searchOptions={{ enabled: false }} />
      {isMobile ? (
        <BarCenter>
          <BarTitle>{client.appMetadata.slug}</BarTitle>
        </BarCenter>
      ) : (
        <BarLeft>
          <AppTitle slug="home" />
        </BarLeft>
      )}
      {!isMobile && <Sidebar />}
      <Main>
        <Content>
          <Outlet />
        </Content>
      </Main>
      <Alerter t={t} />
    </Layout>
  )
}

export default AppLayout
