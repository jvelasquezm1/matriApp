import { post, get } from "./api";
import { IGuest } from "src/types/guests.model";

export const addGuests = async (name: string, email: string, guests: number, message: string): Promise<{data:object, status: number}> => {
  const result = await post<IGuest>("addGuests", { name, email, guests, message });
  return result;
};

export const readGuests = async (): Promise<IGuest[]> => {
    return (await get<IGuest[]>("readGuests")).data;
};
