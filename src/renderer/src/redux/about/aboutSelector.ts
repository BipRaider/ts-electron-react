import {
  TGetAboutBase,
  TGetAboutCertificates,
  TGetAboutDuration,
  TGetAboutLanguages,
  TGetAboutLink,
  TGetAboutPlaceWork,
  TGetAboutPosition,
  TGetAboutPrivate,
  TGetAboutStatus,
  TGetListAbout,
} from './interface';

export const getAbout: TGetListAbout = state => state.resume.about;
export const getAboutBase: TGetAboutBase = state => {
  const { id, name, description } = state.resume.about;
  return { id, name, description };
};
export const getAboutDuration: TGetAboutDuration = state => state.resume.about.duration;
export const getAboutPosition: TGetAboutPosition = state => state.resume.about.position;
export const getAboutPrivate: TGetAboutPrivate = state => state.resume.about.private;
export const getAboutStatus: TGetAboutStatus = state => state.resume.about.status;
export const getAboutPlaceWork: TGetAboutPlaceWork = state => state.resume.about.place_work;
export const getAboutLink: TGetAboutLink = state => state.resume.about.link;
export const getAboutLanguages: TGetAboutLanguages = state => state.resume.about.languages;
export const getAboutCertificates: TGetAboutCertificates = state => state.resume.about.certificates;
