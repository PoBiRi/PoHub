import axios from 'axios';

axios.defaults.withCredentials = true;

const domain = process.env.NODE_ENV === 'production' ? "http://pobijunior.com/" : "http://localhost/";

//get요청 매개변수는 라우터 address와 setData 함수
async function getData(address, setData) {
  try {
      const res = await axios.get(domain + address);
      if(setData){
        setData(res.data);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
}

//post요청 매개변수는 라우터 address와 postData 변수, setData 함수
async function postData(address, inputData, setData) {
  try {
      const res = await axios.post(domain + address, inputData);
      if(setData){
        setData(res.data);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
}

export {getData, postData};