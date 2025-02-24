import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Home',
    url: '/dashboard',
    icon: 'icon-dashboard'
  },
  {
    name: 'connections',
    url: '/icons',
    icon: 'icon-star',
    children: [
     
    ]
  },
  {
    name: 'multi-cluster',
    url: '/multi-cluster',
    icon: 'fa fa-globe',
  },

  {
    name: 'Management',
    url: '/managment',
    icon: 'icon-settings',
    children: [
      {
        name: 'users',
        url: '/managment/users',
        icon: 'icon-user'
      },
      {
        name: 'clusters',
        url: '/managment/clusters',
        icon: 'icon-bell'
      },
      {
        name: 'Settings',
        url: '/managment/settings',
        icon: 'icon-settings'
      }
    ]
  }
];

