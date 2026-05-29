import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from './pages/index';
import ProdNotFoundPage from './pages/_404';

const NotFoundPage = ProdNotFoundPage;

const MenuPage = lazy(() => import('./pages/menu'));
const OrderPage = lazy(() => import('./pages/order'));
const GalleryPage = lazy(() => import('./pages/gallery'));
const AboutPage = lazy(() => import('./pages/about'));
const ContactPage = lazy(() => import('./pages/contact'));

export const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/menu', element: <MenuPage /> },
  { path: '/order', element: <OrderPage /> },
  { path: '/gallery', element: <GalleryPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export type Path = '/' | '/menu' | '/order' | '/gallery' | '/about' | '/contact';
export type Params = Record<string, string | undefined>;
