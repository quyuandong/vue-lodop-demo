import qs from 'qs'

export const parseUrl = url => {
  return qs.parse(url.split('?')[1])
}
