

// 1º:

// const http = require('http');

// const PORT = 4000

// const server = http.createServer((req, res)=>{
//         if(req.url === '/info'){
//             const os = require('os')
//             console.log(os.cpus()) 
//             res.end()
//         }else{
//             res.writeHead(404, {'Content-Type':'text/html; charset=UTF-8'})
//             res.write('Página não encontrada')
//             res.end()
//         }
//      });

// server.listen(PORT, ()=>{
//     console.log(`Servidor rodando na porta ${PORT}`)
// })



// 2º:

// const myURL = new URL('https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf');


// console.log(myURL.host)
// console.log(myURL.pathname)
// console.log(myURL.search)




//3º:

//4º:
// const myURL = new URL('');
// const pathname = '/api/url.html';
// const search = null;
// const hash = '#url_new_url_input_base';
// const protocol = 'https:';
// const auth = null;
// const host = 'nodejs.org';
// const port = null;
// const hostname = 'nodejs.org';
// const path = '/api/url.html'

// const myURL = new URL(`${}`)
//5º:

// const os = require('os')

//  console.log(os.cpus()) 
