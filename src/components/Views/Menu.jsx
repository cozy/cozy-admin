import React from 'react'
import { NavLink } from 'react-router-dom'

import Divider from 'cozy-ui/transpiled/react/Divider'
import Icon from 'cozy-ui/transpiled/react/Icon'
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
import PeoplesIcon from 'cozy-ui/transpiled/react/Icons/Peoples'
import RightIcon from 'cozy-ui/transpiled/react/Icons/Right'
import SecurityIcon from 'cozy-ui/transpiled/react/Icons/Security'
import List from 'cozy-ui/transpiled/react/List'
import ListItem from 'cozy-ui/transpiled/react/ListItem'
import ListItemIcon from 'cozy-ui/transpiled/react/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import ListSubheader from 'cozy-ui/transpiled/react/ListSubheader'
import { useI18n } from 'cozy-ui/transpiled/react/providers/I18n'

const Menu = () => {
  const { t } = useI18n()

  return (
    <div className="u-p-1">
      <List
        subheader={
          <ListSubheader className="u-uppercase">
            {t('nav.global')}
          </ListSubheader>
        }
      >
        <ListItem button component={NavLink} to="/company">
          <ListItemIcon>
            <Icon icon={CompanyIcon} />
          </ListItemIcon>
          <ListItemText primary={t('nav.company')} />
          <ListItemIcon>
            <Icon icon={RightIcon} />
          </ListItemIcon>
        </ListItem>
        <Divider variant="inset" />
        <ListItem button component={NavLink} to="/users">
          <ListItemIcon>
            <Icon icon={PeoplesIcon} />
          </ListItemIcon>
          <ListItemText primary={t('nav.users')} />
          <ListItemIcon>
            <Icon icon={RightIcon} />
          </ListItemIcon>
        </ListItem>
        <Divider variant="inset" />
        <ListItem button component={NavLink} to="/plans">
          <ListItemIcon>
            <Icon icon={BenefitIcon} />
          </ListItemIcon>
          <ListItemText primary={t('nav.plans')} />
          <ListItemIcon>
            <Icon icon={RightIcon} />
          </ListItemIcon>
        </ListItem>
        <Divider variant="inset" />
        <ListItem button component={NavLink} to="/security">
          <ListItemIcon>
            <Icon icon={SecurityIcon} />
          </ListItemIcon>
          <ListItemText primary={t('nav.security')} />
          <ListItemIcon>
            <Icon icon={RightIcon} />
          </ListItemIcon>
        </ListItem>
      </List>

      <List
        subheader={
          <ListSubheader className="u-uppercase">
            {t('nav.configuration')}
          </ListSubheader>
        }
      >
        <ListItem button component={NavLink} to="/chat">
          <ListItemIcon>
            <Icon icon={DiscussIcon} />
          </ListItemIcon>
          <ListItemText primary={t('nav.chat')} />
          <ListItemIcon>
            <Icon icon={RightIcon} />
          </ListItemIcon>
        </ListItem>
        <Divider variant="inset" />
        <ListItem button component={NavLink} to="/mail">
          <ListItemIcon>
            <Icon icon={EmailOpenIcon} />
          </ListItemIcon>
          <ListItemText primary={t('nav.mail')} />
          <ListItemIcon>
            <Icon icon={RightIcon} />
          </ListItemIcon>
        </ListItem>
        <Divider variant="inset" />
        <ListItem button component={NavLink} to="/drive">
          <ListItemIcon>
            <Icon icon={Cloud2Icon} />
          </ListItemIcon>
          <ListItemText primary={t('nav.drive')} />
          <ListItemIcon>
            <Icon icon={RightIcon} />
          </ListItemIcon>
        </ListItem>
        <Divider variant="inset" />
        <ListItem button component={NavLink} to="/passwords">
          <ListItemIcon>
            <Icon icon={Key2Icon} />
          </ListItemIcon>
          <ListItemText primary={t('nav.passwords')} />
          <ListItemIcon>
            <Icon icon={RightIcon} />
          </ListItemIcon>
        </ListItem>
      </List>

      <List
        subheader={
          <ListSubheader className="u-uppercase">
            {t('nav.others')}
          </ListSubheader>
        }
      >
        <ListItem button component={NavLink} to="/manuel" target="_blank">
          <ListItemIcon>
            <Icon icon={HelpOutlinedIcon} />
          </ListItemIcon>
          <ListItemText className="u-flex-grow-1" primary={t('nav.manuel')} />
          <ListItemIcon>
            <Icon icon={OpenwithIcon} />
          </ListItemIcon>
        </ListItem>
        <Divider variant="inset" />
        <ListItem button component={NavLink} to="/contact">
          <ListItemIcon>
            <Icon icon={EmailIcon} />
          </ListItemIcon>
          <ListItemText primary={t('nav.contact')} />
          <ListItemIcon>
            <Icon icon={RightIcon} />
          </ListItemIcon>
        </ListItem>
        <Divider variant="inset" />
        <ListItem button component={NavLink} to="/logout">
          <ListItemIcon>
            <Icon icon={LogoutIcon} />
          </ListItemIcon>
          <ListItemText primary={t('nav.logout')} />
          <ListItemIcon>
            <Icon icon={RightIcon} />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  )
}

export default Menu
