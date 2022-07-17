import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import apolloClient from './apollo/client'
import App from './App'
import { ThemeSwitcherProvider } from 'react-css-theme-switcher'
import 'antd/dist/antd.css'
import './styles/index.scss'

// 样式文件来自上线后 docs/theme, 开发时只需修改 public/theme 即可
const themes = {
  dark: `${import.meta.env.BASE_URL}theme/dark-theme.css`,
  light: `${import.meta.env.BASE_URL}theme/light-theme.css`,
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ApolloProvider client={apolloClient}>
    <HashRouter>
      <ThemeSwitcherProvider defaultTheme="light" themeMap={themes}>
        <App />
      </ThemeSwitcherProvider>
    </HashRouter>
  </ApolloProvider>
  // </React.StrictMode>
)
