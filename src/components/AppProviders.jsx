import React from 'react'

import { BarProvider } from 'cozy-bar'
import { CozyProvider } from 'cozy-client'
import { WebviewIntentProvider } from 'cozy-intent'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import CozyTheme from 'cozy-ui/transpiled/react/providers/CozyTheme'
import { I18n } from 'cozy-ui/transpiled/react/providers/I18n'

const AppProviders = ({ client, lang, polyglot, children }) => {
  return (
    <WebviewIntentProvider>
      <CozyProvider client={client}>
        <BarProvider>
          <I18n lang={lang} polyglot={polyglot}>
            <CozyTheme>
              <BreakpointsProvider>{children}</BreakpointsProvider>
            </CozyTheme>
          </I18n>
        </BarProvider>
      </CozyProvider>
    </WebviewIntentProvider>
  )
}

export default AppProviders
