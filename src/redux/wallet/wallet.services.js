import axios from "axios";

export const createWalletService = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("/createWallet")
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export const accessWalletService = (formData) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: "/accessWallet",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};
