import { ChatRequest } from '@/utils/request'

// 单据查询接口
export function chatGPT(msg) {
  return ChatRequest({
    url: '/api/chat/text',
    method: 'get',
    params: { 'msg': msg }
  })
}
