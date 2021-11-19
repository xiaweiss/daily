
import OSS from 'ali-oss'
import glob from 'glob'

const options = {
  region: 'oss-cn-beijing',
  accessKeyId: '',
  accessKeySecret: '',
  bucket: 'xiaweiss',
  headers: {},
  test: false
}

function vitePluginAliOss (options) {
  const client = new OSS({
    region: options.region,
    accessKeyId: options.accessKeyId,
    accessKeySecret: options.accessKeySecret,
    bucket: options.bucket
  });

  // 判断文件是否存在

  async function isExistObject(name, options = {}) {
    try {
        const data = await client.head(name, options);
        console.log('文件存在', data.res.headers['last-modified'], data)
    }  catch (error) {
        if (error.code === 'NoSuchKey') {
          console.log('文件不存在', error)
        }
    }
  }
  // 用于判断未开启版本控制状态的Bucket中的Object是否存在。
  // 填写不包含Bucket名称在内的Object的完整路径，例如example/test.txt。
  const name = '/59864946_p0.png'
  isExistObject(name)

  return {
    name: 'vite-plugin-ali-oss',
    configResolved: async config => {
      const outputPath = path.resolve(slash(config.build.outDir))
      const files = await glob.sync(from)
      upload(files)
    }
  }
}

vitePluginAllOss(options)




// const headers = options.headers
// const publicPath = options.publicPath

// async function listBuckets () {
//   try {
//     let result = await client.listBuckets();
//     console.log(result);
//   } catch(err) {
//     console.log(err)
//   }
// }

// // listBuckets();

// // client.useBucket('xiaweiss');
// async function list () {
//   try {
//     let result = await client.list({
//       'max-keys': 5
//     })
//     console.log(result)
//   } catch (err) {
//     console.log (err)
//   }
// }
// list();

// /**
//  * https://help.aliyun.com/document_detail/64097.html
// 您还可以根据实际场景使用以下参数指定endpoint：
// 如果需要访问内网节点，请同时使用internal和region，并指定internal为true。
// 如果需要使用HTTPS访问OSS，请同时使用secure和region，并指定secure为true。
// 如果需要使用自定义访问域名，请同时使用cname和endpoint，并指定cname为true以及指定endpoint为用户绑定的自定义域名。
// 如果指定了endpoint，例如http://oss-cn-hangzhou.aliyuncs.com，则region会被忽略。endpoint也可以是IP地址形式，还支持指定为HTTPS。
// 如果未指定bucket，在进行Object相关操作时，请先调用useBucket接口（仅需要调用一次）。
// 如果需要指定访问OSS的API超时时间，请使用timeout。timeout的默认值为60000，单位为毫秒。
//  */


// /* 上传文件 */
// // client.useBucket('examplebucket');

// // async function put () {
// //   try {
// //     let result = await client.put('exampleobject.txt', 'D:\\localpath\\examplefile.txt');
// //     console.log(result);
// //    } catch (err) {
// //      console.log (err);
// //    }
// // }

// // put();

export default vitePluginAllOss
