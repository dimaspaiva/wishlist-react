export const requestData = async () => {
  const response = await fetch(
    "https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e"
  );
  return await response.json();
};
