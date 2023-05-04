const dev = process.env.NODE_ENV !== 'production'

export const SERVER = {
	FRONTEND: {
		URL: (
			(dev)
			? 'http://localhost:3000/'
			: 'http://amazeministries.vercel.app/'
		)
	}
}