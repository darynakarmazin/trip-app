export interface AuthUser {
  token: string;
  user: {
    email: string;
    family_name: string;
    given_name: string;
    picture: string;
  };
}
