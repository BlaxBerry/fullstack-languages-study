import { useLayoutEffect } from 'react'
import { useRoutes, useLocation, Navigate } from 'react-router-dom'
// router view pages
import Home from '../pages/home'
import About from '../pages/about'
import NotFound from '../pages/404'
import Mypage from '../pages/mypage'
import WordsList from '../pages/words/list'
import WordCreate from '../pages/words/create'
import WordDetail from '../pages/words/detail'
import Statistics from '../pages/statistics'

export default function RouteView() {
  const location = useLocation()

  // Scroll To Top On Route Change
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])

  // 路由匹配规则
  const routesElements = useRoutes([
    { path: '/home', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/statistics', element: <Statistics /> },
    {
      path: '/mypage',
      children: [{ index: true, element: <Mypage /> }],
    },
    {
      path: '/words',
      children: [
        { index: true, element: <Navigate to={'/words/list'} replace /> },
        { path: 'list', element: <WordsList /> },
        { path: 'create', element: <WordCreate /> },
        { path: 'detail', element: <WordDetail /> },
      ],
    },
    { path: '/', element: <Navigate to={'/home'} replace /> },
    { path: '*', element: <NotFound /> },
  ])

  return <>{routesElements}</>
}
