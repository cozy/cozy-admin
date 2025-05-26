import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'

import { useBreakpoints } from 'cozy-ui/transpiled/react/providers/Breakpoints'

import AppLayout from '@/components/AppLayout'
import Contacts from '@/components/Views/Contacts'
import Menu from '@/components/Views/Menu'
import Welcome from '@/components/Views/Welcome'

const AppRouter = () => {
  const { isMobile } = useBreakpoints()

  return (
    <HashRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {isMobile && <Route path="/menu" element={<Menu />} />}
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route
            path="*"
            element={<Navigate replace to={isMobile ? '/menu' : '/welcome'} />}
          />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default AppRouter
