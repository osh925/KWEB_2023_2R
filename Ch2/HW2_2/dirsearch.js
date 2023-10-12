const fs = require('fs');
const path = require('path');
const util = require('util');

const getdirectory = util.promisify(fs.readdir);
const getstatus = util.promisify(fs.stat);

async function directorySearch(dir){
    const FILE = await getdirectory(dir);
    FILE.forEach(async file => {
        const location = path.join(dir, file);
        const status = await getstatus(location);
        if(status.isDirectory()) await directorySearch(location)
        else if (path.extname(location) === '.js') console.log(location);
    });
};

(async () => {
    try {
        await directorySearch('./test');

    } catch (err) {
        console.error(err);
    }
}
)();