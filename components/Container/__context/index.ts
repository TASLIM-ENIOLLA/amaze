import { createContext } from 'react'
import { ContainerContextInterface } from '../__interface'

const defaultContextValue = {
	data: [],
	setData: () => undefined
}

export const ContainerContext = createContext <ContainerContextInterface> (defaultContextValue)