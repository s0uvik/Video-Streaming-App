const useFetchData = async (url) => {
  let results;
  let error;
  try {
    const response = await fetch(url);
    results = await response.json();
  } catch (err) {
    error = err;
  }

  return { results, error };
};

export default useFetchData;
