export type SignUpQueryBody = { email: string; password: string };

export type SignUpResponseType = {
  id: number;
  token: string;
};

export type SignUpErrorResponseType = {
  data: {
    error: string;
  };
  status: number;
};
