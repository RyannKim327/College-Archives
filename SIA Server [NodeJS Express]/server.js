const express = require(`express`)
const app = express()

const PORT = 3000

app.get(`/`, (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <style>
                    body{
                        display: flex;
                        flex-direction: column;
                        width: 100dvw;
                        height: 100dvh;
                        align-items: center;
                        justify-content: center;
                    }
                    h1{
                        color: #f00;
                    }
                    div{
                        display: flex;
                        flex-direction: column;
                        width: 50%;
                        box-shadow: 3px 3px 8px #aaa;
                        align-items: center;
                        border-radius: 3px;
                    }
                </style>
            </head>
            <body>
                <div>
                    <h1>Server under maintenance</h1>
                    <p>Wag makulit, inaayos pa e</p>
                </div>
                <p style="font-size: 3px;">miss na kita, uwi ka na fleece</p>
            </body>
        </html>
        `)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
