export interface registerType {
  title?: string;
  subtitle?: React.ReactNode;
  subtext?: React.ReactNode;
}

export interface loginType {
  title?: string;
  subtitle?: React.ReactNode;
  subtext?: React.ReactNode;
  role?: roleType;
}

export interface signInType {
  title?: string;
}
export type roleType = 'admin' | 'brand';
  