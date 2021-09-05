const app = require('./app');

async function main()
{
    await app.listen(90);
    console.log('Server on port 90');
}

main();