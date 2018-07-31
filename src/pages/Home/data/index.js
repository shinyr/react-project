const msg = 'Hello everyone!  (Lang: This should be translated from API)';

export default (state = msg, action) => {
  switch (action.type) {
    case 'FILL':
      return msg;

    default:
      return state;
  }
};

