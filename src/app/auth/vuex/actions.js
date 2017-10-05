import http from '@/http'
import * as mutations from './mutations_types'

export const attemptLogin = (context, payload) => {
  http.get('https://uinames.com/api/?ext')
      .then(response => response.data)
      .then(data => {
        context.commit(mutations.setToken, data.email)
        context.commit(mutations.setUser, data)
      })
}
