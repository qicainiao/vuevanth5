let currentLang = 'zh-CN';
export function getLang() {
  const localStorageLang = localStorage.getItem('JY_LANGUAGE')
  if(localStorageLang){
    currentLang = localStorageLang
    return localStorageLang
  }else{
    return currentLang
  }
}

export function setLang(lang, _THIS) {
  console.log("=========>",currentLang,lang)
  if (currentLang === lang) {
    return;
  }
  currentLang = lang;
  if (window.localStorage) {
    localStorage.setItem('JY_LANGUAGE', lang);
  }
  _THIS.$i18n.locale = lang;
}

setLang(currentLang);
