import es_AR from "@/app/_translations/es_AR";

const locals: Record<string, any> = {
  es_AR: es_AR,
};

const t = (key: string, config?: { params?: any; local: string }) => {
  const params = config?.params || {};
  const local = config?.local || "es_AR";

  const translations = locals[local];

  let translation = translations[key] || key;

  if (params) {
    Object.keys(params).forEach((key) => {
      if (params[key]) {
        translation = translation.replaceAll(`%{${key}}`, params[key]);
      }
    });
  }
  return translation;
};

export default t;
