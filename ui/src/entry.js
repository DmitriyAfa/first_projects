// const fs = require('fs');
// const path = require('path');

// function getAllFilesPaths(folder,extention){
//   const AllPathsList = [];
//   const pathDir = fs.readdirSync(`./src/${folder}`)
  
//   pathDir.forEach(file => {
//     if (path.extname(file) == ""){
//       const directory = fs.readdirSync(`./src/${folder}/${file}`);
//       directory.forEach(directoryFiles => {
//         if (path.extname(directoryFiles) == `.${extention}`){
//           AllPathsList.push(`import "./${folder}/${file}/${directoryFiles}"`);
//         }
//       })
//     }
//   })
//   console.log(AllPathsList.join(' '));
// }
// getAllFilesPaths('components','js')
// getAllFilesPaths('pages','js')

import "./theme/global.scss"

import "./components/bullet/bullet.js"
import "./components/button/button.js"
import "./components/checkbox/checkbox.js"
import "./components/date-dropdown/date-dropdown.js"
import "./components/drop-down/drop-down.js"
import "./components/evalution/evalution.js"
import "./components/header/header.js"
import "./components/input/input.js"
import "./components/layout/layout.js"
import "./components/like/like.js"
import "./components/pagination/pagination.js"
import "./components/radio/radio.js"
import "./components/range-slider/range-slider.js"
import "./components/rate-button/rate-button.js"
// import "./components/rectangle/rectangle.js"
import "./components/toggle/toggle.js"
import "./pages/base/base.js"
// import "./pages/color-type/color-type.js"
import "./pages/form-elements/form-elements.js"
