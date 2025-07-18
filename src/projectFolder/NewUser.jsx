import React from 'react';
import { useSelector } from 'react-redux';

const NewUser = () => {
  const newUsers = useSelector((state) => state.newsubsciber.users)

  return (
    <div className='userSection'>
      Subscribers:
      {newUsers.map((item, index) => {
        return (
          <div>
            <ul key={index}>
              <li>{item}</li>
            </ul>
          </div>
        )
      })
      }

    </div>
  );
};

export default NewUser;
