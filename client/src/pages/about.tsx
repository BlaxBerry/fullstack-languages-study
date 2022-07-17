import React from 'react'
import { Button, Switch } from 'antd'
import { useMutation, useQuery } from '@apollo/client'
import { useThemeSwitcher } from 'react-css-theme-switcher'
import { CREATE_PERSON, GET_PERSONLIST } from '../graphql'

export default function About() {
  const { loading, error, data } = useQuery(GET_PERSONLIST)
  console.log(loading, error, data)

  const [createPerson, { data: createData, loading: createLoading }] =
    useMutation(CREATE_PERSON)
  console.log(createData, createLoading)

  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false)
  const { switcher, currentTheme, themes } = useThemeSwitcher()

  const toggleTheme = (isChecked: boolean) => {
    setIsDarkMode(isChecked)
    switcher({ theme: isChecked ? themes.dark : themes.light })
  }

  return (
    <div>
      <h1>The current theme is: {currentTheme}</h1>
      <Switch checked={isDarkMode} onChange={toggleTheme} />
      <hr />
      <div>
        <Button
          type="primary"
          onClick={() => {
            createPerson({
              variables: {
                input: {
                  name: 'xxxx',
                  age: 222,
                },
              },
            })
          }}
        >
          mutation create person
        </Button>
      </div>
    </div>
  )
}
