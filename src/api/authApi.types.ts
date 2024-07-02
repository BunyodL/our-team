export interface AuthApi {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<AuthUserType>;
  support: {
    url: string;
    text: string;
  };
}

interface AuthUserType {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export type SignUpResponseType = {
	id: number
	token: string
}