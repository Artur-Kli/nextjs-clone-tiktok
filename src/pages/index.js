import Layout from '../components/Layout'
import Feed from '../components/Feed'
import Suggestions from '../components/Suggestions'
import { openDB } from '../lib/openDB'

export default function Index({posts}) {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestions></Suggestions>
    </Layout>
  )
}

export async function getServerSideProps(context) {

  const db = await openDB()
  const posts = await db.collection('feed').find().toArray()



  // const posts = [
  //   {id: 1,
  //   author: {
  //     id: 1, 
  //     avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/22701564e997029c06d4700ae5375bec.jpeg?x-expires=1609948800&x-signature=UhcY6v297csKRu9SkHpxrisDQ88%3D', 
  //     name: 'Will Smith', 
  //     username: 'willsmith'
  //   },
  //   description: 'Beautiful',
  //   tags: [{title: '#foryou'}, {title: '#youtube'}],
  //   songName: 'Rihanna - Umbrella',
  //   videoUrl: 'https://v77.tiktokcdn.com/13e152a523be3f8610eb139090dd2da2/5ff4e48f/video/tos/useast2a/tos-useast2a-ve-0068c002/e4e3f7e06594462d91d873a2b9c70275/?a=1233&br=1506&bt=753&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210105161242010189071066470CB5F3&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M29vNXY7Z3c8eTMzOTczM0ApOjM5ZzQ8OztlNzY7OjM5NmctcF5tLm5zcmRfLS1iMTZzcy0tLjRjLjIwNC41YzUxXmA6Yw%3D%3D&vl=&vr=',
  //   likes: 650,
  //   comments: 12,
  //   replies: 155,
  //   },
  //   {id: 2,
  //     author: {
  //       id: 1, 
  //       avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/22701564e997029c06d4700ae5375bec.jpeg?x-expires=1609948800&x-signature=UhcY6v297csKRu9SkHpxrisDQ88%3D', 
  //       name: 'Will Smith', 
  //       username: 'willsmith'
  //     },
  //     description: 'Beautiful',
  //     tags: [{title: '#foryou'}, {title: '#youtube'}],
  //     songName: 'Lady Gaga Judas - Hatukoo',
  //     videoUrl: 'https://v77.tiktokcdn.com/bbdcda535bffed9a806cf7c9abeb8710/5ff4e45f/video/tos/useast2a/tos-useast2a-pve-0068/d3a808ad85024f81b5424fbaed1e1208/?a=1233&br=3720&bt=1860&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210105161237010190208043420CD7A0&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3Z4aW94PGZweDMzZzczM0ApNDVpODZmNGU6NzxnNjllOmctZWUtY2Zvc2NfLS1jMTZzc2EvNDAuLjRgNTAuYjIvMWE6Yw%3D%3D&vl=&vr=',
  //     likes: 650,
  //     comments: 12,
  //     replies: 155,
  //     },
  // ]

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  }
}
