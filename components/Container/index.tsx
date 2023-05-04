import { Fragment, useMemo, useState } from "react"
import Header from "./Header"
import Title from "./Title"
import Content from "./Content"
import Subscribe from "./Subscribe"
import Footer from "./Footer"
import { ContainerContext } from './__context'
import { OnSearchProps, ContainerProps } from './__types'
import { PostProps } from './Content/Post/__types'

export default function Container (props: ContainerProps) {
  const [containerProps, setContainerProps] = useState(props)
  const ContextValue = useMemo((): any => ({
    data: containerProps.data,
    setData: (data): any => setContainerProps((n) => ({...n, data}))
  }), [containerProps.data])

  return (
    <ContainerContext.Provider value = {ContextValue}>
      <Header />
      <Title
        subtitle={props.subtitle}
        searchAble={props.searchAble}
        onSearch={props.onSearch}
      />
      <Content
        type={'POSTS'}
        data={containerProps.data}
      />
      <Subscribe />
      <Footer />
    </ContainerContext.Provider>
  )
}

const headerStyles: { top: string, zIndex: number } = {
  top: '0px',
  zIndex: 10
}