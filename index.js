const URL_API = 'https://api.sendgrid.com/v3/mail/send';

console.log('inicio de JavaScript');

fetch(URL_API, {
  method: 'POST',
  body: {
    "personalizations": [{ "to": [{ "email": "dafcamachoc@gmail.com" }] }],
    "from": { "email": "khasfklsdgkk@gmail.com" },
    "subject": "Asunto",
    "content": [{ "type": "text/plain", "value": "texto" }]
  },
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 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',
  }
})
  .then((response) => {
    console.log('mensaje enviado')
    console.log(response)
  })
  .catch((errorr) => {
    console.log('Error al enviar el mensaje')
    console.log(errorr)
  })