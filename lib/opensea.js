'use strict'
const urllib = require('urllib')

async function getFloorPrice (collection) {
  const URL = `https://api.opensea.io/api/v1/collection/${collection}/stats`

  const result = await urllib.request(URL, { dataType: 'json', timeout: 45 * 1000 })

  return result.data.stats['floor_price']
}

async function retriveCollections (userAddress) {
  const URL = `https://api.opensea.io/api/v1/collections?offset=0&asset_owner=${userAddress}`

  const result = await urllib.request(URL, { dataType: 'json', timeout: 45 * 1000 })

  return result.data.map(({slug}) => slug)
}

module.exports = {
  getFloorPrice,
  retriveCollections
}
