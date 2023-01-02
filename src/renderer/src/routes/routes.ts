import { lazy } from 'react';
import { RotesList } from './interface';

let HomePage;
let AboutPage;
let AdminPage;

if (!import.meta.env.SSR) {
  HomePage = lazy(() => import('../views/HomePage' /* webpackChunkName: "home-page" */));
  AboutPage = lazy(() => import('../views/AboutPage' /* webpackChunkName: "about-page" */));
  AdminPage = lazy(() => import('../views/AdminPage' /* webpackChunkName: "admin-page" */));
}

export async function setup() {
  if (import.meta.env.SSR) {
    const transportHomePage = await import('../views/HomePage' /* webpackChunkName: "home-page" */);
    const transportAboutPage = await import(
      '../views/AboutPage' /* webpackChunkName: "about-page" */
    );
    const transportAdminPage = await import(
      '../views/AdminPage' /* webpackChunkName: "admin-page" */
    );

    HomePage = transportHomePage.default;
    AboutPage = transportAboutPage.default;
    AdminPage = transportAdminPage.default;
  }
}

export const routes: RotesList[] = [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: HomePage,
    public: true,
    restricted: false,
    private: false,
    admin: false,
  },
  {
    path: '/about',
    label: 'About',
    exact: true,
    component: AboutPage,
    public: true,
    restricted: false,
    private: false,
    admin: false,
  },
  {
    path: '/admin',
    label: 'Admin',
    exact: true,
    component: AdminPage,
    public: false,
    restricted: false,
    private: false,
    admin: true,
  },
];
