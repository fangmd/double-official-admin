import { CookieUtils } from '@/utils'

// 自定义请求头
export default () => {
  return {
    mclient: 'web',
    Lang: 'zh-CN',
    Authorization: `Bearer ${CookieUtils.getToken()}`,
  }
}
