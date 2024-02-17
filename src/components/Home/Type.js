import React from "react";
import Typewriter from "typewriter-effect";
import user from '../../data/user/userdata.json'
function Type() {
  return (
    <Typewriter
      options={{
        strings:user.role,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
