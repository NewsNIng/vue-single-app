import light from '!raw-loader!muse-ui/dist/theme-default.css'
import dark from '!raw-loader!muse-ui/dist/theme-dark.css'
import carbon from '!raw-loader!muse-ui/dist/theme-carbon.css'
import teal from '!raw-loader!muse-ui/dist/theme-teal.css'



const _themes = {
    light,
    dark,
    carbon,
    teal
  }

class Theme {
  constructor() {
    this.init()
  }
  init() {
    this.theme = 'light'
    this._localkey = '_local_theme_key_'
  }




  //加载主题
  loadTheme(themeName = false) {
    if (!themeName) {
      themeName = this._getLocalKeyName()
    }
    this._changeTheme(themeName)

    
  }

  _getLocalKeyName() {
    return window.localStorage.getItem(this._localkey) || this.theme
  }

  _changeTheme(theme) {
    this.theme = theme
    const styleEl = this._getThemeStyle()
    styleEl.innerHTML = _themes[theme] || ''
    window.localStorage.setItem(this._localkey, theme)
  }
  _getThemeStyle() {
    const themeId = 'muse-theme'
    let styleEl = document.getElementById(themeId)
    if (styleEl) return styleEl
    styleEl = document.createElement('style')
    styleEl.id = themeId
    document.body.appendChild(styleEl)
    return styleEl
  }

}

export default new Theme()

