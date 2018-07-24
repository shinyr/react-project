const msg = 'Login message';

export default (state = msg, action) => {
  switch (action.type) {
    case 'FILL':
      return msg;

    default:
      return state;
  }
};