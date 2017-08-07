function HelloWorldPlugin () {}
HelloWorldPlugin.prototype.apply = function (compiler) {
    // console.log('compiler:', compiler);
    compiler.plugin('emit', function (compilation, cb) {
        console.log('编译阶段emit');
        compilation.chunks.forEach((chunk) => {
            chunk.files.forEach((fileName) => {
                console.log('模块名：', fileName);
            });
        });
        cb();
    });
}

module.exports = HelloWorldPlugin;