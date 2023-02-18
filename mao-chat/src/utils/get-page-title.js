import defaultSettings from '@/settings'

const title = defaultSettings.title || '大袤宏图'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
