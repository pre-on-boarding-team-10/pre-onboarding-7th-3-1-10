/**
 * interface
 * get Promise<SearchResult[]>
 */

import interceptor from './interceptor';
import { IGetSearchResultParams } from '../types/service';

export class SearchService {
  getSearchResult(params: IGetSearchResultParams) {
    return interceptor({
      url: '/sick',
      params,
    });
  }
}
