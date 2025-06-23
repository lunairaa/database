export default function (app) {
  app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from raw route!.....' })
  })
}
