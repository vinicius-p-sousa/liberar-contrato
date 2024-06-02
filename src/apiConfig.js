const apiConfig = {
  villanet: {
    url: import.meta.env.VITE_VILLANET_URL,
    token: import.meta.env.VITE_VILLANET_TOKEN
  },
  brshield: {
    url: import.meta.env.VITE_BRSHIELD_URL,
    token: import.meta.env.VITE_BRSHIELD_TOKEN
  },
  ntw: {
    url: import.meta.env.VITE_NTW_URL,
    token: import.meta.env.VITE_NTW_TOKEN
  },
  linknet: {
    url: import.meta.env.VITE_LINKNET_URL,
    token: import.meta.env.VITE_LINKNET_TOKEN
  }
};

export default apiConfig;