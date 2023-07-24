export interface TDActivity {
  uuid: string;
  name: string;
  date: string;
  site: string;
  members: TDUser[];
}

export interface TDUser {
    username: string;
    age: number | undefined;
    identity: string | undefined;
    uid: string;
}
