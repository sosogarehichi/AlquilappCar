// This file exports interfaces that define the shape of data used in the backend, such as request and response types.

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
}

export interface UpdateUserRequest {
  id: string;
  name?: string;
  email?: string;
}