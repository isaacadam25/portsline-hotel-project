import React from 'react';
import { useRouter } from 'next/router';

const RoomDetail = () => {
  const router = useRouter();
  const roomId = router.query.roomId;

  return (
    <div>
      <h1>Room Details - {roomId}</h1>
    </div>
  );
};
export default RoomDetail;
