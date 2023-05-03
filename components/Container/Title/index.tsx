import { useState, useRef, useMemo, useContext } from 'react'
import type { TitleProps, InputState } from './__types'
import { ContainerContext } from '../__context'

export default function Title({onSearch, searchAble, subtitle}: TitleProps) {
  const [input, setInput]: InputState = useState('')
  const inputElement = useRef <HTMLInputElement | null> (null)
  const { setData }: {setData: any} = useContext(ContainerContext)

  function onSubmit (event: any): any {
    event.preventDefault()

    switch (input) {
      case '': {
        inputElement?.current?.focus()
        break;
      }
      default: {
        if (searchAble) {
          onSearch({query: input}, setData)
          setInput('')
        }
      }
    }
  }

  const subtitleOrSearch = useMemo((): any => {
    switch (searchAble) {
      case true: return (
        <div
          style={inputMaxWidth}
          className="d-flex align-items-center py-1 justify-content-center border border-muted rounded-lg"
        >
          <input
            value = {input}
            ref = {inputElement}
            placeholder = "Search posts..."
            onChange = {({target: {value}}) => setInput(value)}
            className = "d-block w-100 py-2 px-3 border-0 outline-0 rounded-lg"
          />
          <button
            type="submit"
            style={searchIconBtn}
            className={`bi-${input === '' ? 'search' : 'x-lg'} outline-0 text-muted px-3 bg-transparent border-0`}
          ></button>
        </div>
      )
      case false: return (
        <div className='m-0'>{subtitle}</div>
      )
    }
  }, [searchAble, input, subtitle])

  return (
    <section className = 'container py-4 border-bottom'>
      <div className = 'row'>
        <form className = 'col-12' onSubmit={onSubmit}>
          <h3 className="bold text-capitalize mb-1">all posts</h3>
          {subtitleOrSearch}
        </form>
      </div>
    </section>
  )
}

const inputMaxWidth: { maxWidth: string } = {
  maxWidth: '450px'
}

const searchIconBtn: { fontSize: string } = {
  fontSize: '15px'
}