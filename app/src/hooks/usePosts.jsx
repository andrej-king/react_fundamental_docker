import {useMemo} from 'react'

// Собственные хуки

// Сортировка постов
export const useSortedPosts = (posts, sort) => {
    // useMemo кеширует данные, пока не измениться какой-либо из параметров
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts])

    return sortedPosts;
}

// Возвращает отфильтрованный и отсортированый массив
export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}
