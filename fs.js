const fs = require("fs");

/**
 * 读取文件
 *
 * @param 需要读取的文件
 * @param 文件编码格式
 * @param 回调函数
 */
fs.readFile("./a.txt", "utf-8", function(err, data) {
  if (err) throw err;
  console.log(data);
});

/**
 * 写入文件
 *
 * @param 需要写入的文件
 * @param 需要写入的数据
 * @param 回调函数
 */
fs.writeFile("./b.txt", "需要写入的数据", function(err) {
  if (err) throw err;
});

/**
 * 追加写入内容
 *
 * @param 需要追加的文件
 * @param 追加写入的数据
 * @param 回调函数
 */
fs.appendFile("./b.txt", "追加写入的数据", function(err) {
  if (err) throw err;
});

/**
 * 删除文件
 *
 * @param 需要删除文件
 * @param 回调函数
 */
fs.unlink("./c.txt", function(err) {
  if (err) throw err;
});

/**
 * 创建文件夹
 *
 * @param 需要删除文件
 * @param 回调函数
 */
fs.mkdir("c", function(err) {
  if (err) throw err;
});

/**
 * 修改文件名/文件夹名
 *
 * @param 需要修改文件名/文件夹名
 * @param 新的文件名/文件夹名
 * @param 回调函数
 */
/*
fs.rename("c.txt", "d.txt", function(err) {
  if (err) throw err;
});
*/
fs.rename("c", "d", function(err) {
  if (err) throw err;
});



