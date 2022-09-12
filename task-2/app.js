const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const homePage = fs.readFileSync('./index.html', (err, homePage) => {
        if (err) return err;
        console.log(homePage);
    })

    const aboutPage = fs.readFileSync('./about.html', (err, aboutPage) => {
        if (err) return err;
        console.log(aboutPage);
    })

    const contactPage = fs.readFileSync('./contact.html', (err, contactPage) => {
        if (err) return err;
        console.log(contactPage);
    })

    const notFound = fs.readFileSync('./notFound.html', (err, notFound) => {
        if (err) return err;
        console.log(notFound);
    })

    if (req.url === '/') {
        res.end(homePage)
    } else if (req.url === '/home') {
        res.end(homePage)
    } else if (req.url === '/about') {
        res.end(aboutPage)
    } else if (req.url === '/contact') {
        res.end(contactPage)
    } else {
        res.end(notFound)
    }

})

server.listen(5002, ()=> {
    console.log(`server is running on port 5002`);
})