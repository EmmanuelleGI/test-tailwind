// Sets up the API client for interacting with your backend. 
// For your API reference, visit: https://docs.gadget.dev/api/test-tailwind
import { Client } from "@gadget-client/test-tailwind";

export const api = new Client({ environment: window.gadgetConfig.environment });
