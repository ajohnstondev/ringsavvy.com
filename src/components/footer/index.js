import React from 'react';
import SupportCallout from './supportCallout';
import NavigationCol from './navigationCol';
import {
  ServiceMenu,
  AboutMenu,
  ResourcesMenu,
  IndustriesMenu,
  SupportMenu,
} from '../menu';

import { Wrapper } from '../wrapper';
import { Footer, FooterNavigation } from './style';

export default () => (
  <Footer>
    <Wrapper>
      <SupportCallout />
      <FooterNavigation>
        <NavigationCol>
          <ServiceMenu />
        </NavigationCol>
        <NavigationCol>
          <AboutMenu />
        </NavigationCol>
        <NavigationCol>
          <ResourcesMenu />
        </NavigationCol>
        <NavigationCol>
          <IndustriesMenu />
        </NavigationCol>
        <NavigationCol>
          <SupportMenu />
        </NavigationCol>
      </FooterNavigation>
      <p>©&nbsp;2020 Ring Savvy, Inc.</p>
    </Wrapper>
  </Footer>
);
