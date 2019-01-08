/// <reference path="./index.d.ts" />
import axios, { AxiosResponse } from 'axios';
import { endPoints } from './end-point';
import { helper as _ } from '../../../core/helpers';
import TvShow from './model';
import { addShow } from '../show/service';
const numTvShows = 50;

export const Service = {
  getItems: async (body: any, headers: any) => {
    try {
      const options: any[] = Array.from({ length: numTvShows }).map((...params: any[]) => {
        const number: number = params[1] + 1;
        const url = endPoints['tv-show']({ number });
        return axios.get(url).then(r => r).catch(e => null);
      });
      const response: any = await Promise.all(options);
      const _response = response.map((el: any) => {
        if (el && el !== null && el.status === 200) {
          const tvShow: TvShow = new TvShow(el.data);
          return addShow(tvShow.item);
        } else {
          return null;
        }
      });
      await Promise.all(_response);
      return { message: 'All items added to db' };
    }
    catch (err) {
      throw { ...err, message: err.message, node_stack: new Error(err) };
    }
  }
};
