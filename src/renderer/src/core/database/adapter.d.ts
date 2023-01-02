// import httpAdapter from 'axios/lib/adapters/http';

declare module 'axios/lib/adapters/http' {
  import axios from 'axios';
  const httpAdapter: axios.AxiosAdapter;
  namespace httpAdapter {}

  export = httpAdapter;
}
