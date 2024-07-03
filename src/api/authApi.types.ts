export type Type = {
  id: number;
  token: string;
};

export type SignUpErrorResponseType = {
  data: {
    error: string;
  };
  status: number;
};
