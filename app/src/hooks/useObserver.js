import React, {useEffect, useRef} from 'react';
/**
 * Динамическая подгрузка следующей порции страниц когда отслеживаемый элемент в зоне видимости
 *
 * @param useRef ref ссылка на элемент за которым наблюдать
 * @param bool canLoad
 * @param bool isLoading
 * @param callback функция которую надо выполнить
 * */
export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef()
    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        let cb = (entries, observer) => {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }

        }
        observer.current = new IntersectionObserver(cb)
        observer.current.observe(ref.current)
    }, [isLoading])
}
