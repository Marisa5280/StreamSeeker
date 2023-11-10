const getUrlStreams = async (url) => {
  let res;
  try {
    const res = await fetch(
      `https://api.song.link/v1-alpha.1/links?url=${url}`
    );
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    return res.json();
  } catch (error) {
    return (res = { error });
  }
};

const getAltStreams = async (type, service, id) => {
  let res;
  try {
    const res = await fetch(
      `https://api.song.link/v1-alpha.1/links?platform=${service}&type=${type}&id=${id}`
    );
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    return res.json();
  } catch (error) {
    return (res = { error });
  }
};


export { getUrlStreams, getAltStreams };