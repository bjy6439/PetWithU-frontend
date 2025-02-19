import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { GrShareOption } from 'react-icons/gr';
import * as F from './Feed.styles';
import FeedItem from './FeedItem';
import { useInView } from 'react-intersection-observer';

function Feed() {
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [feeds, setFeeds] = useState([]);
  const [users, setUsers] = useState([]);
  const [totalNum, setTotalNum] = useState([]);

  // useEffect(() => { 통신시 사용할 api
  //   fetch('http://3.38.247.226:3000/community', {
  //     headers: {
  //       Authorization:
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NTQyNzg0OX0.eJCOyCmFgkweT5kvq3YGVQU2q7nGSSIJ-4TuJw07HNQ',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setFeeds(data.postList.postList);
  //     });
  // }, []);

  useEffect(() => {
    fetch('/data/feedData.json')
      .then(res => res.json())
      .then(data => {
        setFeeds(data.postList);
      });
  }, []);

  const totalPage = Math.ceil(totalNum / 6);

  // useEffect(() => {
  //   inView && setPage(page + 1);
  // }, [inView]);

  return (
    <F.FeedContainer>
      <F.Feeds>
        {feeds.length > 0 &&
          feeds.map((item, index) => {
            return <FeedItem key={index} item={item} />;
          })}
        {/* <div ref={ref}></div> */}
      </F.Feeds>
    </F.FeedContainer>
  );
}

export default Feed;
