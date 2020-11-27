export const like = (payload) => {
  return {
    type: "LIKE",
    payload: {
      id: payload.id
    }
  };
};

export const unlike = (payload) => {
  return {
    type: "UNLIKE",
    payload
  };
};
