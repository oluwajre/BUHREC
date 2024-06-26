import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: icon('ic_analytics'),
  },
  // {
  //   title: 'Payments',
  //   path: '/payments',
  //   icon: icon('ic_user'),
  // },
  {
    title: 'Upload Research',
    path: '/makepayment',
    icon: icon('ic_user'),
  },
  {
    title: 'My Researches',
    path: '/resarches',
    icon: icon('ic_blog'),
  },

  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
