import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://test-tailwind.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "HEzmfe_5bxI4",
  fields: {
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "Apv7cchu1VOU",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "LN2qPJd8BfE4",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "Zn5fy-U5ZBdd",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "IXkz9B_78wra",
    },
    firstName: { type: "string", storageKey: "1YZS4Gszlz0w" },
    googleImageUrl: { type: "url", storageKey: "qzqc0W7b9ARr" },
    googleProfileId: { type: "string", storageKey: "bAwsYMy8quzP" },
    lastName: { type: "string", storageKey: "NEjS9cbeuZmY" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "3S65zqwQJIDT",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "DwZhCG6lp2SW",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "9tRriPZ6CIAF",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "MF1-Eiej_H_F",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "eznVGvTrdCzU",
    },
  },
};
