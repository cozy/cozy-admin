import React from 'react'
import { Outlet } from 'react-router-dom'
import { useMatch, useNavigate } from 'react-router-dom'

import { BarComponent, BarCenter, BarLeft } from 'cozy-bar'
import { useClient } from 'cozy-client'
import AppTitle from 'cozy-ui/transpiled/react/AppTitle'
import BarTitle from 'cozy-ui/transpiled/react/BarTitle'
import Icon from 'cozy-ui/transpiled/react/Icon'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import PreviousIcon from 'cozy-ui/transpiled/react/Icons/Previous'
import { Layout, Main, Content } from 'cozy-ui/transpiled/react/Layout'
import Alerter from 'cozy-ui/transpiled/react/deprecated/Alerter'
import useBreakpoints from 'cozy-ui/transpiled/react/providers/Breakpoints'
import { useI18n } from 'cozy-ui/transpiled/react/providers/I18n'

import Sidebar from '@/components/Sidebar'

const AppLayout = () => {
  const { t } = useI18n()
  const { isDesktop } = useBreakpoints() // as the Sidebar breakpoints is desktop, we use the same here
  const client = useClient()
  const navigate = useNavigate()
  const isRoot = useMatch('/menu')

  return (
    <Layout monoColumn={!isDesktop}>
      <BarComponent searchOptions={{ enabled: false }} />
      {isDesktop ? (
        <BarLeft>
          <AppTitle slug="home" />
        </BarLeft>
      ) : (
        <>
          {!isRoot && (
            <BarLeft>
              <IconButton
                onClick={() => navigate('/menu')}
                title={t('common.previous')}
              >
                <Icon color="secondary" icon={PreviousIcon} />
              </IconButton>
            </BarLeft>
          )}
          <BarCenter>
            <BarTitle>{client.appMetadata.slug}</BarTitle>
          </BarCenter>
        </>
      )}
      {isDesktop && <Sidebar />}
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
