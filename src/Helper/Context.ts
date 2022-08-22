import { createContext, useContext } from "react";
// import SpeakerInterface from "../interfaces";
interface SpeakerInterface{
  id:number,
  photo:string,
  name:string,
  role:string,
  description:string,
}
interface TopicInterface{
  id:number,
  name:string,
  time:string
}

export type GlobalContent = {
  isAdmin: boolean;
  setAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  speakers: SpeakerInterface[];
  setSpeakers: React.Dispatch<React.SetStateAction<SpeakerInterface[]>>;
  topics: TopicInterface[];
  setTopics: React.Dispatch<React.SetStateAction<TopicInterface[]>>;
  photo: string;
  setPhoto: React.Dispatch<React.SetStateAction<string>>;
};

export const MyGlobalContext = createContext<GlobalContent>({
  isAdmin: false,
  setAdmin: () => {},
  speakers: [],
  setSpeakers: () => {},
  topics: [],
  setTopics: () => {},
  photo: "",
  setPhoto: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
