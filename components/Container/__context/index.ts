import { createContext } from 'react'
import { ContainerContextInterface } from '../__interface'

export const ContainerContext = createContext<ContainerContextInterface | undefined>()