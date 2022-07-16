import { useLayoutEffect } from 'react'
import { useRoutes, useLocation, Navigate } from 'react-router-dom'
// router view pages
import Home from '../pages/home'
import About from '../pages/about'
import NotFound from '../pages/404'
import Mypage from '../pages/mypage'
import Words from '../pages/words'
import WordDetail from '../pages/words/[ID]'

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
    {
      path: '/mypage',
      children: [{ index: true, element: <Mypage /> }],
    },
    {
      path: '/words',
      children: [
        { index: true, element: <Words /> },
        { path: ':ID', element: <WordDetail /> },
      ],
    },
    { path: '/', element: <Navigate to={'/home'} /> },
    { path: '*', element: <NotFound /> },
  ])

  return <>{routesElements}</>
}
