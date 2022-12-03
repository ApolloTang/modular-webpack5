import './main.css'
import './setup-check--purge-css/'
import './setup-check--loading-images/'
import './setup-check--js/'
import './setup-check--typescript/'
import './setup-check--hmr/'
import './setup-check--react/'

// [NOTE]
//   To see fonts in action make sure you unzip monrope.zip in src/fonts/
import('~/fonts/').then(()=>{
  import('~/setup-check/setup-check--loading-fonts/')
})

