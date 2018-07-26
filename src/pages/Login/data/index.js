const userInfo = {
  msg: 'Login message',
  uname: ""
}

export default (state = userInfo, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {msg: "success", uname: action.payload.username};

    case 'FAILURE':
    return {msg: "Invalid user credentials"};

    default:
      return state;
  }
};