export const getFoodEntries = async (query: string) => {
  const urlParams = new URLSearchParams({
    query: query,
    self: 'false',
    branded: 'true',
    branded_food_name_only: 'false',
    common: 'true',
    common_general: 'true',
    common_grocery: 'true',
    common_restaurant: 'true',
    detailed: 'false',
    claims: 'false',
    taxonomy: 'false',
  })

  const response = await fetch(
    'https://trackapi.nutritionix.com/v2/search/instant?' + urlParams,
    {
      headers: {
        'x-app-id': process.env.REDWOOD_ENV_NUTRITIONX_API_APP_ID,
        'x-app-key': process.env.REDWOOD_ENV_NUTRITIONX_API_APP_KEY,
      },
    }
  )
  const data = await response.json()

  return data.branded.concat(data.common)
}
