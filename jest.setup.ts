import "@testing-library/jest-dom";
import "whatwg-fetch";

global.IntersectionObserver = jest.fn().mockImplementation(() => {
  return {
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
    // Sertakan callback jika diperlukan untuk mock
  };
});

import { TextEncoder, TextDecoder } from "util";
(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;
