import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

export class VideoService {
  API_KEY = "AIzaSyBvd7lN7D5Xe5gNSCxPsYhc-RzirJit-90";
  VIDEOS_URL = "https://www.googleapis.com/youtube/v3";
  client?: AxiosInstance;

  initialize()
  {
    this.client = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      responseType: 'json'
    });
    
    this.client.interceptors.request.use((config: AxiosRequestConfig) => {

      config.params['regionCode'] = 'US';
      config.params['key'] = this.API_KEY;
      config.params['part'] = 'snippet,contentDetails';

      return config;
    });
  }

  async getChadsVideos(maxVids: number)
  {
    let chadsVideos = new Array<unknown>();

    try
    {
      const response = await this.client?.get('playlistItems', {
        params : {
          playlistId : 'PLySiLhgfbmzZ8guXBehNJ_8OMVXdS-Xkm',
          maxResults : maxVids
        }
      }) as AxiosResponse;

      chadsVideos = response.data.items;
    }
    catch(e)
    {
      console.log(e);
    }

    return chadsVideos
  }

  async getMostPopularVideos(maxVids: number)
  {
    let popularVideos = new Array<unknown>();

    try
    {
      const response = await this.client?.get('videos', {
        params : {
          chart : 'mostPopular',
          maxResults : maxVids
        }
      }) as AxiosResponse;

      popularVideos = response.data.items;
    }
    catch(e)
    {
      console.log(e);
    }

    return popularVideos
  }
}