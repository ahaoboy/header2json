# header2json
### 浏览器请求header转json
[网址](https://ahaoboy.github.io/header2json/index)
### 效果
```
GET / HTTP/1.1
Host: localhost:8080
Connection: keep-alive
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
Referer: http://localhost:8080/
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9
Cookie: Webstorm-8eb3a383=c5745b14-1c20-4501-a73a-0d72fc39b691; Pycharm-1137782=2b22ae23-7d26-44ba-a572-ea295da39b7c; Webstorm-b33abae4=c5745b14-1c20-4501-a73a-0d72fc39b691; _ga=GA1.1.1966415010.1557983983
If-None-Match: W/"577-HjPkrHPHpkt84l8ySsLk6GgREfg"
```

```
{
    "Host": "localhost:8080",
    "Connection": "keep-alive",
    "Cache-Control": "max-age=0",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
    "Referer": "http://localhost:8080/",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cookie": "Webstorm-8eb3a383=c5745b14-1c20-4501-a73a-0d72fc39b691; Pycharm-1137782=2b22ae23-7d26-44ba-a572-ea295da39b7c; Webstorm-b33abae4=c5745b14-1c20-4501-a73a-0d72fc39b691; _ga=GA1.1.1966415010.1557983983",
    "If-None-Match": "W/\"577-HjPkrHPHpkt84l8ySsLk6GgREfg\""
}
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
