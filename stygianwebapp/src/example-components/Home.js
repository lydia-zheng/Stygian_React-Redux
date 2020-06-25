
//Stand along example component that just fetches api data
//functional component

import React, { useState, useEffect } from 'react';


const Home = (props) => {
  const [name, setName] = useState('there');
  useEffect(() => {
    fetch('http://localhost:9000/users/1')
      .then(res => res.text())
      .then(res => {
        const user = JSON.parse(res);
        if (user) setName(user.firstName);
      })
      .catch(err => err);
  }, []);
  return <h2>Hello {name}!</h2>;
};
export default Home;