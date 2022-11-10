/**
 * interface
 * get Promise<SearchResult[]>
 */

import interceptor from './interceptor';
import { IGetSearchResultParams } from '../types/service';

export class SearchService {
  getSearchResult(params: IGetSearchResultParams) {
    console.info('calling api');
    return interceptor({
      method: 'get',
      url: '/sick',
      params,
    });
  }
}
