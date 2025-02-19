import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import EventDetailView from '@/views/event/DetailView.vue'
import EventEditView from '@/views/event/EditView.vue'
import EventRegisterView from '@/views/event/RegisterView.vue'
import EventLayoutView from '@/views/event/LayoutView.vue'
import StudentView from '@/views/StudentView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView,
      props: (route) => ({ 
        page: parseInt(route.query.page?.toString() || '1'),
        pageSize: parseInt(route.query.pageSize?.toString() || '2')
      })
    },{
      path: '/event/:id',
      name: 'event-layout-view',
      component: EventLayoutView,
      props: true,
      children: [
        {
          path: '/event/:id',
          name: 'event-detail-view',
          component: EventDetailView,
          props: true
        },
        {
          path: '/event/:id',
          name: 'event-edit-view',
          component: EventEditView,
          props: true
        },
        {
          path: '/event/:id',
          name: 'event-register-view',
          component: EventRegisterView,
          props: true
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/404/:resource',
      name: '404-resource-view',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/Student',
      name: 'Student',
      component: StudentView
    },
    {
      path: '/network-error',
      name: 'network-error-view',
      component: NetworkErrorView
    }
  ]
})

export default router
