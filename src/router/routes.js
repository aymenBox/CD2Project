
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  //add AdministrationPage here
  {
    path: '/administration',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdministrationPage.vue') }
    ]
  },
  //add CalendrierPage and MapPage and NouvellesPage and PublicitePage and SuggestionsPage here
  {
    path: '/calendrier',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CalendrierPage.vue') }
    ]
  },
  {
    path: '/map',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MapPage.vue') }
    ]
  },
  {
    path: '/nouvelles', 
    component: () => import('layouts/MainLayout.vue'),  
    children: [
      { path: '', component: () => import('pages/NouvellesPage.vue') }
    ]
  },
  {
    path: '/publicite',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PublicitePage.vue') }
    ]
  },
  {
    path: '/suggestions',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SuggestionsPage.vue') }
    ]
  },
  

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
