const jimp = require("jimp");
const pathLib = require("path");
const fastGlob = require("fast-glob");
const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const fs = require("fs");

/*
jimp.read(pathLib.join(process.cwd(), "/img/soeborggruppe-gruppefoto-2018.jpg"))
    .then((img) => img.clone())
    .then((img) => img.resize(400, jimp.AUTO))
    .then((img) => img.writeAsync("img/soeborggruppe-gruppefoto-2018-resized.jpg"))
    .then(() => imagemin([ "img/soeborggruppe-gruppefoto-2018-resized.jpg" ], {
        plugins: [ imageminMozjpeg({ quality: 95 }) ]
    }))
    .then(async (result) => fs.writeFileSync("img/soeborggruppe-gruppefoto-2018-resized.jpg", result[0].data))
    .catch((error) => console.error("Something went wrong", error));
*/

findAllPhotos().then(resizePhotos).then(compressPhotos);

async function findAllPhotos() {
    let pathNames = await fastGlob("photos/**/*.jpg", { absolute: true });
    return pathNames.filter((pathName) => !pathName.match(/\-resized\-[0-9]+.jpg$/));
}

async function resizePhotos(paths) {
    let resizeWidths = [400, 600, 800];

    let total = paths.length * resizeWidths.length;
    let completed = 0;

    process.stdout.write("Resizing images...\r");

    let resizedImagePaths = await Promise.all(paths.map((path) => {
        return jimp.read(path)
            .then((img) => Promise.all(resizeWidths.map((width) => {
                let resizedPath = path.replace(/\.jpg$/, `-resized-${width}.jpg`);
                return img.clone()
                          .resize(width, jimp.AUTO)
                          .writeAsync(resizedPath)
                          .then(() => completed++)
                          .then(() => process.stdout.write(`Resized ${completed}/${total} images.\r`))
                          .then(() => resizedPath);
            })));
    }));

    console.log("");

    return resizedImagePaths.reduce((a, b) => a.concat(b));
}

async function compressPhotos(paths) {
    let total = paths.length;
    let completed = 0;

    process.stdout.write("Compressing images...\r");

    /*let compressedImages = await imagemin(paths, {
        plugins: [ imageminMozjpeg({ quality: 95 }) ]
    });*/ // if this does not work, try batching 100 at a time for compression
    let compressedImages = await imagemin([ "photos/**/*-resized-*.jpg" ], {
        plugins: [ imageminMozjpeg({ quality: 85 }) ]
    });

    process.stdout.write(`Compressed ${compressedImages.length} images.\r\n`);

    await Promise.all(compressedImages.map(({ data }, i) => {
        let path = paths[i];
        return new Promise((resolve, reject) => {
            fs.writeFile(path, data, (error) => {
                if(error) {
                    return reject(error);
                }
                completed++;
                process.stdout.write(`Saved ${completed}/${total} compressed images.\r`);
                resolve();
            });
        });
    }));

    console.log("\n");
}
