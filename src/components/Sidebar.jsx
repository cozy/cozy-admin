import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'

import BenefitIcon from 'cozy-ui/transpiled/react/Icons/Benefit'
import Cloud2Icon from 'cozy-ui/transpiled/react/Icons/Cloud2'
import CompanyIcon from 'cozy-ui/transpiled/react/Icons/Company'
import DiscussIcon from 'cozy-ui/transpiled/react/Icons/Discuss'
import EmailIcon from 'cozy-ui/transpiled/react/Icons/Email'
import EmailOpenIcon from 'cozy-ui/transpiled/react/Icons/EmailOpen'
import HelpOutlinedIcon from 'cozy-ui/transpiled/react/Icons/HelpOutlined'
import Key2Icon from 'cozy-ui/transpiled/react/Icons/Key2'
import LogoutIcon from 'cozy-ui/transpiled/react/Icons/Logout'
import OpenwithIcon from 'cozy-ui/transpiled/react/Icons/Openwith'
import PeopleIcon from 'cozy-ui/transpiled/react/Icons/People'
import PeoplesIcon from 'cozy-ui/transpiled/react/Icons/Peoples'
import SecurityIcon from 'cozy-ui/transpiled/react/Icons/Security'
import ListItem from 'cozy-ui/transpiled/react/ListItem'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import Nav, {
  NavItem,
  NavIcon,
  NavText,
  genNavLinkForV6
} from 'cozy-ui/transpiled/react/Nav'
import UISidebar from 'cozy-ui/transpiled/react/Sidebar'
import { useI18n } from 'cozy-ui/transpiled/react/providers/I18n'

const NavLink = genNavLinkForV6(RouterLink)

const Sidebar = () => {
  const { t } = useI18n()

  return (
    <UISidebar style={{ width: 360 }}>
      <Nav>
        <ListItem dense>
          <ListItemText className="u-uppercase" primary={t('nav.global')} />
        </ListItem>
        <NavItem>
          <NavLink to="/company">
            <NavIcon icon={CompanyIcon} />
            <NavText>{t('nav.company')}</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/users">
            <NavIcon icon={PeopleIcon} />
            <NavText>{t('nav.users')}</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/teams">
            <NavIcon icon={PeoplesIcon} />
            <NavText>{t('nav.teams')}</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/plans">
            <NavIcon icon={BenefitIcon} />
            <NavText>{t('nav.plans')}</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/security">
            <NavIcon icon={SecurityIcon} />
            <NavText>{t('nav.security')}</NavText>
          </NavLink>
        </NavItem>
        <ListItem dense>
          <ListItemText
            className="u-uppercase"
            primary={t('nav.configuration')}
          />
        </ListItem>
        <NavItem>
          <NavLink to="/chat">
            <NavIcon icon={DiscussIcon} />
            <NavText>{t('nav.chat')}</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/mail">
            <NavIcon icon={EmailOpenIcon} />
            <NavText>{t('nav.mail')}</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/drive">
            <NavIcon icon={Cloud2Icon} />
            <NavText>{t('nav.drive')}</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/passwords">
            <NavIcon icon={Key2Icon} />
            <NavText>{t('nav.passwords')}</NavText>
          </NavLink>
        </NavItem>
        <ListItem dense>
          <ListItemText className="u-uppercase" primary={t('nav.others')} />
        </ListItem>
        <NavItem>
          <NavLink to="/manuel" target="_blank">
            <NavIcon icon={HelpOutlinedIcon} />
            <NavText className="u-flex-grow-1">{t('nav.manuel')}</NavText>
            <NavIcon icon={OpenwithIcon} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">
            <NavIcon icon={EmailIcon} />
            <NavText>{t('nav.contact')}</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/logout">
            <NavIcon icon={LogoutIcon} />
            <NavText>{t('nav.logout')}</NavText>
          </NavLink>
        </NavItem>
      </Nav>
    </UISidebar>
  )
}

export default Sidebar
