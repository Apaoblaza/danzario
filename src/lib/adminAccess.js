const ADMIN_FLAG_KEY = "danzario:admin-access";
const DEFAULT_PASSCODE = "danzario-admin";

const getPasscode = () => {
  if (typeof import.meta !== "undefined" && import.meta.env) {
    const configured = import.meta.env.VITE_ADMIN_PASSCODE;
    if (configured && typeof configured === "string") {
      return configured.trim();
    }
  }

  return DEFAULT_PASSCODE;
};

export const hasAdminAccess = () => {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(ADMIN_FLAG_KEY) === "granted";
};

export const grantAdminAccess = () => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(ADMIN_FLAG_KEY, "granted");
};

export const revokeAdminAccess = () => {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(ADMIN_FLAG_KEY);
};

export const verifyAdminPasscode = (candidate) => {
  if (typeof candidate !== "string") return false;
  return candidate.trim() === getPasscode();
};

export const getAdminPasscodeHint = () => {
  const passcode = getPasscode();
  if (passcode === DEFAULT_PASSCODE) {
    return "danzario-admin";
  }

  if (passcode.length <= 2) return "";

  const firstChar = passcode[0];
  const lastChar = passcode[passcode.length - 1];
  return `${firstChar}${"*".repeat(Math.max(passcode.length - 2, 1))}${lastChar}`;
};