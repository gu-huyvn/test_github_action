import type { IResourceItem } from '@refinedev/core';

const routes: IResourceItem[] = [
  {
    name: 'User Management',
    list: '/users',
  },
  {
    name: 'Organizations',
    list: '/organizations',
  },
  {
    name: 'Product Permissions',
    list: '/product-permissions',
  },
];

export default routes;
