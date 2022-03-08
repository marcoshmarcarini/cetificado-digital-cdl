export const GTM_ID = 'GTM-NW29PBT'

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}


