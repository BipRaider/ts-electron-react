export enum GET_URL {
  Refresh = '/users/refresh',
  Library = '/library',
}

export enum POST_URL {
  Libraries = '/library',
  Skills = '/skill',
  Login = '/users/login',
  Register = '/users/register',
  Logout = '/users/logout',
  CreateLibrary = '/library/create',
  CreateSkill = '/skill/create',
}

export enum DELETE_URL {
  DeleteLibrary = '/library',
  DeleteSkill = '/skill',
}

export enum PATCH_URL {
  Login = '/users/login',
  Register = '/users/register',
  Logout = '/users/logout',
  Refresh = '/users/refresh',
  UpdateSkill = '/skill/update',
  UpdateLibrary = '/library/update',
}
