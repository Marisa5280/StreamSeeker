const getStreams = async () => {
  let res;
  try {
    const res = await fetch(
      "https://api.song.link/v1-alpha.1/links?url=spotify%3Atrack%3A0Jcij1eWd5bDMU5iPbxe2i"
    );
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    return res.json();
  } catch (error) {
    return (res = { error });
  }
};

// will need to make 2nd api call using other set of ?params and differentiate which to run based on form state.

export { getStreams };