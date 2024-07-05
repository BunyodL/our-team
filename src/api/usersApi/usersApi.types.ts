interface SupportType {
  support: {
    url: string;
    text: string;
  };
}

export type FetchUsersParams = {
  page: number;
  per_page: number;
};

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
  data: UserType;
}

export type UpdatePhotoType = {
  userId: number;
  formData: FormData;
};
