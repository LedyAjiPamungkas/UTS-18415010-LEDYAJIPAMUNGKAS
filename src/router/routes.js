
const routes = [
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'mod', component: () => import('pages/admin/Home/mod.vue') },
      { path: 'rda', component: () => import('pages/admin/Home/rda.vue') },
      { path: 'rdta', component: () => import('pages/admin/Home/rdta.vue') },
      { path: 'inputmod', component: () => import('pages/admin/Home/inputmod.vue') },
      { path: 'inputrda', component: () => import('pages/admin/Home/inputrda.vue') },
      { path: 'inputrdta', component: () => import('pages/admin/Home/inputrdta.vue') },
      { path: 'datatransaksi', component: () => import('pages/admin/Transaksi/DataTransaksi.vue') }
    ]
  },
  {
    path: '/pembeli',
    component: () => import('layouts/PembeliLayout.vue'),
    children: [
      { path: 'mod', component: () => import('pages/pembeli/DataVapor/modvapor.vue') },
      { path: 'rda', component: () => import('pages/pembeli/DataVapor/rdavapor.vue') },
      { path: 'rdta', component: () => import('pages/pembeli/DataVapor/rdtavapor.vue') },
      { path: 'transaksi', component: () => import('pages/pembeli/DataTransaksi/datatransaksi.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: 'auth/login', component: () => import('pages/users/Login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/users/Registrasi.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
