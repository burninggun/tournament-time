import * as express  from 'express';
import { Request, Response } from 'express'

declare var process: {
    env: {
        PORT: string
    }
}

const PORT:Number = parseInt(process.env.PORT ) || 5000

const app = express();


app.get('/test', (req: Request, res:Response) => {
    res.send('got test')
} )

app.listen(PORT, () => {
    console.log('Server is listening to:', PORT)
})