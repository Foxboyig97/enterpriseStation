

const NEWS_LIST = '/api/news'
const NEWS_INFO = '/api/news'

const baseUrl = 'https://www.fastmock.site/mock/d8c33ca26a546a3c9be78ee13f714990/t1-0fficial'
//请求拦截器
axios.interceptors.request.use(async (config) => {
    config.baseURL = baseUrl
    config.timeout = 10000
    return config;

}, (error) => {
    Promise.reject(error)
})
//响应拦截器
axios.interceptors.response.use((res) => {
    return res;
}, (err) => {
    Promise.reject(err)
});

//axios封装post请求
export const axiosPostRequst = (url, data) => {
    let result = axios({
        method: 'post',
        url: url,
        data: data,
    }).then(resp => {
        return resp.data;
    }).catch(error => {
        return "exception=" + error;
    });
    return result;
}

//get请求
export const axiosGetRequst = (url) => {
    var result = axios({
        method: 'get',
        url: url
    }).then(function (resp) {
        return resp.data;
    }).catch(function (error) {
        return "exception=" + error;
    });
    return result;
}

//新闻api
function getNewsList(params) {
    return axiosGetRequst(`${NEWS_LIST}?${params}`)
}
function getNewInfo(params) {
    return axiosGetRequst(`${NEWS_INFO}/${params}`)

}

const requestServer = {
    getNewsList,
    getNewInfo
}

window.requestServer = requestServer