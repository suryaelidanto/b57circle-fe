export interface User {
  email: string;
  username: string;
  password: string;
  profile: Profile;
  followers: number;
  following: number;
  isFollowed: boolean;
}

export interface Profile {
  fullName: string;
  address: string;
  profilePicture: string;
  bio: string;
}

export interface UserJWTPayload {
  id: number;
  name: string;
  address: string;
  email: string;
  iat: number;
  exp: number;
};

