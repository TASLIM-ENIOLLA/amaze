import { useEffect } from 'react'
import Container from '../components/Container'
import { ContainerProps } from '../components/__types'

type ContainerProps = {
  data: []
}

export default function Index ({data}: ContainerProps) {
  return (
    <Container
      data={data}
      type='POSTS'
      searchAble={true}
      localeSearch={true}
      onSearch={(queryParams, updateData) => {
        console.log(queryParams)
        updateData({articles: null, totalResults: 0})
      }}
      subtitle='Lorem ipsum dolor sit amet consectuer'
    />
  )
}

export async function getServerSideProps () {
  const req = await fetch('http://192.168.1.116:3000/api/posts')
  const res = await req.json()

  return {
    props: {
      data: res
    }
  }
}