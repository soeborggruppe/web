const jimp = require("jimp");
const pathLib = require("path");
const fastGlob = require("fast-glob");
const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const fs = require("fs");

(async function() {
    await resizeAndCompressImages("photos/**/*.jpg");
    await resizeAndCompressImages("documents/**/*.jpg")
})();

async function resizeAndCompressImages(glob) {
    let paths = await findUnresizedImagesMatchingGlob(glob);
    let resizedImagePaths = await resizePhotos(paths);
    await compressPhotos(resizedImagePaths);
}

async function findUnresizedImagesMatchingGlob(glob) {
    let pathNames = await fastGlob(glob, { absolute: true });
    return pathNames.filter((pathName) => !pathName.match(/\-resized\-[0-9]+\.jpg$/));
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
    process.stdout.write("Compressing images...\r");

    let total = paths.length;
    let completed = 0;

    await Promise.all(paths.map((path) => {
        imagemin([ path ], { plugins: [ imageminMozjpeg({ quality: 85 }) ] })
            .then((compressedImages) => {

                console.debug(
                    "compressedImages",
                    path,
                    compressedImages.map((img) => `{${Object.keys(img).join(",")}}`).join(";")
                );

                let { data } = compressedImages[0];
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
            });
    }));

    console.log("\n");
}
