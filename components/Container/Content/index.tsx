import { useMemo } from 'react'
import Post from './Post'
import Banner from './Banner'
import {  } from './__types'

const dataListTypes: readonly string [] = ['POSTS', 'TAGS']

export default function Content ({type, data}: ContentProp) {
  const content = useMemo <any> (() => {
    const { articles } = data

    switch (type) {
      case 'POSTS': {
        if (articles === undefined) return (
          <Banner type = 'undefined'/>
        )
        else if (articles === null) return (
          <Banner type = 'null'/>
        )
        else if (articles.length === 0) return (
          <Banner type = 'empty'/>
        )
        else return Array.isArray(articles) && articles.map((article, index) => <Post {...article} key={index} />)
      }
      case 'TAGS':  return <h1>Tags</h1>
    }
  }, [data, type])

  return (
    <section className='container py-5'>
      {dataListTypes.includes(type) && data?.articles?.length > 0 && (
        <div className="row">
          <div className="col-12 pb-5">
            <h5 className="text-chocolate bold">Showing {data?.articles?.length || 0} of {new Intl.NumberFormat().format(data.totalResults || 0)} posts</h5>
          </div>
        </div>
      )}
      <div className="row">
        {content}
      </div>
    </section>
  )
}