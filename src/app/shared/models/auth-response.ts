import {RecordModel} from "pocketbase";
import {User} from "@app/shared/models/user";

export interface AuthResponse {
  isValid: boolean;
  token: string;
  record: User |RecordModel;
}
