
const url = "https://demo7242716.mockable.io/videos";
const getData = async () => {
  const data= await (await fetch(url)).json()
  return data;
};

export default getData ;
