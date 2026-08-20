/**
 * Update these values for your seminar.
 * Drop the official e-cert template at public/img/STUDENT INV.png
 * and set `useCustomTemplate` to true. Name placement is in fractions of
 * the template width/height so it stays aligned at any download size.
 */
export const seminar = {
  title: "Student Leaders' Investiture",
  tagline: "LEAD. SERVE. INSPIRE",
  subtitle: "Certificate of Participation",
  dateLabel: "Youth Month 2026",
  organization: "CYSDO",
};

const DEFAULT_FEEDBACK_FORM_URL =
  "https://docs.google.com/forms/d/1MqY0zLilkT2CUckM-az3lXPfdCxHl8YANEIJPaH5_dE/viewform";

/** Spreadsheet ID and sheet GID from the responses spreadsheet URL */
const SPREADSHEET_ID = "1RMzDIvItF39nRpbaSTAF2zcLpTYsNGdl_tStGePLzGE";
const SHEET_GID = "0";

export const lookup = {
  spreadsheetId: (import.meta.env.VITE_SPREADSHEET_ID || SPREADSHEET_ID).trim(),
  sheetGid: (import.meta.env.VITE_SHEET_GID || SHEET_GID).trim(),
  feedbackFormUrl: (import.meta.env.VITE_FEEDBACK_FORM_URL || DEFAULT_FEEDBACK_FORM_URL).trim(),
};

export const certificateLayout = {
  /** Set true after you add the official template to public/img/ */
  useCustomTemplate: true,
  templateUrl: "/img/STUDENT%20INV.png",
  /** Landscape certificate size in CSS pixels (also PNG export size). */
  width: 2000,
  height: 1414,
  name: {
    // Centered on the blank line between "This certifies that"
    // and the underline, matching the template's design.
    x: 0.5,
    y: 0.42,
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: 100,
    color: "#000000",
    maxWidth: 0.72,
  },
};
