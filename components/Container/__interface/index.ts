import { PostProps } from '../Content/Post/__types'

export interface ContainerContextInterface {
	data: PostProps [];
	setData: () => any
}