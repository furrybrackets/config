import path from 'path';

export default async function getConfig(cwd, callback) {
    await import(path.join(cwd, 'liquid.config.js')).then(config => {
        callback(config);
    });
};