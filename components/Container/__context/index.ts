import { createContext } from 'react'
import { ContainerContextInterface } from '../__interface'

const defaultContextValue = {
	data: undefined,
	setData: () => undefined
}

export const ContainerContext = createContext <ContainerContextInterface> (defaultContextValue)