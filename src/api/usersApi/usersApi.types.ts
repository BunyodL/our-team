interface SupportType {
  support: {
    url: string;
    text: string;
  };
}

export interface UsersApi extends SupportType {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<UserType>;
}

export interface UserType {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface SingleUserType extends SupportType {
	data: UserType
}
