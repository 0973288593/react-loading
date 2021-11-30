import React,{ useState, useEffect} from 'react'


function User() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        setTimeout( async () => {
            const res= await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await res.json();
            setProfile(data);
        }, 2000);
    },[])



    return (
        <div className="user">
            <h2>User  Details</h2>
             {/* ถ้าสิ่งนี้เป็นจิงทางด้านซ้ายของเครื่องหมายคู่่ จากนั้นถึงส่งออกเทมเพลตนี้ที่นี้ 
            หากสิ่งนี้ไม่เป็นจิง มันจะไม่ไปถึงด้านนี้ด้วยซ้ำ เเละจะไม่ส่งออกสื่งนี้ 
            เมื่อได้ผลลัพกลับมาเเล้วเเละเราได้อัปเดทโปรไฟล์เเล้ว โปรไฟล์นี้จะถูกส่งหน้าจอหรือไม่ 
            มิฉะนั้นจะเป็นโมฆะเพื่อเริ่มต้นใหม่ เเละจะไม่เเสดงผล  
            ดังนั้นสิ่งที่เราจะต้องการที่เราต้องการจะเเสดงผลเมื่อเรามีโปรไฟล์นัน้เเล้ว 
            ข้อมูลให้ดีก่อน a จะเป็น div ดังนั้น div ด้วยชื่อคลาสนั้นจะเท่ากับโปรไฟล์เเละภาย */}
            {/* ถ้ามีข้อมูลมาใน profile จริงจะเเสดง เทมเพจ ด้านขวามือ */}
        {profile && (
            <div className="profile">
            <h3>{profile.username}</h3>
            <p>{profile.email}</p>
            <a href={profile.website}>{profile.website}</a>
            </div>
        )}
            {/* ถ้าไม่มีข้อมูลมาใน profile จริงจะเเสดง เทมเพจ ด้านขวามือ หรืออบู่ในระหว่าง รอข้อมูลห  ทำกลับกันกับเทมเพจข้างบน*/}
        {!profile && <div>Loading...อยู่ไอควายสันดานหมา</div>}

        </div>
        
    )
}

export default User
