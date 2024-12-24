import {createContext} from 'react'

interface AlertOption {
    name: string,
    messageConfirm: string,
    messageCancel: string,
}

const useAlert = () => {
    //alert 구현에 필요한 옵션?
    const defaultOptions : AlertOption = {
        name : "",
        messageConfirm: "확인",
        messageCancel: "취소"
    }

    const alertContext = createContext(defaultOptions);
    
}