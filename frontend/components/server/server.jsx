import React from 'react';
import ServersNav from '../servers/servers_nav';

// class Server extends 

const Server = () => {
  return (
    <div className='server__main-container'>
        <ServersNav />
        <div>
            Server Body
        </div>
    </div>
  )
}

export default Server