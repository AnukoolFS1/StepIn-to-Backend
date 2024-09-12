const myUrl = new URL('http:9090//anywebsite.com/index.html?name=anukool&age=25&profession=webdeveloper');

console.log(myUrl); // ↓
// URL {
//     href: 'http://0.0.35.130//anywebsite.com/index.html?name=anukool&age=25&profession=webdeveloper',
//     origin: 'http://0.0.35.130',
//     protocol: 'http:',
//     username: '',
//     password: '',
//     host: '0.0.35.130',
//     hostname: '0.0.35.130',
//     port: '',
//     pathname: '//anywebsite.com/index.html',
//     search: '?name=anukool&age=25&profession=webdeveloper',
//     searchParams: URLSearchParams { 'name' => 'anukool', 'age' => '25', 'profession' => 'webdeveloper' },
//     hash: ''
//   }