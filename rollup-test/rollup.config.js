// import multi from '@rollup/plugin-multi-entry';

// export default {
//   input: ['batman.js', 'robin.js', 'joker.js'],
//   output: {
//     dir: 'output'
//   },
//   plugins: [multi()]
// };

// import css from 'rollup-plugin-css-only'
// import fs from 'fs'
// export default {
//   input: [
//     './src/index.js'
//   ],
//   output: [
//     {
//       dir: 'dist',
//       format: 'esm'
//     }
//   ],
//   plugins: [
//     css({
//       output: function (styles, styleNodes) {
//         console.log('css styles', styles)
//         console.log('styleNodes', styleNodes)
//         fs.writeFileSync('dist/bundle.css', styles)
//      }
//     })
//   ]
// }


// import embedCSS from 'rollup-plugin-embed-css';
// export default {
//   input: [
//     './src/index.js'
//   ],
//   output: [
//     {
//       dir: 'dist',
//       format: 'esm'
//     }
//   ],
//   plugins: [
//     embedCSS({/* Options */}),
//   ]
// };



import bundleScss from 'rollup-plugin-bundle-scss';
import vue from 'rollup-plugin-vue';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  plugins: [
    vue(),
    // put it after vue()
    bundleScss(),
  ],
};