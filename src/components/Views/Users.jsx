import React from 'react'

import IntentIframe from 'cozy-ui/transpiled/react/IntentIframe'
import { useBreakpoints } from 'cozy-ui/transpiled/react/providers/Breakpoints'

import { CONTACTS_DOCTYPE } from '@/doctypes'

const Users = () => {
  const { isMobile } = useBreakpoints()

  return (
    <IntentIframe
      action="LIST"
      type={CONTACTS_DOCTYPE}
      iframeProps={{
        wrapperProps: {
          style: { height: `calc(100vh - ${isMobile ? '48px' : '80px'}` }
        }
      }}
      onCancel={() => {}}
      onError={() => {}}
      onTerminate={() => {}}
    />
  )
}

export default Users
