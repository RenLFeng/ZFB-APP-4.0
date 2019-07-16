import {Toast} from 'vant';
const baseURL='http://test-app.sanzhongzhixiang.com';
// const  baseURL='http://192.168.0.24:80';
export const get = ({ url, data }) =>
  new Promise((resolve, reject) => {
    const prefix = process.env.REACT_APP_HOST || baseURL
    const finalURL = [[prefix, url].join('/'), querystring.stringify(data)].join('?')
    console.log(finalURL)
    let client = new XMLHttpRequest()
    client.open('GET', finalURL)
    const token = localStorage.getItem('token')
    if (process.env.NODE_ENV !== 'production') {
      client.setRequestHeader('token', token)
    }
    client.send()
    client.onreadystatechange = () => {
      if (client.readyState !== 4) {
        return
      }
      if (client.status !== 200) {
        return reject(Toast('网络异常'))
      }
      if (!client.responseText) {
        return reject(Toast('网络异常'))
      }
      const { data, retMsg, retCode } = JSON.parse(client.responseText)
      if (retCode === 'E0001') {
        return reject(Toast(retMsg))
      }
      if (retCode === '0002') {
        console.log('retCode is ', retCode)
        window.getLoadData.outLogin()
      }
      if (retCode === '0000' || retCode === '0001') {
        resolve({
          retMsg,
          data,
          retCode
          
        })
      }
    }
  })

export const post = ({ url, data }) =>
  new Promise((resolve, reject) => {
    data = data || {}
    let prefix = process.env.REACT_APP_HOST || baseURL
    url = [prefix, url].join('/')
    let client = new XMLHttpRequest()
    client.open('POST', url, true)
    client.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

    const token = localStorage.getItem('token');
    
    console.log('token==='+token)
    console.log('navigator==='+JSON.stringify(navigator))
    console.log('navigator.userAgent===='+navigator.userAgent);
    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV !== 'production') {
      client.setRequestHeader('token', token)
    }

    client.send(
      Object.keys(data)
        .map(key => `${key}=${data[key]}`)
        .join('&')
    )
    client.onreadystatechange = () => {
      if (client.readyState === 4) {
        if (client.status !== 200) {
          return reject(Toast('网络异常！'))
        }
        if (!client.responseText) {
          return reject(Toast('网络异常'))
        }
        const { data, retMsg, retCode } = JSON.parse(client.responseText)
        if (retCode === '0001') {
          return reject(Toast(retMsg))
        }
        if (retCode === '0002') {
          console.log('retCode is', retCode)
          return reject(Toast(retMsg))
        }

        resolve({
          retMsg,
          data,
          retCode
        })
      }
    }
  })

export const postWithJson = ({ url, data }) =>
  new Promise((resolve, reject) => {
    data = data || {}
    let prefix = process.env.REACT_APP_HOST || baseURL
    url = [prefix, url].join('')
    let client = new XMLHttpRequest()
    client.open('POST', url, true)
    client.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    // client.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    const token = localStorage.getItem('token')
    if (process.env.NODE_ENV !== 'production') {
      client.setRequestHeader('token', token)
    }
    console.log('data: ', data)
    client.send(JSON.stringify(data))

    client.onreadystatechange = () => {
      if (client.readyState === 4) {
        if (client.status !== 200) {
          return reject(Toast('网络异常！'))
        }
        if (!client.responseText) {
          return reject(Toast('网络异常'))
        }
        const { data, retMsg, retCode } = JSON.parse(client.responseText)
        if (retCode === '0001') {
          return reject(Toast(retMsg))
        }
        if (retCode === '0002') {
          console.log('retCode is', retCode)
          return window.getLoadData.outLogin()
        }
        resolve({
          retMsg,
          data,
          retCode
        })
      }
    }
  })
