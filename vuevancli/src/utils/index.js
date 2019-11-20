
import platform from './platform'
export const navigate=(routerName,titleName)=>{

    if(platform.ios){
        window.webkit.messageHandlers.h5ChangeUrl.postMessage({
                 routerName,
                titleName
            })
    }else {
        window.jsToJava.h5ChangeUrl(routerName, titleName);
    }
};


