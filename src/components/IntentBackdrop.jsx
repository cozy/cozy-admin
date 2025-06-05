import React, { useEffect, useState } from 'react'

import Backdrop from 'cozy-ui/transpiled/react/Backdrop'
import { duration } from 'cozy-ui/transpiled/react/styles'

const IntentBackdrop = () => {
  const [isBackdropOpen, setIsBackdropOpen] = useState(false)

  useEffect(() => {
    const handleMessage = ev => {
      if (ev.data === 'requestBackdropOpen' && !isBackdropOpen) {
        setIsBackdropOpen(true)
      }

      if (ev.data === 'requestBackdropClose' && isBackdropOpen) {
        setIsBackdropOpen(false)
      }
    }

    window.addEventListener('message', handleMessage)

    return () => window.removeEventListener('message', handleMessage)
  }, [isBackdropOpen])

  return (
    <Backdrop
      open={isBackdropOpen}
      style={{ zIndex: 'var(--zIndex-overlay)' }}
      transitionDuration={{
        enter: duration.enteringScreen,
        exit: 0
      }}
    />
  )
}

export default IntentBackdrop
