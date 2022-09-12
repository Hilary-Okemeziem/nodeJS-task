const fs = require('fs')

    const data = fs.readFileSync('./assets/index.txt', 'utf-8', (err) => {
        if (err) return err;
        console.log('Read Success');
    })

    fs.writeFileSync('./assets/newIndex.txt', data, 'utf-8', (err) => {
        if (err) return err;
        console.log('Write Success');
    })