function header2json(header) {
  let obj = {}
  for (let line of header.split('\n')) {
    let index = line.indexOf(':')
    if (index == -1)
      continue
    let name = line.substr(0, index)
    let value = line.substr(index + 2)
    obj[name] = value
  }
  return obj
}

`
GET / HTTP/1.1
Host: www.bilibili.com
Connection: keep-alive
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9
Cookie: finger=edc6ecda; buvid3=F30-96EF-4230-8ECB-7FC09F36E36A4714infoc; LIVE_BUVID=AUTO7315346838803035; fts=1534683950
`

export default header2json
