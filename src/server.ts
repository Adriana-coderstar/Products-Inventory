// import 'dotenv/config'
import app from './app'

// const PORT = process.env.PORT
const PORT = 3001

app.listen(PORT,async () => { console.log(`Server running on port ${PORT}`) })
