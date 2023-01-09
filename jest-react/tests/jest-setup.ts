import '@testing-library/jest-dom'
// import mockConsole from "jest-mock-console";
// mockConsole()

import server from "./mockServer/server";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
