#!/usr/bin/node

import fetch from 'node-fetch'

const url = 'https://spacex-production.up.railway.app/'
const query = `
query Query {
  ships {
    name
  }
}
`

fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
