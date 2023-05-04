import { useEffect } from 'react'
import Container from '../components/Container'
import { ContainerProps } from '../components/__types'
import { NextPage, GetServerSideProps } from 'next'
import { SERVER } from '../config'

export default function Index ({data}: ContainerProps): NextPage {
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

export async function getServerSideProps (): GetServerSideProps {
  // const req = await fetch(`${SERVER}/api/posts`)
  // const res = await req.json()

  return {
    props: {
      data: {
        articles: [],
        totalResults: 0
      }
    }
  }
}