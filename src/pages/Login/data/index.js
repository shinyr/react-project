const userInfo = {
  msg: 'Login message',
  uname: ""
}

export default (state = userInfo, action) => {
  switch (action.type) {
    case 'SUCCESS':
      console.log('success in reducer');
      cookie.save('sessionId', action.user.sid, { path: '/' })
      return {msg: "success", uname: action.payload.username};

    case 'FAILURE':
    console.log('error in reducer');
    return {msg: "Invalid user credentials"};

    default:
      return state;
  }
};