import React,{useState} from 'react'
import styles from './Rooms.module.css'
import RoomCard from '../../components/RoomCard/RoomCard'
import AddRoomModel from '../../components/AddRoomModel/AddRoomModel'
const room =[
    {
        id:1,
        topic: 'Which framework is best for frontend?',
        speakers: [
            {
            id:1,
            name: 'John Deoe',
            avatar: '/images/monkey.jpg'
            },
            {
            id: 2,
            name: 'Jane DOe',
            avatar:'/images/monkey.jpg'
            },
        ],
        totalPeople: 40,
    },
    {
        id:2,
        topic: 'Which framework is best for frontend?',
        speakers: [
            {
            id:1,
            name: 'John Deoe',
            avatar: '/images/monkey.jpg'
            },
            {
            id: 2,
            name: 'Jane DOe',
            avatar:'/images/monkey.jpg'
            },
        ],
        totalPeople: 40,
    },
    {
        id:3,
        topic: 'Which framework is best for frontend?',
        speakers: [
            {
            id:1,
            name: 'John Deoe',
            avatar: '/images/monkey.jpg'
            },
            {
            id: 2,
            name: 'Jane DOe',
            avatar:'/images/monkey.jpg'
            },
        ],
        totalPeople: 40,
    },
    {
        id:4,
        topic: 'Which framework is best for frontend?',
        speakers: [
            {
            id:1,
            name: 'John Deoe',
            avatar: '/images/monkey.jpg'
            },
            {
            id: 2,
            name: 'Jane DOe',
            avatar:'/images/monkey.jpg'
            },
        ],
        totalPeople: 40,
    }
]
const Rooms = () => {
    const [showModel, setShowModel] = useState(false);
    function openModel(){
        setShowModel(true);
    }
    return <>
    <div className='container'>
        <div className={styles.roomsHeader}>
            <div className={styles.left}>
                <span className={styles.heading}>All voice channels</span>
                <div className={styles.searchBox}>
                    <img src="/images/search.png" alt="" />
                    <input type="search" className={styles.searchInput} />
                </div>
            </div>
            <div className={styles.right}>
                <button onClick={openModel} className={styles.startButton}>
                    <img src="/images/home.png" alt="" />
                    <span>Start a Room</span>
                </button>
            </div>
        </div>
        <div className={styles.roomList}>
            {
                room.map(room => <RoomCard key={room.id} room={room}/>)
            }
        </div>
    </div>
    {showModel && <AddRoomModel onClose={()=>setShowModel(false)}/>}
  </>
}

export default Rooms