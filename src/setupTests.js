window.matchMedia = jest.fn().mockImplementation((query) => ({
  addListener: jest.fn(),
  match: false,
  media: query,
  onchange: null,
  removeListener: jest.fn(),
}));

export default matchMedia;
