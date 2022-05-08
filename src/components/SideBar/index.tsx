import React from 'react';
import { ActiveMenuItem, InActiveMenuItem, InvoiceButton, MenuIcon, MenuText, SidebarTitle, SidebarWrapper } from './sidebar.element';
import OverviewIcon from '../../assets/overview.png'
import AllPaymentIcon from '../../assets/Group-2.png'
import ReconcilledPaymentIcon from '../../assets/Group.png'
import UnReconcilledPaymentIcon from '../../assets/wallet cancel.png'
import ManualStatement from '../../assets/dot.png'
import AllOrder from '../../assets/order.png'
import ReconcilledOrder from '../../assets/order1.png'
import PendingOrder from '../../assets/pending-order.png'
import UserIcon from '../../assets/user.png'

const SideBar = () => {
  return (
    <SidebarWrapper>
      <InvoiceButton>GENERATE INVOICE</InvoiceButton>
      <SidebarTitle>Main</SidebarTitle>
      <ActiveMenuItem>
          <MenuIcon src={OverviewIcon} alt=''/>
          <MenuText>Overview</MenuText>
      </ActiveMenuItem>
      <SidebarTitle>Payments</SidebarTitle>
      <InActiveMenuItem>
      <MenuIcon src={AllPaymentIcon} alt=''/>
          <MenuText>All Payments</MenuText>
      </InActiveMenuItem>
      <InActiveMenuItem>
      <MenuIcon src={ReconcilledPaymentIcon} alt=''/>
          <MenuText>Reconcilled Payments</MenuText>
      </InActiveMenuItem>
      <InActiveMenuItem>
      <MenuIcon src={UnReconcilledPaymentIcon} alt=''/>
          <MenuText>Un - Reconcilled Payments</MenuText>
      </InActiveMenuItem>
      <InActiveMenuItem>
      <MenuIcon src={ManualStatement} alt=''/>
          <MenuText>Manual Settlement</MenuText>
      </InActiveMenuItem>
      <SidebarTitle>Order</SidebarTitle>
      <InActiveMenuItem>
      <MenuIcon src={AllOrder} alt=''/>
          <MenuText>All Orders</MenuText>
      </InActiveMenuItem>
      <InActiveMenuItem>
      <MenuIcon src={PendingOrder} alt=''/>
          <MenuText>Pending Orders</MenuText>
      </InActiveMenuItem>
      <InActiveMenuItem>
      <MenuIcon src={ReconcilledOrder} alt=''/>
          <MenuText>Reconcilled Orders</MenuText>
      </InActiveMenuItem>
      <br/>
      <InActiveMenuItem>
      <MenuIcon src={UserIcon} alt=''/>
          <MenuText>Merchant Profile</MenuText>
      </InActiveMenuItem>
      
    </SidebarWrapper>
  );
}

export default SideBar;
