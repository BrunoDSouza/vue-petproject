import { routes as dashboard } from '@/modules/dashboard';
import { routes as auth } from '@/modules/auth';

const home = [
  { name: 'home',
    path: '/',
    redirect: '/dashboard',
  },
];

export default [...home, ...dashboard, ...auth];
