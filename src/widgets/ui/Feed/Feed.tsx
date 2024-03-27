import React, { useState } from 'react'
import './Feed.scss'
import {
    AutoSizer,
    InfiniteLoader,
    List,
    WindowScroller,
} from 'react-virtualized'
import { useFetchAllPostsQuery } from '../../../app/api/PostService'
import Post from '../Post/Post'
import ErrorComponent from '../ErrorComponent/ErrorComponent'
import Loader from '../../../entities/ui/Loader/Loader'
import { RowRendererParams } from '../../interfaces/RowRendererParams'

const Feed = () => {
    const [startCount, setStartCount] = useState(0)
    const limit = 10

    const {
        data: posts,
        error,
        isLoading,
    } = useFetchAllPostsQuery({ limit, startCount })

    const loadMoreRows = async () => {
        setStartCount(() => startCount + limit)
    }

    const rowRenderer = ({ key, index, style }: RowRendererParams) => {
        return posts ? (
            <div style={style} key={key} className='post-container'>
                <Post post={posts[index]}   />
            </div>
        ) : null
    }

    if(!posts) {
        if (isLoading) {
            return <Loader />
        }
        
        if (error) {
            return <ErrorComponent error={error} />
        }
    }

    return (
        <>
            {posts && (
                <div className="container">
                    <AutoSizer disableHeight={true}>
                        {({ width }) => (
                            <WindowScroller>
                                {({
                                    height,
                                    isScrolling,
                                    onChildScroll,
                                    scrollTop,
                                }) => (
                                    <InfiniteLoader
                                        isRowLoaded={({ index }) =>
                                            !!posts[index]
                                        }
                                        loadMoreRows={loadMoreRows}
                                        rowCount={1000}
                                        threshold={limit}
                                    >
                                        {({
                                            onRowsRendered,
                                            registerChild,
                                        }) => (
                                            <List
                                                autoHeight
                                                onRowsRendered={onRowsRendered}
                                                ref={registerChild}
                                                height={height}
                                                isScrolling={isScrolling}
                                                onScroll={onChildScroll}
                                                rowCount={posts.length}
                                                rowHeight={150}
                                                rowRenderer={rowRenderer}
                                                scrollTop={scrollTop}
                                                width={width}
                                            />
                                        )}
                                    </InfiniteLoader>
                                )}
                            </WindowScroller>
                        )}
                    </AutoSizer>
                </div>
            )}
        </>
    )
}

export default Feed
