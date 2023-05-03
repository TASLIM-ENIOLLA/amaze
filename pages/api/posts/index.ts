export default async function handler (_, res) {
  const request = await fetch('https://newsapi.org/v2/EVERYTHING/?q=nigeria&sortBy=popularity&apiKey=2ec62d0060e740fb95d4e04f0351cea4&pageSize=10&page=1')
  const result = await request.json()

  res.status(200).json(result)
}