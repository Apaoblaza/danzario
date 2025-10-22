+34
-0

const STORAGE_KEY = "danzario:lead-registrations";

const isBrowser = typeof window !== "undefined" && typeof window.localStorage !== "undefined";

export const loadLeads = () => {
  if (!isBrowser) return [];

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("No se pudieron leer los leads almacenados", error);
    return [];
  }
};

export const saveLeads = (leads) => {
  if (!isBrowser) return leads;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
  } catch (error) {
    console.warn("No se pudieron guardar los leads", error);
  }

  return leads;
};

export const appendLead = (lead) => {
  const nextLeads = [...loadLeads(), lead];
  return saveLeads(nextLeads);
};