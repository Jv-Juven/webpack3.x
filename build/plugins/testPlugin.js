var TestPlugin = function () {}
TestPlugin.prototype.apply = function (compiler) {
    compiler.plugin('emit', function (compilation, callback) {
        let map = {};
        compilation.chunks.forEach(function (chunk) {
            map[chunk.name] = chunk.files[0];
            console.log(chunk.files[0]);
        });
        compilation.assets['map.js'] = {
            source: function () {
                return JSON.stringify(map);
            },
            size: function () {
                let length = 0;
                for (let attr in map) {
                    length++;
                }
                return length;
            }
        }
        callback();
    });
}

module.exports = TestPlugin;
