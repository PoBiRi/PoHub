import axios from 'axios';

axios.defaults.withCredentials = true;

const domain = process.env.NODE_ENV === 'production' ? "http://pobijunior.com/" : "http://localhost/";

//get요청 매개변수는 라우터 address와 setData 함수
async function getData(address, setData) {
  try {
    const res = await axios.get(domain + address);
    if(setData && typeof setData === 'function'){
      setData(res.data);
    }
    return { success: true, data: res.data };
  } catch (error) {
    console.error('Fetch error:', error);
    return { success: false, error: error.message };
  }
}

//post요청 매개변수는 라우터 address와 postData 변수, setData 함수
async function postData(address, inputData, setData) {
  try {
    const res = await axios.post(domain + address, inputData);
    if(setData && typeof setData === 'function'){
      setData(res.data);
    }
    return { success: true, data: res.data };
  } catch (error) {
    console.error('Fetch error:', error);
    return { success: false, error: error.message };
  }
}

const downloadFile = async (fileName) => {
  try {
    const response = await axios.get(domain + `others/${fileName}`, {
      responseType: 'blob',
    });

    const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.error('Error downloading file:', error);
  }
};

export {getData, postData, downloadFile};